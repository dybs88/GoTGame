
import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { GameService } from "./../../../common/infrastructure/services/game.service";
import { FieldViewRepository } from "../../infrastructure/repositories/fieldView.repository";
import { FieldView } from "src/models/fieldView.model";
import { FieldData } from "src/models/fieldData.model";
import { ComponentFactoryResolver } from "@angular/core";
import { PawnComponent } from "../pawn/pawn.component";
import { GeneratePawnDirective, GenerateWindowDirective } from "src/modules/common/infrastructure/directives/generate.directive";
import { GoTObject } from "src/models/abstract/got.object";
import { PawnClickParams } from "../../infrastructure/models/pawnClickParams.model";
import { PawnView } from "src/models/pawnView.model";
import { FieldClickParams } from "./../../infrastructure/models/fieldClickParams.model";
import { FieldType, PawnType } from "src/modules/common/infrastructure/consts/goTEnums";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";
import { GotBaseComponent } from "./../../../common/components/gotBase.component";
import { UserService } from "src/modules/common/infrastructure/authorization/user.service";
import { GameBoardViewSettingsService } from "./../../infrastructure/services/gameBoardViewSettings.service";
import { SettingComponent } from "./../abstract/setting.component";

@Component({
  selector: "got-game",
  templateUrl: "gameBoard.component.html"
})
export class GameBoardComponent extends GotBaseComponent implements OnInit, SettingComponent {
  private init: boolean;

  @Input() pawnClick: PawnClickParams;
  @Output() pawnClickChange = new EventEmitter<PawnClickParams>();
  @ViewChild(GeneratePawnDirective) pawnGenerator: GeneratePawnDirective;
  @ViewChild(GenerateWindowDirective) windowGenerator: GenerateWindowDirective;

  get gameBoard() { return this.gameService.gameBoard; }
  get currentHouse() { return this.gameService.currentHouse; }
  get fields(): FieldView[] { return this.data.fieldViews; }
  get scrollTop() { return this.pawnGenerator.viewContainerRef.element.nativeElement.parentElement.scrollTop; }

  constructor(private gameService: GameService,
    private data: FieldViewRepository,
    private componentFactoryResolver: ComponentFactoryResolver,
    public settings: GameBoardViewSettingsService,
    localizationService: LocalizationService,
    userService: UserService) {
      super(localizationService, userService);
      this.refreshSettings();
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

  public getFieldData(fieldId: number): FieldData {
    return this.gameBoard.fields.find(f => f.id === fieldId);
  }

  generatePawn() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PawnComponent);
    const viewContainerRef = this.pawnGenerator.viewContainerRef;
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
      return;
    }

    if (this.pawnClick.type === PawnType.Ship
      && (params.fieldType === FieldType.Land)) {
        this.pawnClick = undefined;
        return;
      }

    this.pawnClick.location = params.location;
    this.generatePawn();
  }

  refreshSettings() {
    this.settings.settingsChange.subscribe(propertyChange => {

    });
  }
}
