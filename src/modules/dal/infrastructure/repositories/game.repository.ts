import { Injectable } from "@angular/core";
import { Game } from "src/models/game.model";
import { GameServer} from "../gameList.server";
import { Observable } from "rxjs";

@Injectable()
export class GameRepository {
  private data: Game[];

  constructor(private server: GameServer) {
    this.server.getGames().subscribe(serverData => {
      this.data = serverData;
    });
  }

  public joinGame(gameId: number, playerName: string) {
      this.server.joinGame(gameId, playerName).subscribe();
  }

  public getGames(): Game[] {
    return this.data;
  }

  public getGame(gameId: number): Game {
    return this.data.find(g => g.id === gameId);
  }

  public refreshGame(gameId: number): Observable<Game> {
    return this.server.getGame(gameId);
  }
}
