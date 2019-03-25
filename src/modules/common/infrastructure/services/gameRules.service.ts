import { Injectable } from "@angular/core";

import { GameRules } from "./../../../../models/gameRules.model";

@Injectable()
export class GameRulesService {
  rawRules: any;
  gameRules: GameRules;

  getRules(rules: any) {
    this.rawRules = rules;
    this.setGameRules();
  }

  get rules() {
    return this.gameRules;
  }

  setGameRules() {
    const avaibleHouses = new Array<string>("Baratheon", "Stark", "Lannister", "Greyjoy", "Tyrell", "Martell");

    if (!this.rawRules.allHouses && this.rawRules.maxPlayers < 6) {
      if (this.rawRules.maxPlayers === 5) {
        avaibleHouses.splice(5, 1);
      } else if ( this.rawRules.maxPlayers === 4) {
        avaibleHouses.splice(4, 2);
      } else {
        avaibleHouses.splice(3, 3);
      }
    }

    this.gameRules = new GameRules(this.rawRules.maxPlayers,
      this.rawRules.allHouses,
      this.rawRules.randomHouses, avaibleHouses,
      this.rawRules.roundCount,
      this.rawRules.winCondition, this.rawRules.winCastlesCount, this.rawRules.winPointsCount);
  }
}
