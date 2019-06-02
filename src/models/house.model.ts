import { BaratheonDescription, LannisterDescription, StarkDescription } from "./../modules/house/infrastructure/consts/houseDescriptions";
import { GreyjoyDescription, TyrellDescription, MartellDescription } from "./../modules/house/infrastructure/consts/houseDescriptions";
import { HouseType } from "src/modules/common/infrastructure/consts/goTEnums";

export class House {
  public description: any;

  constructor(public playerId?: number,
    public playerName?: string,
    public type?: HouseType,
    public controlledFields?: number[]) { }
}
