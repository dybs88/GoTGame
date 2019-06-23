import { BaratheonDescription, LannisterDescription, StarkDescription } from "./../modules/house/infrastructure/consts/houseDescriptions";
import { GreyjoyDescription, TyrellDescription, MartellDescription } from "./../modules/house/infrastructure/consts/houseDescriptions";
import { PawnData } from "./pawnData.model";
import { HouseType } from "src/modules/common/infrastructure/consts/goTEnums";
import { Army } from "./army.model";

export class House {
  public description: any;

  constructor(public playerId?: number,
    public playerName?: string,
    public type?: HouseType,
    public armies?: Army[],
    public pawns?: PawnData[],
    public controlledFields?: number[]) {
      if (type === HouseType.Baratheon) {
        this.description = BaratheonDescription;
      } else if (type === HouseType.Lannister) {
        this.description = LannisterDescription;
      } else if (type === HouseType.Stark) {
        this.description = StarkDescription;
      } else if (type === HouseType.Greyjoy) {
        this.description = GreyjoyDescription;
      } else if (type === HouseType.Tyrell) {
        this.description = TyrellDescription;
      } else if (type === HouseType.Martell) {
        this.description = MartellDescription;
      }
  }
}
