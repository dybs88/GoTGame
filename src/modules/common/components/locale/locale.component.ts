import { Component } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localePL from "@angular/common/locales/pl";
import localeEN from "@angular/common/locales/en";

import { GotBaseComponent } from "./../gotBase.component";
import { LocalizationService } from "../../infrastructure/locale/localization.service";
import { UserService } from "../../infrastructure/authorization/user.service";
import { PlayerService } from "../../infrastructure/services/player.service";
import { MapHelper } from "../../infrastructure/helpers/map.helper";

@Component({
  selector: "got-locale",
  templateUrl: "locale.component.html"
})

export class LocaleComponent extends GotBaseComponent {
  get selectedLocale() {
    return this.localeService.locale_id;
  }

  constructor(private playerService: PlayerService,
    private mapHelper: MapHelper,
    private localeService: LocalizationService, userService: UserService) {
    super(localeService, userService);
    registerLocaleData(this.locale);
  }

  get locale(): any {
    if (this.selectedLocale === "pl-PL") {
      return localePL;
    } else {
      return localeEN;
    }
  }

  changeAppLocale(locale: string) {
    switch (locale) {
      case "pl-PL":
        registerLocaleData(localePL);
        break;
      case "en-EN":
        registerLocaleData(localeEN);
        break;
    }

    if (this.playerService.currentPlayer !== undefined) {
      this.playerService.currentPlayer.locale = locale;
      this.playerService.updatePlayer(this.playerService.currentPlayer).subscribe(response => {
        this.playerService.setPlayer(this.mapHelper.mapOnPlayer(response));
      });
    }
  }
}
