import { LocalizationService } from 'src/modules/common/infrastructure/locale/localization.service';
import { GotBaseComponent } from './../../../common/components/gotBase.component';
import { GameBoardViewSettings } from './../../infrastructure/models/gameBoardView.settings';
import { Component, Renderer2, ViewChild, OnInit } from "@angular/core";

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
import { UserService } from 'src/modules/common/infrastructure/authorization/user.service';

@Component({
  selector: "got-game",
  templateUrl: "gameBoard.component.html"
})
export class GameBoardComponent extends GotBaseComponent implements OnInit {

  private clickedPawnParams: PawnClickParams;
  private init: boolean;
  private settings: GameBoardViewSettings = new GameBoardViewSettings();

  @ViewChild(GenerateDirective) generator: GenerateDirective;

  get gameBoard() {
    return this.gameService.gameBoard;
  }

  get currentHouse() {
    return this.gameService.currentHouse;
  }

  get fields(): FieldView[] {
    return this.data.fieldViews;
  }

  private get scrollTop() {
    return this.generator.viewContainerRef.element.nativeElement.parentElement.scrollTop;
  }

  constructor(private gameService: GameService,
    private renderer: Renderer2,
    private data: FieldViewRepository,
    private componentFactoryResolver: ComponentFactoryResolver,
    localizationService: LocalizationService,
    userService: UserService) {
      super(localizationService, userService);
     }

  ngOnInit() {
    for (let h = 0; h < this.gameBoard.houses.length; h++) {
      const house = this.gameBoard.houses[h];
      for (let a = 0; a < house.armies.length; a++) {
        house.armies[a].pawns.forEach(p => {
          this.clickedPawnParams = new PawnClickParams(p.id, p.houseType, p.type, p.location);
          this.generatePawn();
        });
      }
    }

    this.init = false;
  }

  public getFieldData(fieldId: number): FieldData {
    return this.gameBoard.fields.find(f => f.id === fieldId);
  }

  generatePawn() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PawnComponent);
    const viewContainerRef = this.generator.viewContainerRef;
    if (!this.init) {
      this.clickedPawnParams.location.y = this.clickedPawnParams.location.y +  this.scrollTop;
    }
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<GoTObject>componentRef.instance).goTObject = new PawnView(this.clickedPawnParams.id,
      this.clickedPawnParams.house,
      this.clickedPawnParams.type,
      this.clickedPawnParams.location);
  }

  onFieldClick(params: FieldClickParams) {
    const self = this;
    if (this.clickedPawnParams === undefined
      || params.fieldType === FieldType.River) {
      this.clickedPawnParams = undefined;
      return;
    }

    if (this.clickedPawnParams.type !== PawnType.Ship
      && (params.fieldType === FieldType.Sea || params.fieldType === FieldType.Port)) {
      this.clickedPawnParams = undefined;
      this.settings.displayTooltip(this.getTranslation(this.localKeys.wrongPawnOnSeaFieldMsg),
        new Location(params.location.x, params.location.y + this.scrollTop));

      setTimeout(function() { self.settings.hideTooltip(); }, 3000);
      return;
    }

    if (this.clickedPawnParams.type === PawnType.Ship
      && (params.fieldType === FieldType.Land)) {
        this.clickedPawnParams = undefined;
        this.settings.displayTooltip(this.getTranslation(this.localKeys.wrongPawnOnLandFieldMsg),
          new Location(params.location.x, params.location.y + this.scrollTop));

        setTimeout(function() { self.settings.hideTooltip(); }, 3000);
        return;
      }

    this.clickedPawnParams.location = params.location;
    this.generatePawn();
    this.clickedPawnParams = undefined;
  }

  onPawnClick(params: PawnClickParams) {
    this.clickedPawnParams = params;
  }
}
