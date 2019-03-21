import { Component } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localePL from "@angular/common/locales/pl";
import localeEN from "@angular/common/locales/en";

import { GotBaseComponent } from "./../gotBase.component";
import { LocalizationService } from "../../infrastructure/locale/localization.service";
import { UserService } from "../../infrastructure/authorization/user.service";

@Component({
  selector: "got-locale",
  templateUrl: "locale.component.html"
})

export class LocaleComponent extends GotBaseComponent {
  selectedLocale: string = localStorage.getItem("locale_id");

  constructor(localeService: LocalizationService, userService: UserService) {
    super(localeService, userService);
    if (localStorage.getItem("locale_id") === null) {
      localStorage.setItem("locale_id", "pl-PL");
    }
    registerLocaleData(this.locale);
  }

  get locale(): any {
    switch (localStorage.getItem("locale_id")) {
      case "pl-PL":
        return localePL;
      case "en-EN":
        return localeEN;
    }
  }

  changeAppLocale(locale: string) {
    switch (locale) {
      case "pl-PL":
        registerLocaleData(localePL);
        localStorage.setItem("locale_id", "pl-PL");
        break;
      case "en-EN":
        registerLocaleData(localeEN);
        localStorage.setItem("locale_id", "en-EN");
        break;
    }

    window.location.reload();
  }

  get localeSetting(): string {
    return localStorage.getItem("locale_id");
  }
}
