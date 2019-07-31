import { Injectable } from "@angular/core";
import { LocalizationData } from "./localization.data";
import { PlayerService } from "../services/player.service";
import { HouseType } from "../consts/goTEnums";

@Injectable()
export class LocalizationService {
  private data;

  get locale_id() {
    if (this.playerService.currentPlayer !== undefined) {
      return this.playerService.currentPlayer.locale;
    } else {
      return navigator.language === "pl-PL" ? "pl-PL" : "en-EN";
    }
  }

  constructor(private localizationDatas: LocalizationData, private playerService: PlayerService) {
    this.data = this.localizationDatas.localizationData;
  }

  public getTranslation(key: any): string {
    if (key === undefined || key === null || key === "") {
      return "";
    }
    if (key instanceof Boolean) {
      key = String(key);
    }

    const dataKey = this.data[key];
    if (dataKey === undefined) {
      return "undefined";
    } else {
      return this.data[key][this.locale_id];
    }
  }

  public getHouseTranslation(houseType: string, key: any): string {
    const fullKey = `${houseType}${key}`;

    return this.getTranslation(fullKey);
  }
}
