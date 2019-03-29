import { Injectable } from "@angular/core";
import { LocalizationData } from "./localization.data";

@Injectable()
export class LocalizationService {
  private data;

  constructor(private localizationDatas: LocalizationData) {
      this.data = this.localizationDatas.localizationData;
   }

  public getTranslation(key: any): string {
    if (key === undefined || key === null || key === "") {
      return "";
    }
    if (key instanceof Boolean) {
      key = String(key);
    }
    const locale_id = localStorage.getItem("locale_id");
    return this.data[key][locale_id];
  }
}
