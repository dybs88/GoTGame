import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { GameRepository } from "./../../../dal/infrastructure/repositories/game.repository";
import { ChatServer } from "./../../../dal/infrastructure/chat.server";
import { GameChat, ChatData } from "./../../../../models/gameChat.model";

@Injectable()
export class ChatService {
  constructor(private server: ChatServer, private gameRepository: GameRepository) { }

  deletePlayerChats(playerId: number): Observable<boolean> {
    return this.server.deletePlayerChats(playerId);
  }

  createPrivateChat(gameId: number, playerIds: number[]): Observable<GameChat> {
    return this.server.createPrivateChat(gameId, playerIds);
  }

  getChatDatas(chatId: number): Observable<ChatData[]> {
    return this.server.getChatData(chatId);
  }

  getGameChats(): Observable<GameChat[]> {
    return this.server.getGameChats(this.gameRepository.currentGame.id);
  }

  updateChat(chatId: number, chatData: ChatData): Observable<GameChat> {
    return this.server.updateChatData(chatId, chatData);
  }
}
