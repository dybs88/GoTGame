import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { GameService } from "./game.service";
import { ChatServer } from "./../../../dal/infrastructure/chat.server";
import { GameChat, ChatData } from "./../../../../models/gameChat.model";
import { PlayerService } from "./player.service";

@Injectable()
export class ChatService {
  constructor(private server: ChatServer, private gameService: GameService, private playerService: PlayerService) {

   }

  deletePlayerChats(playerId: number): Observable<boolean> {
    return this.server.deletePlayerChats(playerId);
  }

  createPrivateChat(gameId: number, playerId: number, playerIds: number[]): Observable<any> {
    return this.server.createPrivateChat(gameId, playerId, playerIds);
  }

  getChatDatas(chatId: number): Observable<any> {
    return this.server.getChatData(this.playerService.currentPlayer.id, chatId);
  }

  getGameChats(): Observable<GameChat[]> {
    return this.server.getGameChats(this.gameService.currentGame.id);
  }

  updateChat(chatId: number, chatData: ChatData): Observable<GameChat> {
    return this.server.updateChatData(chatId, chatData);
  }
}
