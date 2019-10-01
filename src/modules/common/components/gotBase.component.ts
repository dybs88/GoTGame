
import { Component } from "@angular/core";

import { LocalizationService } from "./../infrastructure/locale/localization.service";
import { localizationKeys, localizationLanguages } from "./../infrastructure/locale/localization.data";
import { UserService } from "../infrastructure/authorization/user.service";
import { MessageBox } from "src/models/messageBox";

@Component({
  selector: "got-base",
  template: ""
})
export class GotBaseComponent {

  protected localKeys = localizationKeys;
  protected localLang = localizationLanguages;

  protected messageBox: MessageBox = new MessageBox();
  protected okMessageCallback: Function;
  protected yesMessageCallback: Function;
  protected noMessageCallback: Function;

  constructor(private localizationService: LocalizationService,
    protected userService: UserService) { }

  protected get isAuthorized() {
    return this.userService.isAuthorized;
  }

  protected getTranslation(key: string): string {
    return this.localizationService.getTranslation(key);
  }

  protected getHouseTranslation(houseType: string, key: string): string {
    return this.localizationService.getHouseTranslation(houseType, key);
  }

  protected hideMessageBox() {
    this.okMessageCallback = undefined;
    this.yesMessageCallback = undefined;
    this.noMessageCallback = undefined;

    this.messageBox.hide();
  }

  protected showMessageBox(message: string, mode: string, okMsgCallback?: Function, yesMsgCallback?: Function, noMsgCallback?: Function) {
    this.okMessageCallback = okMsgCallback;
    this.yesMessageCallback = yesMsgCallback;
    this.noMessageCallback = noMsgCallback;

    this.messageBox.show(message, mode);
  }
}
