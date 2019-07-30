import { Injectable } from "@angular/core";
import { LocalizationData } from "./localization.data";
import { PlayerService } from "../services/player.service";

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
    return this.data[key][this.locale_id];
  }
}
