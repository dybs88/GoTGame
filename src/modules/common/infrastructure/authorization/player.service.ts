import { Injectable } from "@angular/core";

import { Game } from "src/models/game.model";
import { Player } from "src/models/player.model";
import { PlayerRepository } from "src/modules/dal/infrastructure/repositories/player.repository";

@Injectable()
export class PlayerService {
  private playerToken: string;
  private currentPlayer: Player;

  constructor(private playeRepository: PlayerRepository) {
    if (localStorage.getItem("player_id") !== null) {
      this.playeRepository.getPlayer(parseInt(localStorage.getItem("player_id"), 10)).subscribe(serverData => {
        this.currentPlayer = serverData;
      });
    }
   }

  get token() {
    return this.playerToken;
  }

  get player() {
    return this.currentPlayer;
  }

  public joinGame(game: Game, newPlayer: Player) {
    this.playerToken = `${game.id}-${game.name}`;
    this.updatePlayer(newPlayer);
  }

  public updatePlayer(player: Player) {
    this.currentPlayer = player;
    localStorage.setItem("player_id", this.currentPlayer.id.toString());
  }

  public updatePlayerById(playerId: number) {
    this.playeRepository.getPlayer(playerId).subscribe(serverData => {
      this.updatePlayer(serverData);
    });
  }
}
