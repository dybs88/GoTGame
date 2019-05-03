
import { Component } from "@angular/core";

import { LocalizationService } from "./../infrastructure/locale/localization.service";
import { localizationKeys, localizationLanguages } from "./../infrastructure/locale/localization.data";
import { UserService } from "../infrastructure/authorization/user.service";
import { MessageBox } from "./../models/messageBox";

@Component({
  selector: "got-base",
  template: ""
})
export class GotBaseComponent {

  protected localKeys = localizationKeys;
  protected localLang = localizationLanguages;
  protected messageBox: MessageBox = new MessageBox();

  constructor(private localizationService: LocalizationService,
    protected userService: UserService) { }

  protected get isAuthorized() {
    return this.userService.isAuthorized;
  }

  protected getTranslation(key: string): string {
    return this.localizationService.getTranslation(key);
  }
}
