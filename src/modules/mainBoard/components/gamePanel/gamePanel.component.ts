import { Component, Output, EventEmitter, Input, ComponentFactoryResolver, ViewChild } from "@angular/core";

import { GameBoard } from "src/models/gameBoard.model";
import { House } from "src/models/house.model";
import { GameService } from "src/modules/common/infrastructure/services/game.service";
import { PawnClickParams } from "../../infrastructure/models/pawnClickParams.model";
import { GameBoardViewSettingsService } from "./../../infrastructure/services/gameBoardViewSettings.service";
import { GenerateWindowDirective } from "src/modules/common/infrastructure/directives/generate.directive";
import { PowerTracksComponent } from "../tracks/powerTracks.component";
import { SupplyTrackComponent } from "../tracks/supplyTrack.component";
import { GotBaseComponent } from "./../../../common/components/gotBase.component";
import { UserService } from "src/modules/common/infrastructure/authorization/user.service";
import { LocalizationService } from "./../../../common/infrastructure/locale/localization.service";
import { ChatService } from "src/modules/common/infrastructure/services/chat.service";

@Component({
  selector: "got-gamePanel",
  templateUrl: "gamePanel.component.html"
})

export class GamePanelComponent extends GotBaseComponent {
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

  get newMessages() { return this.chatService.newMessages; }
  get pawnClick() { return this.pawnClickParams; }

  constructor(private gameService: GameService,
    private chatService: ChatService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private settings: GameBoardViewSettingsService,
    localizationService: LocalizationService, userService: UserService) {
      super(localizationService, userService);
      this.houseDescription = this.gameService.currentHouse.description;
  }

  displayChat() {
    if (this.settings.displayChat) {
      return {
        "display": "block"
      };
    } else {
      return {
        "display": "none"
      };
    }
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

  managePowerTracksWindow() {
    if (this.settings.displayPowerTracks) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PowerTracksComponent);
      const viewContainerRef = this.windowGenerator.viewContainerRef;
      const containerRef = viewContainerRef.createComponent(componentFactory);
    } else {
      this.windowGenerator.viewContainerRef.clear();
    }
  }

  manageSupplyTrackWindow() {
    if (this.settings.displaySupplyTrack) {
      const componentFactor = this.componentFactoryResolver.resolveComponentFactory(SupplyTrackComponent);
      const viewContainerRef = this.windowGenerator.viewContainerRef;
      const containerRef = viewContainerRef.createComponent(componentFactor);
    } else {
      this.windowGenerator.viewContainerRef.clear();
    }
  }

  onHouseFieldsClick() {
    this.settings.displayHouseFields = !this.settings.displayHouseFields;
  }

  onPowerTrackBtnClick() {
    if (this.settings.displaySupplyTrack) {
      this.settings.displaySupplyTrack = false;
      this.manageSupplyTrackWindow();
    }
    this.settings.displayPowerTracks = !this.settings.displayPowerTracks;
    this.managePowerTracksWindow();
  }

  onSupplyTrackBtnClick() {
    if (this.settings.displayPowerTracks) {
      this.settings.displayPowerTracks = false;
      this.managePowerTracksWindow();
    }
    this.settings.displaySupplyTrack = !this.settings.displaySupplyTrack;
    this.manageSupplyTrackWindow();
  }

  onChatBtnClick() {
    this.settings.displayChat = !this.settings.displayChat;
  }
}
