import { Injectable } from "@angular/core";
import { Game } from "src/models/game.model";
import { RestServer } from "../rest.server";

@Injectable()
export class GameRepository {
  private data: Game[];

  constructor(private server: RestServer)
  {
      server.getGames().subscribe(serverData => {
        this.data = serverData;
      });
  }

  public GetGames(): Game[] {
    return this.data;
  }
}
