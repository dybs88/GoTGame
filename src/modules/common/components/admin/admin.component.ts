import { Component } from "@angular/core";

import { GotBaseComponent } from "./../gotBase.component";
import { UserService } from "../../infrastructure/authorization/user.service";
import { LocalizationService } from "../../infrastructure/locale/localization.service";

@Component({
  selector: "got-admin",
  templateUrl: "admin.component.html"
})
export class AdminComponent extends GotBaseComponent {

  constructor(userService: UserService, localizeService: LocalizationService) {
    super(localizeService, userService);
  }
}
