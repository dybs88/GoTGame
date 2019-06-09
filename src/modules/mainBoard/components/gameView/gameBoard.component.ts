import { Component, Renderer2, ViewChild, Type } from "@angular/core";

import { GameService } from "./../../../common/infrastructure/services/game.service";
import { Location } from "src/models/common/location.model";
import { FieldViewRepository } from "../../infrastructure/repositories/fieldView.repository";
import { FieldView } from "src/models/fieldView.model";
import { FieldData } from "src/models/fieldData.model";
import { ComponentFactoryResolver } from "@angular/core";
import { PawnComponent } from "../pawn/pawn.component";
import { GenerateDirective } from "src/modules/common/infrastructure/directives/generate.directive";
import { GoTObject } from "src/models/abstract/got.object";
import { FootmanView } from "src/models/pawnView.model";

@Component({
  selector: "got-game",
  templateUrl: "gameBoard.component.html"
})
export class GameBoardComponent {

  private clickedPawn: any;

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

  constructor(private gameService: GameService,
    private renderer: Renderer2,
    private data: FieldViewRepository,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  public getFieldData(fieldId: number): FieldData {
    return this.gameBoard.fields.find(f => f.id === fieldId);
  }

  public generatePawn() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(PawnComponent);
    let viewContainerRef = this.generator.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<GoTObject>componentRef.instance).goTObject = new FootmanView(100, "Baratheon", this.gameService.houseDescription.footmanImageSrc);
  }

  onPawnClick(pawn: any) {
    this.clickedPawn = pawn;
  }

  onFieldClick(location: Location) {
    if (this.clickedPawn === undefined) {
      return;
    } else {
      this.renderer.setStyle(this.clickedPawn, "left", `${location.x}px`);
      this.renderer.setStyle(this.clickedPawn, "top", `${location.y}px`);
      this.clickedPawn = undefined;
    }
  }
}
