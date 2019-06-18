import { Component, ViewChild, OnInit, Input, Output, EventEmitter, SimpleChanges } from "@angular/core";

import { GameService } from "./../../../common/infrastructure/services/game.service";
import { Location } from "src/models/common/location.model";
import { FieldViewRepository } from "../../infrastructure/repositories/fieldView.repository";
import { FieldView } from "src/models/fieldView.model";
import { FieldData } from "src/models/fieldData.model";
import { ComponentFactoryResolver } from "@angular/core";
import { PawnComponent } from "../pawn/pawn.component";
import { GenerateDirective } from "src/modules/common/infrastructure/directives/generate.directive";
import { GoTObject } from "src/models/abstract/got.object";
import { PawnClickParams } from "../../infrastructure/models/pawnClickParams.model";
import { PawnView } from "src/models/pawnView.model";
import { FieldClickParams } from "./../../infrastructure/models/fieldClickParams.model";
import { FieldType, PawnType } from "src/modules/common/infrastructure/consts/goTEnums";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";
import { GotBaseComponent } from "./../../../common/components/gotBase.component";
import { UserService } from "src/modules/common/infrastructure/authorization/user.service";
import { GameBoardService } from "../../infrastructure/services/gameBoard.service";

@Component({
  selector: "got-game",
  templateUrl: "gameBoard.component.html"
})
export class GameBoardComponent extends GotBaseComponent implements OnInit {
  private init: boolean;

  @Input() pawnClick: PawnClickParams;
  @Output() pawnClickChange = new EventEmitter<PawnClickParams>();
  @Input() settingsModified: number;
  @ViewChild(GenerateDirective) generator: GenerateDirective;

  get gameBoard() { return this.gameService.gameBoard; }
  get currentHouse() { return this.gameService.currentHouse; }
  get fields(): FieldView[] { return this.data.fieldViews; }
  get scrollTop() { return this.generator.viewContainerRef.element.nativeElement.parentElement.scrollTop; }
  get settings() { return this.gameBoardService.settings; }

  constructor(private gameService: GameService,
    private data: FieldViewRepository,
    private componentFactoryResolver: ComponentFactoryResolver,
    private gameBoardService: GameBoardService,
    localizationService: LocalizationService,
    userService: UserService) {
      super(localizationService, userService);
     }

  ngOnInit() {
    for (let h = 0; h < this.gameBoard.houses.length; h++) {
      const house = this.gameBoard.houses[h];
      for (let a = 0; a < house.armies.length; a++) {
        house.armies[a].pawns.forEach(p => {
          this.pawnClick = new PawnClickParams(p.id, p.houseType, p.type, p.location);
          this.generatePawn();
        });
      }
    }

    this.init = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes["settingsModified"];
    if (change !== undefined && !change.isFirstChange()) {
      if (this.gameBoardService.settings.displayPowerTracks) {
        this.generatePowerTracksWindow();
      }
    }
  }

  public getFieldData(fieldId: number): FieldData {
    return this.gameBoard.fields.find(f => f.id === fieldId);
  }

  generatePawn() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PawnComponent);
    const viewContainerRef = this.generator.viewContainerRef;
    if (!this.init) {
      this.pawnClick.location.y = this.pawnClick.location.y +  this.scrollTop;
    }
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<GoTObject>componentRef.instance).goTObject = new PawnView(this.pawnClick.id,
      this.pawnClick.house,
      this.pawnClick.type,
      this.pawnClick.location);

    this.pawnClick = undefined;
  }

  generatePowerTracksWindow() {

  }

  onFieldClick(params: FieldClickParams) {
    const self = this;
    if (this.pawnClick === undefined
      || params.fieldType === FieldType.River) {
      this.pawnClick = undefined;
      return;
    }

    if (this.pawnClick.type !== PawnType.Ship
      && (params.fieldType === FieldType.Sea || params.fieldType === FieldType.Port)) {
      this.pawnClick = undefined;
      this.settings.displayTooltip(this.getTranslation(this.localKeys.wrongPawnOnSeaFieldMsg),
        new Location(params.location.x, params.location.y + this.scrollTop));

      setTimeout(function() { self.settings.hideTooltip(); }, 3000);
      return;
    }

    if (this.pawnClick.type === PawnType.Ship
      && (params.fieldType === FieldType.Land)) {
        this.pawnClick = undefined;
        this.settings.displayTooltip(this.getTranslation(this.localKeys.wrongPawnOnLandFieldMsg),
          new Location(params.location.x, params.location.y + this.scrollTop));

        setTimeout(function() { self.settings.hideTooltip(); }, 3000);
        return;
      }

    this.pawnClick.location = params.location;
    this.generatePawn();
  }
}
