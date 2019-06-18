import { HouseType } from "src/modules/common/infrastructure/consts/goTEnums";

export class Tracks {
  constructor(public throneTrack?: HouseType[],
    public vassalsTrack?: HouseType[],
    public courtTrack?: HouseType[]) { }
}
