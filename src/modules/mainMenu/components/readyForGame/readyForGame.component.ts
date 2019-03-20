import { Component } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { NgForm } from "@angular/forms";

import { Subscription, timer } from "rxjs";
import { switchMap } from "rxjs/operators";

import { LocalizationService } from "../../../common/infrastructure/locale/localization.service";
import { GotBaseComponent } from "../../../common/components/gotBase.component";
import { GameRepository } from "../../../dal/infrastructure/repositories/game.repository";
import { Game } from "src/models/game.model";
import { Player } from "src/models/player.model";
import { PlayerService } from "src/modules/common/infrastructure/authorization/player.service";

@Component({
  selector: "got-join",
  templateUrl: "ReadyForGame.component.html"
})

export class ReadyForGameComponent extends GotBaseComponent {
  game: Game;
  players: Player[];
  currentPlayer: Player;
  joined: boolean = false;
  refreshCounter: number = 0;

  private gameSubscription: Subscription;
  private timerSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private gameRepository: GameRepository,
    private playerService: PlayerService,
    localizationService: LocalizationService) {
      super(localizationService);
      this.currentPlayer = this.playerService.player;
     }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get("id"))).subscribe(s => {
        this.refreshGameSubscription(parseInt(s, 10));
      });
  }

  ngOnDestroy() {
    this.gameSubscription.unsubscribe();
    this.timerSubscription.unsubscribe();
    this.router.navigate(["/gameList"]);
  }

  private refreshGameSubscription(gameId: number) {
    this.gameSubscription = this.gameRepository.getGame(gameId).subscribe(serverData => {
      this.game = serverData;
      this.players = serverData.players;
      this.refreshCounter++;
      this.subscribeToData(gameId);
    });
  }

  private subscribeToData(gameId: number) {
    this.timerSubscription = timer(5000).subscribe(() => this.refreshGameSubscription(gameId));
  }
}
