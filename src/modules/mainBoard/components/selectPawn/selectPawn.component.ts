import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import { PawnClickParams } from "../../infrastructure/models/pawnClickParams.model";
import { GameService } from "src/modules/common/infrastructure/services/game.service";
import { PawnType, PawnMode } from "src/modules/common/infrastructure/consts/goTEnums";

@Component({
  selector: "got-selectPawn",
  templateUrl: "selectPawn.component.html"
})
export class SelectPawnComponent implements OnChanges {
  private isClicked: boolean = false;
  houseDescritpion: any;

  @Input() imageSrc: string;
  @Input() pawnType: PawnType;
  @Input() pawnClick: PawnClickParams;
  @Output() pawnClickChange = new EventEmitter<PawnClickParams>();

  constructor(private gameService: GameService) {
    this.houseDescritpion = gameService.currentHouse.description;
   }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes["pawnClick"];
    if (change !== undefined && !change.isFirstChange()) {
      if (change.currentValue === undefined) {
        this.isClicked = false;
      } else if (change.currentValue.type === this.pawnType) {
        this.isClicked = true;
      } else {
        this.isClicked = false;
      }
    }

  }

  onClick() {
    this.isClicked = !this.isClicked;
    if (this.isClicked) {
      const pawnId = this.gameService.currentHouse.pawns.find(p => p.mode === PawnMode.OutGame && p.type === this.pawnType).id;
      this.pawnClick = new PawnClickParams(pawnId, this.gameService.currentHouse.type, this.pawnType);
    } else {
      this.pawnClick = undefined;
    }

    this.pawnClickChange.emit(this.pawnClick);
  }

  style() {
    const style = {
      "width": "70px",
      "height": "70px",
      "background-image": `url(${this.imageSrc})`
    };

    if (this.isClicked) {
      style["background-color"] = this.houseDescritpion.styles.secondColor;
      style["border-color"] = this.houseDescritpion.styles.secondColor;
    }

    return style;
  }
}
