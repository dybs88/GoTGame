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

  public getChatData(playerId: number, chatId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/chat/getchatdata/${playerId}/${chatId}`, super.getOptions());
  }

  public createPrivateChat(gameId: number, playerId: number, playerIds: number[]): Observable<GameChat> {
    return this.http.post<GameChat>(`${this.baseUrl}/chat/create`, {gameId, playerId, playerIds}, super.getOptions());
  }

  public getGameChats(gameId: number): Observable<GameChat[]> {
    return this.http.get<GameChat[]>(`${this.baseUrl}/chat/${gameId}`, super.getOptions());
  }

  public updateChatData(chatId: number, data: ChatData): Observable<GameChat> {
    return this.http.post<GameChat>(`${this.baseUrl}/chat`, {chatId, data}, super.getOptions());
  }
}
