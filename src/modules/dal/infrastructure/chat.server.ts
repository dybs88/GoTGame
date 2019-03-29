import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { RestServer } from "./rest.server";
import { ChatData } from "src/modules/common/infrastructure/services/chat.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ChatServer extends RestServer {
  constructor(http: HttpClient) {
    super(http);
  }

  public getChatData(gameId: number): Observable<ChatData[]> {
    return this.http.get<ChatData[]>(`${this.baseUrl}/chat/${gameId}`);
  }

  public updateChatData(gameId: number, data: ChatData): Observable<ChatData[]> {
    return this.http.post<ChatData[]>(`${this.baseUrl}/chat`, {gameId, data});
  }
}
