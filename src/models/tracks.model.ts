import { HouseType } from "src/modules/common/infrastructure/consts/goTEnums";
import { SupplyTrackItem } from "./supplyTrackItem.model";

export class Tracks {
  constructor(public throneTrack?: HouseType[],
    public vassalsTrack?: HouseType[],
    public courtTrack?: HouseType[],
    public supplyTrack?: SupplyTrackItem[]) { }

    public doSomething() {
      console.log(this.vassalsTrack.length + 23);
    }
}
