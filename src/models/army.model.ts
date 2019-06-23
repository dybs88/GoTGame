import { HouseType } from "src/modules/common/infrastructure/consts/goTEnums";
import { PawnData } from "./pawnData.model";
import { markParentViewsForCheck } from "@angular/core/src/view/util";

export class Army {
  public attackStrength: number;
  public defenceStrength: number;

  constructor(public houseType?: HouseType,
    public pawns?: PawnData[],
    public fieldId?: number) {
      for (let p = 0; p < pawns.length; p++) {
        this.attackStrength = pawns[p].attackStrength;
        this.defenceStrength = pawns[p].defenceStrength;
      }
  }
}
