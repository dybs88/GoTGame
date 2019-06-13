import { HouseType, PawnType } from "src/modules/common/infrastructure/consts/goTEnums";
import { Location } from "src/models/common/location.model";

export class PawnClickParams {
  constructor(public id?: number,
    public house?: HouseType,
    public type?: PawnType,
    public location?: Location) { }
}
