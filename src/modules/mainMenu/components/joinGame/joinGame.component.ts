import { Component } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { NgForm } from "@angular/forms";

import { Subscription, timer } from "rxjs";
import { switchMap } from "rxjs/operators";

import { LocalizationService } from "./../../../common/infrastructure/locale/localization.service";
import { GotBaseComponent } from "./../../../common/components/gotBase.component";
import { GameRepository } from "./../../../dal/infrastructure/repositories/game.repository";
import { Game } from "src/models/game.model";
import { Player } from "src/models/player.model";


@Component({
  selector: "got-join",
  templateUrl: "joinGame.component.html"
})
export class JoinGameComponent extends GotBaseComponent {
  game: Game;
  newPlayer: Player = new Player();
  refreshCounter: number = 0;

  private gameSubscription: Subscription;
  private timerSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private gameRepository: GameRepository,
    localizationService: LocalizationService) {
      super(localizationService);
     }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get("id"))).subscribe(s => {
        this.game = this.gameRepository.getGame(parseInt(s, 10));
        this.refreshGameSubscription(parseInt(s, 10));
      });
  }

  ngOnDestroy() {
    this.gameSubscription.unsubscribe();
    this.timerSubscription.unsubscribe();
    this.router.navigate(["/gameList"]);
  }

  public joinGame(form: NgForm) {
    if (form.valid) {
      alert("Dołączyłeś do gry");
    }
  }

  private refreshGameSubscription(gameId: number) {
    this.gameSubscription = this.gameRepository.refreshGame(gameId).subscribe(serverData => {
      this.game = serverData;
      this.refreshCounter++;
      this.subscribeToData(gameId);
    });
  }

  private subscribeToData(gameId: number) {
    this.timerSubscription = timer(5000).subscribe(() => this.refreshGameSubscription(gameId));
  }
}
