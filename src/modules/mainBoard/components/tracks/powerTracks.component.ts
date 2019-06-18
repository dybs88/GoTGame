import { GameService } from "src/modules/common/infrastructure/services/game.service";
import { Component } from "@angular/core";

@Component({
  selector: "got-powerTracks",
  templateUrl: "powerTracks.component.html"
})
export class PowerTracksComponent {
  constructor(private gameService: GameService) { }
}
