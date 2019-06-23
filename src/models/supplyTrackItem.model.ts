import { HouseType } from "src/modules/common/infrastructure/consts/goTEnums";

export class SupplyTrackItem {
  constructor(public position?: number, public houseTypes?: HouseType[]) { }
}
