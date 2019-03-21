import { Component } from "@angular/core";

import { GotBaseComponent } from "../gotBase.component";
import { SettingRepository } from "../../../dal/infrastructure/repositories/setting.repository";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";
import { UserService } from "../../infrastructure/authorization/user.service";

@Component({
  selector: "got-footer",
  templateUrl: "footer.component.html",
  styleUrls: ["footer.component.css"]
})
export class FooterComponent extends GotBaseComponent {
  environmentName: string = "";
  serverName: string = "";
  databaseName: string = "";

  constructor(private settingRepository: SettingRepository,
    localeService: LocalizationService, userService: UserService) {
    super(localeService, userService);

    this.settingRepository.getSettings().subscribe(serverData => {
      this.environmentName = serverData.environmentName;
      this.serverName = serverData.serverName;
      this.databaseName = serverData.databaseName;
    });

   }
}
