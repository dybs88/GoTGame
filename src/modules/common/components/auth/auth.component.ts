
import { NgForm } from "@angular/forms";
import { Component } from "@angular/core";

import { UserService } from "../../infrastructure/authorization/user.service";
import { GotBaseComponent } from "./../gotBase.component";
import { LocalizationService } from "../../infrastructure/locale/localization.service";

@Component({
  selector: "got-auth",
  templateUrl: "auth.component.html"
})

export class AuthComponent extends GotBaseComponent {
  showAuthCard: boolean;
  userName: string;
  password: string;

  constructor(userService: UserService,
    localService: LocalizationService) {
    super(localService, userService);
  }

  toggleShowAuthCard() {
    this.showAuthCard = !this.showAuthCard;
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.userService.authorize(this.userName, this.password);
      this.toggleShowAuthCard();
    }
  }
}
