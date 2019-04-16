import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { RestServer } from "./rest.server";
import { Injectable } from "@angular/core";
import { GameChat, ChatData } from "./../../../models/gameChat.model";

@Injectable()
export class ChatServer extends RestServer {
  constructor(http: HttpClient) {
    super(http);
  }

  public deletePlayerChats(playerId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/chat/delete/${playerId}`, super.getOptions());
  }

  public getChatData(chatId: number): Observable<ChatData[]> {
    return this.http.get<ChatData[]>(`${this.baseUrl}/chat/getchatdata/${chatId}`, super.getOptions());
  }

  public createPrivateChat(gameId: number, playerIds: number[]): Observable<GameChat> {
    return this.http.post<GameChat>(`${this.baseUrl}/chat/create`, {gameId, playerIds}, super.getOptions());
  }

  public getGameChats(gameId: number): Observable<GameChat[]> {
    return this.http.get<GameChat[]>(`${this.baseUrl}/chat/${gameId}`, super.getOptions());
  }

  public updateChatData(chatId: number, data: ChatData): Observable<GameChat> {
    return this.http.post<GameChat>(`${this.baseUrl}/chat`, {chatId, data}, super.getOptions());
  }
}
