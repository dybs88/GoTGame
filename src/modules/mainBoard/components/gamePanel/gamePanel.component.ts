import { Component, Output, EventEmitter, Input } from "@angular/core";

import { GameBoard } from "src/models/gameBoard.model";
import { House } from "src/models/house.model";
import { FootmanView, KnightView, ShipView, TowerView } from "src/models/pawnView.model";
import { GameService } from "src/modules/common/infrastructure/services/game.service";

@Component({
  selector: "got-gamePanel",
  templateUrl: "gamePanel.component.html"
})

export class GamePanelComponent {
  @Input()
  gameBoard: GameBoard;

  @Input()
  currentHouse: House;

  footmans: FootmanView[] = new Array<FootmanView>();
  knights: KnightView[] = new Array<KnightView>();
  ships: ShipView[] = new Array<ShipView>();
  towers: TowerView[] = new Array<TowerView>();

  @Output()
  houseFieldsMode = new EventEmitter();

  @Output()
  pawnClickEvent = new EventEmitter<any>();

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    for (let id = 1; id <= 23; id++) {
      if (id <= 10) {
        this.footmans.push(new FootmanView(id, this.currentHouse.type.toString(), this.gameService.houseDescription.footmanImageSrc ));
      } else if ( id <= 15) {
        this.knights.push(new KnightView(id, this.currentHouse.type.toString(), this.gameService.houseDescription.knightImageSrc));
      } else if (id <= 21) {
        this.ships.push(new ShipView(id, this.currentHouse.type.toString(), this.gameService.houseDescription.shipImageSrc));
      } else {
        this.towers.push(new TowerView(id, this.currentHouse.type.toString(), this.gameService.houseDescription.towerImageSrc));
      }
    }
  }

  onHouseFieldsClick() {
    this.houseFieldsMode.emit();
  }

  onPawnClick(pawn: any) {
    this.pawnClickEvent.emit(pawn);
  }
}
