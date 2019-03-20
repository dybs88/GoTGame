import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { RestServer } from "./rest.server";
import { Injectable } from "@angular/core";

@Injectable()
export class SettingServer extends RestServer {

  constructor(protected http: HttpClient)
  {
    super(http);
  }

  public getSettings(): Observable<any> {
    return this.http.get(`${this.baseUrl}/setting`);
  }
}
