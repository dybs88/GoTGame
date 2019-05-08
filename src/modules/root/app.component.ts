import { Component } from "@angular/core";

import { UserService } from "../common/infrastructure/authorization/user.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "GoTGame";
  constructor(private userService: UserService, private cookieService: CookieService) {
    this.userService.autoAuthorize();
  }
}
