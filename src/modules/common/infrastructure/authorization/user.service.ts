import { Injectable } from "@angular/core";
import { AuthServer } from "src/modules/dal/infrastructure/auth.server";

@Injectable()
export class UserService {
  private authorized: boolean = false;
  private token: string;

  constructor(private authServer: AuthServer) { }

  public authorize(userName: string, password: string) {
    this.authServer.Auth(userName, password).subscribe(serverData => {
      this.authorized = serverData.isAuthorized;
      this.token = serverData.token;
    });
  }

  get isAuthorized() {
    return this.authorized;
  }
}
