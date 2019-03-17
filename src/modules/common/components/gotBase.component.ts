import { Component } from "@angular/core";

import { LocalizationService } from "./../infrastructure/locale/localization.service";
import { localizationKeys, localizationLanguages } from "./../infrastructure/locale/localization.data";

@Component({
  selector: "got-base",
  template: ""
})
export class GotBaseComponent {

  protected localKeys = localizationKeys;
  protected localLang = localizationLanguages;

  constructor(private localizationService: LocalizationService) { }

  protected getTranslation(key: string): string {
    return this.localizationService.getTranslation(key);
  }
}
