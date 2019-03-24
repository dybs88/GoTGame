import { Component } from "@angular/core";

import { UserService } from "../common/infrastructure/authorization/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "GotGame";
  constructor(private userService: UserService) {
    this.userService.autoAuthorize();
  }
}
