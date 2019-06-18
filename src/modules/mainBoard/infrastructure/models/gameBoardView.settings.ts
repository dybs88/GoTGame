import { Location } from "src/models/common/location.model";

export class GameBoardViewSettings {
  public showTooltip: boolean;
  public tooltipStyle: any;
  public tooltipMessage: string;
  public displayHouseFields: boolean;
  public displayPowerTracks: boolean;

  constructor() { }

  public displayTooltip(message: string, location: Location) {
    this.showTooltip = true;
    this.tooltipMessage = message;
    this.tooltipStyle = {
      "position": "absolute",
      "left": `${location.x}px`,
      "top": `${location.y}px`,
      "font-size": "x-small",
      "width": "200px"
    };
  }

  public hideTooltip() {
    this.showTooltip = false;
  }
}
