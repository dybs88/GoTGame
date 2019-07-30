import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { Game } from "src/models/game.model";
import { Player } from "src/models/player.model";
import { PlayerServer } from "src/modules/dal/infrastructure/player.server";
import { PlayerStatus } from "../consts/goTEnums";
import { environment } from "src/environments/environment";
import { LocalizationService } from "../locale/localization.service";

@Injectable()
export class PlayerService {
  private playerToken: string;
  public currentPlayer: Player;

  constructor(private server: PlayerServer) {
    if (environment.environmentName === "Production") {
      this.getClientIp().subscribe(client => {
        this.getPlayerByIp(client.ip).subscribe(getPlayerResponse => {
          if (getPlayerResponse === null) {
            const newPlayer = new Player();
            newPlayer.ipAddress = client.ip;
            newPlayer.locale = navigator.language === "pl-PL" ? "pl-PL" : "en-EN";
            this.updatePlayer(newPlayer).subscribe(updatePlayerResponse => {
              this.currentPlayer = updatePlayerResponse;
            });
          } else {
            this.currentPlayer = getPlayerResponse;
          }
        });
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
    this.currentPlayer = undefined;
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

  public getPlayerByIp(ipAddress: string): Observable<Player> {
    return this.server.getPlayerByIp(ipAddress);
  }

  public getClientIp(): Observable<any> {
    return this.server.getClientIp();
  }

  public joinGame(game: Game, newPlayer: Player) {
    this.playerToken = `${game.id}-${game.name}`;
    this.setPlayer(newPlayer);
  }

  public setPlayer(player: Player) {
    if (player !== null) {
      this.currentPlayer = player;
    }
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
