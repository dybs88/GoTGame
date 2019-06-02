import { HouseType } from "../modules/common/infrastructure/consts/goTEnums";
import { PlayerStatus } from "src/modules/common/infrastructure/consts/goTEnums";

export class Player {
  constructor(
  public id?: number,
  public name?: string,
  public gameId?: number,
  public ipAddress?: string,
  public house?: string,
  public status?: string,
  public isGameCreator?: boolean) { }
}
