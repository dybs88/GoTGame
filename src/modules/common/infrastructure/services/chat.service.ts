import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

import { GameRepository } from "./../../../dal/infrastructure/repositories/game.repository";
import { ChatServer } from "./../../../dal/infrastructure/chat.server";

export class ChatData {
  constructor(public playerName: string,
    public text: string) { }
}

@Injectable()
export class ChatService {
  constructor(private server: ChatServer, private gameRepository: GameRepository) { }

  getChat(): Observable<ChatData[]> {
    return this.server.getChatData(this.gameRepository.currentGame.id);
  }

  updateChat(chatData: ChatData): Observable<ChatData[]> {
    return this.server.updateChatData(this.gameRepository.currentGame.id, chatData);
  }
}
