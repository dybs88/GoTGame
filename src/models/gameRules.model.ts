import { WinCondition } from "src/modules/common/infrastructure/consts/goTEnums";

export class GameRules {


  constructor(public id?: number,
    public gameId?: number,
    public maxPlayers?: number,
    public allHouses?: boolean,
    public randomHouses?: boolean,
    public roundsCount?: number,
    public winCondition?: WinCondition,
    public winCastlesCount?: number,
    public winPointsCount?: number,
    public canLookPlayerCard?: boolean,
    public largeCastleDefence?: boolean,
    public smallCastleDefence?: boolean,
    public mercenaryAvaible?: boolean) {

    }

  public initStandardRules() {
    this.id = 0;
    this.gameId = 0;
    this.maxPlayers = 3;
    this.allHouses = false;
    this.randomHouses = false;
    this.roundsCount = 10;
    this.winCondition = WinCondition.Castles;
    this.winCastlesCount = 7;
    this.winPointsCount = 15;
    this.canLookPlayerCard = true;
    this.largeCastleDefence = false;
    this.smallCastleDefence = false;
    this.mercenaryAvaible = false;
  }
}
