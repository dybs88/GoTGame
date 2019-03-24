import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { RestServer } from "./rest.server";
import { Observable } from "rxjs";

@Injectable()
export class AuthServer extends RestServer {
  constructor(http: HttpClient) {
    super(http);
  }

  public autoAuth(environmentName: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/autologin`, {environmentName: environmentName});
  }

  public auth(userName: string, password: string ): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, {userName: userName, password: password});
  }
}
