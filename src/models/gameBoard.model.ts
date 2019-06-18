import { FieldData } from "./fieldData.model";
import { House } from "./house.model";
import { Tracks } from "./tracks.mode";

export class GameBoard {
  constructor(public gameId?: number,
    public gameName?: string,
    public roundNumber?: number,
    public currentRoundPhase?: string,
    public houses?: House[],
    public fields?: FieldData[],
    public tracks?: Tracks) { }
}
