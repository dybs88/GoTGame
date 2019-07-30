import { Component, Input, SimpleChanges, OnChanges, OnDestroy } from "@angular/core";

import { timer, Subscription } from "rxjs";

import { ChatService } from "./../../infrastructure/services/chat.service";
import { PlayerService } from "src/modules/common/infrastructure/services/player.service";
import { GameChat, ChatData } from "./../../../../models/gameChat.model";
import { Player } from "src/models/player.model";
import { GameService } from "../../infrastructure/services/game.service";
import { MapHelper } from "../../infrastructure/helpers/map.helper";


@Component({
  selector: "got-chat",
  templateUrl: "chat.component.html"
})
export class ChatComponent implements OnChanges, OnDestroy {
  private gameChats: GameChat[] = new Array<GameChat>();
  selectedChat: GameChat;
  text: string = "";

  get houses() { return this.gameService.gameBoard.houses; }

  @Input() showPlayerList: boolean;

  timerSubscription: Subscription;
  chatSubscription: Subscription;

  constructor(private chatService: ChatService,
    private playerService: PlayerService,
    private mapHelper: MapHelper,
    private gameService: GameService) {
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
      this.selectedChat = this.mapHelper.mapOnGameChat(publicChat);
    });
    this.refreshChat();
  }

  createPrivateChat(playerId: number) {
    if (this.gameChats.find(gc => gc.players.find(cp => cp.playerId === playerId) !== undefined)) {
      this.selectedChat = this.gameChats
        .find(gc => gc.players.find(cp => cp.playerId === playerId) !== undefined);
      return;
    }
    this.chatService.createPrivateChat(this.gameService.currentGame.id, this.playerService.currentPlayer.id,
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

  houseTableRowStyle(description: any) {
    return {
      "font-size": "small",
      "background-color": description.styles.firstColor,
      "color": description.styles.secondColor
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes["players"];
    if (change !== undefined && !change.isFirstChange() && change.currentValue.length < change.previousValue.length) {
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
          const playerChats: GameChat[] = this.mapHelper.mapOnGameChatArray(response.gameChats);
          for (let i = 0; i < playerChats.length; i++) {
            if (playerChats[i].players.find(cp => cp.playerId === this.playerService.currentPlayer.id)) {
              const privateGameChat = playerChats[i];
              privateGameChat.name = this.setPrivateChatName(privateGameChat);
              const gameChat = this.gameChats.find(gc => gc.id === privateGameChat.id);
              if (gameChat === undefined) {
                this.gameChats.push(playerChats[i]);
              } else {
                if (privateGameChat.players.find(cp => cp.playerId === this.playerService.currentPlayer.id).isNew) {
                  gameChat.players.find(cp => cp.playerId === this.playerService.currentPlayer.id).isNew = true;
                  this.chatService.newMessages = true;
                }
              }
            }
          }
        }

        this.selectedChat.chatDatas = response.chatDatas;
      });
    }
    this.subscribeNextRefresh();
  }

  markNewMessage(chatId: number): boolean {
    const gameChat = this.gameChats.find(gc => gc.id === chatId);
    return gameChat.players.some(pc => pc.playerId === this.playerService.currentPlayer.id && pc.isNew);
  }

  selectChat(chatId: number) {
    this.selectedChat = this.gameChats.find(gc => gc.id === chatId);
    if (this.selectedChat.isPrivate) {
      this.selectedChat.players.find(pc => pc.playerId === this.playerService.currentPlayer.id).isNew = false;
      if (this.gameChats.some(gc => gc.players.every(pc => !pc.isNew))) {
        this.chatService.newMessages = false;
      }
      this.chatService.markChatAsReaded(chatId).subscribe();
    }
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
    if (this.playerService.currentPlayer.locale === "pl-PL") {
      return "Publiczny";
    } else {
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
