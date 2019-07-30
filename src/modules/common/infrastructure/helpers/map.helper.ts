import { GameRules } from "src/models/gameRules.model";
import { Injectable } from "@angular/core";
import { FieldData } from "src/models/fieldData.model";
import { House } from "src/models/house.model";
import { Army } from "src/models/army.model";
import { PawnData } from "src/models/pawnData.model";
import { Location } from "src/models/common/location.model";
import { Tracks } from "src/models/tracks.model";
import { SupplyTrackItem } from "src/models/supplyTrackItem.model";
import { GameBoard } from "src/models/gameBoard.model";
import { HouseType } from "../consts/goTEnums";
import { Game } from "src/models/game.model";
import { Player } from "src/models/player.model";
import { GameChat, ChatData, ChatPlayer } from "src/models/gameChat.model";

@Injectable()
export class MapHelper {

  public mapOnFieldDataArray(array: Array<any>): FieldData[] {
    return array.map(f => {
      return new FieldData(f.id, f.name, f.type, f.crownCount, f.barrelCount, f.castleType, f.controlledHouse);
    });
  }

  public mapOnHouseArray(array: Array<any>): House[] {
    return array.map(h => {
      return new House(h.playerId, h.playerName, h.type, this.mapOnArmyArray(h.armies), this.mapOnPawnDataArray(h.pawns),
        h.controlledFields, h.castlesCount);
    });
  }

  public mapOnArmyArray(array: Array<any>): Army[] {
    return array.map(a => {
      return new Army(a.houseType, this.mapOnPawnDataArray(a.pawns), a.fieldId);
    });
  }

  public mapOnPawnDataArray(array: Array<any>): PawnData[] {
    return array.map(p => {
      return new PawnData(p.id, p.houseType, p.type, p.attackStrength, p.defenceStrength, new Location(p.location.x, p.location.y), p.mode);
    });
  }

  public mapOnTracks(object: any): Tracks {
    return new Tracks(object.throneTrack, object.vassalsTrack, object.courtTrack, this.mapOnSupplyTrack(object.supplyTrack));
  }

  public mapOnSupplyTrack(object: any): SupplyTrackItem[] {
    const result = new Array<SupplyTrackItem>();
    for (let x = 0; x <= 6; x++) {
      result.push(new SupplyTrackItem(x, object[x] !== undefined ? object[x] : new Array<HouseType>()));
    }

    return result;
  }

  public mapOnGameBoard(object: any): GameBoard {
    return new GameBoard(object.gameId,
      object.gameName,
      object.roundNumber,
      object.currentRoundPhase,
      this.mapOnHouseArray(object.houses),
      this.mapOnFieldDataArray(object.fields),
      this.mapOnTracks(object.tracks));
  }

  public mapOnGame(object: any): Game {
    return new Game(object.id,
      object.name,
      object.playerCount,
      this.mapOnGameRules(object.gameRules),
      object.isPrivate,
      this.mapOnPlayerArray(object.players));
  }

  public mapOnGameRules(object: any): GameRules {
    return new GameRules(object.id, object.gameId, object.maxPlayers, object.allHouses, object.randomHouses, object.roundsCount,
      object.winCondition, object.winCastleCount, object.winPointsCount, object.canLookPlayerCard, object.largeCastleDefence,
      object.smallCastleDefence, object.mercaneryAvaible);
  }

  public mapOnPlayer(object: any): Player {
    return new Player(object.id, object.name, object.gameId, object.ipAddress, object.house, object.status, object.isGameCreator,
      object.locale);
  }

  public mapOnPlayerArray(array: any): Player[] {
    return array.map(p => {
      return this.mapOnPlayer(p);
    });
  }

  public mapOnGameChat(object: any): GameChat {
    return new GameChat(object.id,
      object.name,
      object.gameId,
      object.isPrivate,
      this.mapOnChatDataArray(object.chatDatas),
      this.mapOnChatPlayerArray(object.players));
  }

  public mapOnGameChatArray(array: any): GameChat[] {
    return array.map(a => this.mapOnGameChat(a));
  }

  public mapOnChatDataArray(array: any): ChatData[] {
    return array.map(c => {
      return new ChatData(c.playerName, c.text);
    });
  }

  public mapOnChatPlayerArray(array: any): ChatPlayer[] {
    return array.map(c => {
      return new ChatPlayer(c.playerId, c.name, c.isNew);
    });
  }
}
