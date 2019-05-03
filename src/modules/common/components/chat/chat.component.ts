import { Component, Input, SimpleChanges } from "@angular/core";

import { timer, Subscription } from "rxjs";

import { ChatService } from "./../../infrastructure/services/chat.service";
import { PlayerService } from "src/modules/common/infrastructure/services/player.service";
import { GameChat, ChatData } from "./../../../../models/gameChat.model";
import { GameService } from "../../infrastructure/services/game.service";
import { text } from "@angular/core/src/render3/instructions";
import { Player } from "src/models/player.model";


@Component({
  selector: "got-chat",
  templateUrl: "chat.component.html"
})
export class ChatComponent {
  private gameChats: GameChat[] = new Array<GameChat>();
  selectedChat: GameChat = new GameChat();
  text: string = "";

  @Input()
  players: Player[];

  timerSubscription: Subscription;
  chatSubscription: Subscription;

  constructor(private chatService: ChatService,
    private playerService: PlayerService,
    private gameRepository: GameService) {
    this.chatService.getGameChats().subscribe(serverData => {
      this.gameChats.push(serverData.find(gc => gc.name === "Public"));
      for (let i = 0; i < serverData.length; i++) {
        if (serverData[i].isPrivate && serverData[i].players.find(cp => cp.playerId === this.playerService.player.id)) {
          this.setChatName(serverData[i]);
          this.gameChats.push(serverData[i]);
        }
      }
      this.selectedChat = this.gameChats.find(gc => gc.name === "Public");
    });
    this.refreshChat();
  }

  createPrivateChat(playerId: number) {
    if (this.gameChats.find(gc => gc.players.find(cp => cp.playerId === playerId) !== undefined)) {
      this.selectedChat = this.gameChats
        .find(gc => gc.players.find(cp => cp.playerId === playerId) !== undefined);
      return;
    }
    this.chatService.createPrivateChat(this.gameRepository.currentGame.id, this.playerService.player.id,
      new Array<number>(this.playerService.player.id, playerId))
    .subscribe(serverData => {
      const privateGameChat = serverData;
      this.setChatName(privateGameChat);
        this.gameChats.push(privateGameChat);
        this.selectedChat = privateGameChat;
    });
  }

  deletePlayerChats(playerId: number) {
    const playerChats = this.gameChats.filter(gc => gc.players.find(cp => cp.playerId === playerId) !== undefined);
    if (playerChats !== undefined) {
      for (let i = 0; i < playerChats.length; i++) {
        this.gameChats.splice(this.gameChats.indexOf(playerChats[i], 1));
      }
    }

    this.chatService.deletePlayerChats(playerId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes["players"];
    if (!change.isFirstChange() && change.currentValue.length !== change.previousValue.length) {
      const playerIds = this.players.map(p => p.id);
      for (let i = 0; i < this.gameChats.length; i++) {
        if (this.gameChats[i].players.find(p => playerIds.includes(p.playerId)) === undefined && this.gameChats[i].isPrivate) {
          if (this.selectedChat.id === this.gameChats[i].id) {
            this.selectedChat = this.gameChats.find(gc => gc.name === "Public");
          }

          this.gameChats.splice(i, 1);
        }
      }
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  refreshChat() {
    if (this.selectedChat !== undefined) {
      this.chatSubscription = this.chatService.getChatDatas(this.selectedChat.id).subscribe(response => {
        if (response.gameChats !== undefined) {
          const playerChats: GameChat[] = response.gameChats
            .map(gc => new GameChat(gc.id, gc.name, gc.gameId, gc.isPrivate, gc.chatDatas, gc.players));
          for (let i = 0; i < playerChats.length; i++) {
            if (playerChats[i].players.find(cp => cp.isNew && cp.playerId === this.playerService.player.id)) {
              const privateGameChat = playerChats[i];
              this.setChatName(privateGameChat);
              this.gameChats.push(playerChats[i]);
            }
          }
        }

        this.selectedChat.chatDatas = response.chatDatas;
      });
    }
    this.subscribeNextRefresh();
  }

  selectChat(chatId: number) {
    this.selectedChat = this.gameChats.find(gc => gc.id === chatId);
  }

  sendMessage() {
    if (this.text !== "") {
      this.chatService.updateChat(this.selectedChat.id, new ChatData(this.playerService.player.name, this.text)).subscribe();
      this.text = "";
    }
  }

  private setChatName(privateChat: GameChat) {
    privateChat.name = privateChat.players.find(cp => cp.playerId !== this.playerService.player.id).name;
  }

  private subscribeNextRefresh() {
    this.timerSubscription = timer(500).subscribe(() => this.refreshChat());
  }

  private unsubscribe() {
    this.chatSubscription.unsubscribe();
    this.timerSubscription.unsubscribe();
  }
}
