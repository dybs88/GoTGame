import { Component } from "@angular/core";

import { timer, Subscription } from "rxjs";

import { ChatService } from "./../../infrastructure/services/chat.service";
import { PlayerService } from "src/modules/common/infrastructure/authorization/player.service";
import { GameChat, ChatData } from "./../../../../models/gameChat.model";
import { GameRepository } from "./../../../dal/infrastructure/repositories/game.repository";


@Component({
  selector: "got-chat",
  templateUrl: "chat.component.html"
})
export class ChatComponent {
  private gameChats: GameChat[] = new Array<GameChat>();
  selectedChat: GameChat;
  text: string = "";

  timerSubscription: Subscription;
  chatSubscription: Subscription;

  constructor(private chatService: ChatService,
    private playerService: PlayerService,
    private gameRepository: GameRepository) {
    this.chatService.getGameChats().subscribe(serverData => {
      this.gameChats.push(serverData.find(gc => gc.name === "Public"));
      for (let i = 0; i < serverData.length; i++) {
        if (serverData[i].isPrivate && serverData[i].players.find(x => x === this.playerService.player.id)) {
          const privateGameChat = serverData[i];
          privateGameChat.name = this.gameRepository.currentGame.players
          .find(p => p.id === serverData[i].players.find(x => x !== this.playerService.player.id)).name;
          this.gameChats.push(serverData[i]);
        }
      }

      this.selectedChat = this.gameChats.find(gc => gc.name === "Public");
    });
    this.refreshChat();
  }

  createPrivateChat(playerId: number) {
    if (this.gameChats.find(gc => gc.players.includes(playerId))) {
      this.selectedChat = this.gameChats.find(gc => gc.players.includes(playerId));
      return;
    }
    this.chatService.createPrivateChat(this.playerService.player.gameId, new Array<number>(this.playerService.player.id, playerId))
    .subscribe(serverData => {
      const privateGameChat = serverData;
      privateGameChat.name = this.gameRepository.currentGame.players
        .find(p => p.id === serverData.players.find(i => i !== this.playerService.player.id)).name;
        this.gameChats.push(privateGameChat);
        this.selectedChat = privateGameChat;
    });
  }

  deletePlayerChats(playerId: number) {
    const playerChats = this.gameChats.filter(gc => gc.players.includes(playerId));
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
      this.chatSubscription = this.chatService.getChatDatas(this.selectedChat.id).subscribe(serverData => {
        this.selectedChat.chatDatas = serverData;
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
