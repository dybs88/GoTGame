import { Component } from "@angular/core";

import { timer, Subscription } from "rxjs";

import { ChatService } from "./../../infrastructure/services/chat.service";
import { PlayerService } from "src/modules/common/infrastructure/services/player.service";
import { GameChat, ChatData } from "./../../../../models/gameChat.model";
import { GameService } from "../../infrastructure/services/game.service";


@Component({
  selector: "got-chat",
  templateUrl: "chat.component.html"
})
export class ChatComponent {
  private gameChats: GameChat[] = new Array<GameChat>();
  selectedChat: GameChat = new GameChat();
  text: string = "";

  timerSubscription: Subscription;
  chatSubscription: Subscription;

  constructor(private chatService: ChatService,
    private playerService: PlayerService,
    private gameRepository: GameService) {
    this.chatService.getGameChats().subscribe(serverData => {
      this.gameChats.push(serverData.find(gc => gc.name === "Public"));
      for (let i = 0; i < serverData.length; i++) {
        if (serverData[i].isPrivate && serverData[i].players.find(cp => cp.playerId === this.playerService.player.id)) {
          const privateGameChat = serverData[i];
          privateGameChat.name = this.gameRepository.currentGame.players
          .find(p => p.id === serverData[i].players.find(cp => cp.playerId !== this.playerService.player.id).playerId).name;
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
      privateGameChat.name = this.gameRepository.currentGame.players
        .find(p => p.id === serverData.players.find(cp => cp.playerId !== this.playerService.player.id).playerId).name;
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
              privateGameChat.name = this.gameRepository.currentGame.players
                .find(p => p.id === privateGameChat.players.find(cp => cp.playerId !== this.playerService.player.id).playerId).name;
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

  private subscribeNextRefresh() {
    this.timerSubscription = timer(500).subscribe(() => this.refreshChat());
  }

  private unsubscribe() {
    this.chatSubscription.unsubscribe();
    this.timerSubscription.unsubscribe();
  }
}
