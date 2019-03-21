import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./../../../environments/environment";

export class RestServer {

  constructor(protected http: HttpClient) { }

  protected readonly PROTOCOL = "http";
  protected readonly PORT = environment.restServerPort;
  protected readonly API = "api";

  protected readonly baseUrl = `${this.PROTOCOL}:\\\\${location.hostname}:${this.PORT}/${this.API}`;

  protected getOptions() {
    return { headers: new HttpHeaders ({
      "Content-Type": "application/json"
     }) };
  }
}
