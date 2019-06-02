import { Component, Input, SimpleChanges } from "@angular/core";

import { timer, Subscription } from "rxjs";

import { ChatService } from "./../../infrastructure/services/chat.service";
import { PlayerService } from "src/modules/common/infrastructure/services/player.service";
import { GameChat, ChatData } from "./../../../../models/gameChat.model";
import { GameListService } from "../../infrastructure/services/gameList.service";
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
    private gameRepository: GameListService) {
    this.chatService.getGameChats().subscribe(serverData => {
      const publicChat = serverData.find(gc => gc.isPrivate === false);
      publicChat.name = this.setPublicChatName();
      this.gameChats.push(publicChat);
      for (let i = 0; i < serverData.length; i++) {
        if (serverData[i].isPrivate && serverData[i].players.find(cp => cp.playerId === this.playerService.currentPlayer.id)) {
          serverData[i].name = this.setPrivateChatName(serverData[i]);
          this.gameChats.push(serverData[i]);
        }
      }
      this.selectedChat = publicChat;
    });
    this.refreshChat();
  }

  createPrivateChat(playerId: number) {
    if (this.gameChats.find(gc => gc.players.find(cp => cp.playerId === playerId) !== undefined)) {
      this.selectedChat = this.gameChats
        .find(gc => gc.players.find(cp => cp.playerId === playerId) !== undefined);
      return;
    }
    this.chatService.createPrivateChat(this.gameRepository.currentGame.id, this.playerService.currentPlayer.id,
      new Array<number>(this.playerService.currentPlayer.id, playerId))
    .subscribe(response => {
      if (response.privateChatCreated) {
        const privateGameChat = response.privateGameChat;
        privateGameChat.name = this.setPrivateChatName(privateGameChat);
        if (this.gameChats.find(gc => gc.id === privateGameChat.id) === undefined) {
          this.gameChats.push(privateGameChat);
        }
        this.selectedChat = privateGameChat;
      }
    });
  }

  deletePlayerChats(playerId: number) {
    const playerChats = this.gameChats.filter(gc => gc.players.find(cp => cp.playerId === playerId) !== undefined);
    if (playerChats !== undefined) {
      for (let i = 0; i < playerChats.length; i++) {
        this.gameChats.splice(this.gameChats.indexOf(playerChats[i], 1));
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes["players"];
    if (!change.isFirstChange() && change.currentValue.length < change.previousValue.length) {
      for (let x = 0; x < change.previousValue.length; x++) {
        if (change.currentValue.find(p => p.id === change.previousValue[x].id) === undefined) {
          this.deletePlayerChats(change.previousValue[x].id);
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
            if (playerChats[i].players.find(cp => cp.isNew && cp.playerId === this.playerService.currentPlayer.id)) {
              const privateGameChat = playerChats[i];
              privateGameChat.name = this.setPrivateChatName(privateGameChat);
              if (this.gameChats.find(gc => gc.id === playerChats[i].id) === undefined) {
                this.gameChats.push(playerChats[i]);
              }
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
      this.chatService.updateChat(this.selectedChat.id, new ChatData(this.playerService.currentPlayer.name, this.text)).subscribe();
      this.text = "";
    }
  }

  private setPrivateChatName(privateChat: GameChat): string {
    return privateChat.players.find(cp => cp.playerId !== this.playerService.currentPlayer.id).name;
  }

  private setPublicChatName(): string {
    if (localStorage.getItem("locale_id") === "pl-PL") {
      return "Publiczny";
    } else if (localStorage.getItem("locale_id") === "en-EN") {
      return "Public";
    }
  }

  private subscribeNextRefresh() {
    this.timerSubscription = timer(500).subscribe(() => this.refreshChat());
  }

  private unsubscribe() {
    this.chatSubscription.unsubscribe();
    this.timerSubscription.unsubscribe();
  }
}
