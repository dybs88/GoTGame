import { HouseType, PawnType, PawnMode } from "src/modules/common/infrastructure/consts/goTEnums";
import { Location } from "./common/location.model";

export class PawnData {
  constructor(public id?: number,
    public houseType?: HouseType,
    public type?: PawnType,
    public attackStrength?: number,
    public defenceStrength?: number,
    public location?: Location,
    public mode?: PawnMode) { }
}
