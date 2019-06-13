// tslint:disable: max-line-length
import { Size } from "./common/size.model";
import { Location } from "./common/location.model";
import { HouseType, PawnType } from "src/modules/common/infrastructure/consts/goTEnums";
import { BaratheonDescription, LannisterDescription, MartellDescription  } from "src/modules/house/infrastructure/consts/houseDescriptions";
import { StarkDescription, GreyjoyDescription, TyrellDescription } from "./../modules/house/infrastructure/consts/houseDescriptions";

export class PawnView {
  public path: string;
  public image: string;
  public size: Size;
  public currentLocation: Location;

  protected get houseDescription() {
    if (this.houseType === HouseType.Baratheon) {
      return BaratheonDescription;
    } else if (this.houseType === HouseType.Lannister) {
      return LannisterDescription;
    } else if (this.houseType === HouseType.Stark) {
      return StarkDescription;
    } else if (this.houseType === HouseType.Greyjoy) {
      return GreyjoyDescription;
    } else if (this.houseType === HouseType.Tyrell) {
      return TyrellDescription;
    } else if (this.houseType === HouseType.Martell) {
      return MartellDescription;
    }
  }

  constructor(public id: number,
    public houseType: HouseType,
    public type: PawnType,
    public location: Location) {
      if (type === PawnType.Footman) {
        this.path = "M304 596 c-41 -18 -102 -72 -120 -107 -16 -32 -18 -77 -5 -113 9 -21 5 -30 -30 -66 -23 -23 -49 -61 -60 -83 -21 -48 -25 -106 -6 -112 6 -2 97 -13 201 -25 103 -11 198 -23 211 -26 18 -4 28 3 54 44 52 81 38 159 -44 247 -33 35 -48 60 -43 68 23 37 1 156 -34 178 -20 13 -89 10 -124 -5z";
        this.image = this.houseDescription.footmanImageSrc;
      } else if (type === PawnType.Knight) {
        this.path = "M234 553 l-89 -69 0 -79 c0 -44 4 -103 8 -131 l8 -50 -40 -27 c-45 -30 -50 -50 -26 -97 17 -34 21 -35 163 -49 176 -19 206 -16 248 21 74 65 80 146 17 215 -23 24 -30 39 -22 42 32 10 60 52 57 84 -3 27 -11 37 -58 64 -106 61 -115 68 -126 103 -18 54 -40 49 -140 -27z";
        this.image = this.houseDescription.knightImageSrc;
      } else if (type === PawnType.Ship) {
        this.path = "M176 530 c-80 -14 -76 -6 -76 -139 l0 -119 63 -40 c119 -78 223 -111 350 -112 l38 0 -3 155 c-4 179 5 163 -126 226 -89 42 -135 47 -246 29z";
        this.image = this.houseDescription.shipImageSrc;
      } else {
        this.path = "M143 579 c-45 -26 -53 -35 -53 -60 0 -19 8 -34 25 -45 18 -12 25 -25 25 -48 0 -45 -29 -189 -40 -200 -26 -26 0 -126 35 -140 31 -12 65 -6 82 14 24 28 95 28 121 0 24 -26 68 -39 109 -33 25 4 41 17 66 52 49 68 50 75 22 160 -15 42 -36 127 -48 190 l-23 115 -54 12 c-30 7 -91 13 -135 13 -71 1 -86 -3 -132 -30z";
        this.image = this.houseDescription.towerImageSrc;
      }

      this.size = new Size("66px", "66px");
      this.currentLocation = location;
    }
}



