import { Component } from "@angular/core";

import { GotBaseComponent } from "./../gotBase.component";
import { LocalizationService } from "../../infrastructure/locale/localization.service";
import { PlayerService } from "../../infrastructure/authorization/player.service";

@Component({
  selector: "got-navbar",
  templateUrl: "navbar.component.html"
})
export class NavbarComponent extends GotBaseComponent { }
