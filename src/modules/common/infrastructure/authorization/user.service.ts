import { Injectable } from "@angular/core";

import { environment } from "./../../../../environments/environment";
import { AuthServer } from "src/modules/dal/infrastructure/auth.server";

@Injectable()
export class UserService {
  private authorized: boolean = false;
  private token: string;

  constructor(private authServer: AuthServer) { }

  get isAuthorized() {
    return this.authorized;
  }

  public autoAuthorize() {
    if (environment.autoAuthorize) {
      this.authServer.autoAuth(environment.environmentName).subscribe(serverData => {
        this.authorized = serverData.isAuthorized;
        this.token = serverData.token;
      });
    }
  }

  public authorize(userName: string, password: string) {
    this.authServer.auth(userName, password).subscribe(serverData => {
      this.authorized = serverData.isAuthorized;
      this.token = serverData.token;
    });
  }


}
