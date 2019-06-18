import { Injectable } from "@angular/core";

import { GameBoardViewSettings } from "../models/gameBoardView.settings";

@Injectable()
export class GameBoardService {
  private gameBoardSettings: GameBoardViewSettings;

  public get settings () { return this.gameBoardSettings; }
  public set settings (value: GameBoardViewSettings) { this.gameBoardSettings = value; }

  constructor() {
    this.gameBoardSettings = new GameBoardViewSettings();
  }
}
