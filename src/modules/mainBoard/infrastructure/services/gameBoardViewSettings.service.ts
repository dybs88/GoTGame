// tslint:disable: no-use-before-declare
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class GameBoardViewSettingsService {
  private _displayHouseFields: boolean;
  private _displayPowerTracks: boolean;
  private _displaySupplyTrack: boolean;

  public settingsChange = new EventEmitter<string>();

  public get displayHouseFields() {
    return this._displayHouseFields;
  }

  public set displayHouseFields(value: boolean) {
    this._displayHouseFields = value;
    this.settingsChange.emit(settingsName.displayHouseFields);
  }

  public get displayPowerTracks() {
    return this._displayPowerTracks;
  }

  public set displayPowerTracks(value: boolean) {
    this._displayPowerTracks = value;
    this.settingsChange.emit(settingsName.displayPowerTracks);
  }

  public get displaySupplyTrack() {
    return this._displaySupplyTrack;
  }

  public set displaySupplyTrack(value: boolean) {
    this._displaySupplyTrack = value;
    this.settingsChange.emit(settingsName.displaySupplyTrack);
  }

  constructor() { }
}

export const settingsName = {
  displayHouseFields: "displayHouseFields",
  displayPowerTracks: "displayPowerTracks",
  displaySupplyTrack: "displaySupplyTrack"
}

