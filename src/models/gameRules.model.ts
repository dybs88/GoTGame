import { WinCondition } from "src/modules/common/infrastructure/consts/goTEnums";

export class GameRules {
  constructor(public maxPlayers: number,
    public allHouses: boolean,
    public randomHouses: boolean,
    public avaibleHouses: string[],
    public roundCount: number,
    public winCondition: WinCondition,
    public winCastlesCount: number,
    public winPointsCount: number) { }
}
