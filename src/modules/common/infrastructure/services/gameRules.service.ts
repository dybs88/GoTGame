import { Injectable } from "@angular/core";

import { GameRules } from "./../../../../models/gameRules.model";
import { GameRulesServer } from "./../../../dal/infrastructure/gameRules.server";
import { Observable } from "rxjs";

@Injectable()
export class GameRulesService {
  private gameRules: GameRules;

  constructor(private server: GameRulesServer) { }

  public get rules() { return this.gameRules; }

  public set rules(value: GameRules) {
    this.gameRules = value;
  }

  calculateAvaibleHouses(takenHouses?: string[]): string[] {
    if (this.gameRules === undefined || this.gameRules === null) {
      return new Array<string>();
    }
    const avaibleHouses = new Array<string>("Baratheon", "Stark", "Lannister", "Greyjoy", "Tyrell", "Martell");

    if (!this.gameRules.allHouses && this.gameRules.maxPlayers < 6) {
      if (this.gameRules.maxPlayers === 5) {
        avaibleHouses.splice(5, 1);
      } else if ( this.gameRules.maxPlayers === 4) {
        avaibleHouses.splice(4, 2);
      } else {
        avaibleHouses.splice(3, 3);
      }
    }

    if (takenHouses !== undefined && takenHouses.length > 0) {
      for (let i = 0; i < takenHouses.length; i++) {
        if (takenHouses[i] !== undefined) {
          avaibleHouses.splice(avaibleHouses.indexOf(takenHouses[i]), 1);
        }
      }
    }

    return avaibleHouses;
  }

  getGameRules(gameRulesId: number): Observable<GameRules> {
    return this.server.getGameRules(gameRulesId);
  }

  getGameRulesByGameId(gameId: number): Observable<GameRules> {
    return this.server.getGameRulesByGameId(gameId);
  }

  updateGameRules() {
    this.server.updateGameRules(this.gameRules).subscribe(serverData => {
      if (serverData.gameRulesUpdated) {
        this.gameRules = serverData.gameRules;
      }
    });
  }
}
