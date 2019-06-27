import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { Game } from "src/models/game.model";
import { Player } from "src/models/player.model";
import { PlayerServer } from "src/modules/dal/infrastructure/player.server";
import { PlayerStatus } from "../consts/goTEnums";
import { GameService } from "./game.service";

@Injectable()
export class PlayerService {
  private playerToken: string;
  public currentPlayer: Player;

  constructor(private server: PlayerServer) {
    if (localStorage.getItem("player_id") !== null && localStorage.getItem("player_id") !== "") {
      this.server.getPlayer(parseInt(localStorage.getItem("player_id"), 10)).subscribe(serverData => {
        this.currentPlayer = serverData;
      });
    }
   }

  get token() {
    return this.playerToken;
  }

  public changeStatus(playerStatus: string) {
    this.currentPlayer.status = PlayerStatus[playerStatus];
    this.updatePlayer(this.currentPlayer).subscribe(serverData => {
      this.setPlayer(serverData);
    });
  }

  public clearPlayer() {
    this.playerToken = "";
    this.currentPlayer = null;
    localStorage.setItem("player_id", undefined);
  }

  public deletePlayer(playerId?: number): Observable<any> {
    if (playerId === undefined) {
      return this.server.deletePlayer(this.currentPlayer.gameId, this.currentPlayer.id);
    } else {
      return this.server.deletePlayer(this.currentPlayer.gameId, playerId);
    }
  }

  public getPlayer(playerId: number): Observable<Player> {
    return this.server.getPlayer(playerId);
  }

  public joinGame(game: Game, newPlayer: Player) {
    this.playerToken = `${game.id}-${game.name}`;
    this.setPlayer(newPlayer);
  }

  public setPlayer(player: Player) {
    this.currentPlayer = player;
    localStorage.setItem("player_id", this.currentPlayer.id.toString());
  }

  public setPlayerById(playerId: number) {
    this.server.getPlayer(playerId).subscribe(serverData => {
      this.setPlayer(serverData);
    });
  }

  public updatePlayer(player: Player): Observable<Player> {
    return this.server.updatePlayer(player);
  }
}
