import { Component } from "@angular/core";

import { GotBaseComponent } from "./../../common/components/gotBase.component";
import { SettingRepository } from "./../../dal/infrastructure/repositories/setting.repository";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";

@Component({
  selector: "got-footer",
  templateUrl: "footer.component.html",
  styleUrls: ["footer.component.css"]
})
export class FooterComponent extends GotBaseComponent {
  environmentName: string;
  serverName: string;
  databaseName: string;

  constructor(private settingRepository: SettingRepository,
    localeService: LocalizationService) {
    super(localeService);
   }

   get settings() {
    return this.settingRepository.getSettings();
   }
}
