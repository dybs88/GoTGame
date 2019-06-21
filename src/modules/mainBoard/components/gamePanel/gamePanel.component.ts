import { Component, Output, EventEmitter, Input, ComponentFactoryResolver, ViewChild } from "@angular/core";

import { GameBoard } from "src/models/gameBoard.model";
import { House } from "src/models/house.model";
import { GameService } from "src/modules/common/infrastructure/services/game.service";
import { PawnClickParams } from "../../infrastructure/models/pawnClickParams.model";
import { GameBoardViewSettingsService } from "./../../infrastructure/services/gameBoardViewSettings.service";
import { GenerateWindowDirective } from "src/modules/common/infrastructure/directives/generate.directive";
import { PowerTracksComponent } from "../tracks/powerTracks.component";

@Component({
  selector: "got-gamePanel",
  templateUrl: "gamePanel.component.html"
})

export class GamePanelComponent {

  private pawnClickParams: PawnClickParams;
  houseDescription: any;

  @ViewChild(GenerateWindowDirective) windowGenerator: GenerateWindowDirective;
  @Input() set pawnClick(params: PawnClickParams) {
    this.pawnClickParams = params;
    this.pawnClickChange.emit(this.pawnClickParams);
  }
  @Output() pawnClickChange = new EventEmitter<PawnClickParams>();
  @Input() gameBoard: GameBoard;
  @Input() currentHouse: House;

  get pawnClick() {
    return this.pawnClickParams;
  }

  constructor(private gameService: GameService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private settings: GameBoardViewSettingsService) {
    this.houseDescription = this.gameService.houseDescription;
  }

  houseFieldsBtnStyle() {
    if (this.settings.displayHouseFields) {
      return {
        "background-image": "url(/assets/img/fieldOn.png)"
      };
    } else {
      return {
        "background-image": "url(/assets/img/fieldOff.png)"
      };
    }
  }

  generatePowerTracksWindow() {
    if (this.settings.displayPowerTracks) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PowerTracksComponent);
      const viewContainerRef = this.windowGenerator.viewContainerRef;
      const componentRef = viewContainerRef.createComponent(componentFactory);
    } else {
      this.windowGenerator.viewContainerRef.clear();
    }
  }

  onHouseFieldsClick() {
    this.settings.displayHouseFields = !this.settings.displayHouseFields;
  }

  onPowerTrackBtnClick() {
    this.settings.displayPowerTracks = !this.settings.displayPowerTracks;
    this.generatePowerTracksWindow();
  }
}
