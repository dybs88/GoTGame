import { Component } from "@angular/core";

import { GotBaseComponent } from "./../../common/components/gotBase.component";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";

@Component({
  selector: "got-mainmenu",
  templateUrl: "mainMenu.component.html"
})

export class MainMenuComponent extends GotBaseComponent {

  constructor(localizationService: LocalizationService) {
    super(localizationService);
  }
}
