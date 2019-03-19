import { Injectable } from "@angular/core";

export const localizationLanguages = {
  polish: "pl-PL",
  english: "en-EN"
};

export const localizationKeys = {
  houseStark: "HouseStark",
  houseBaratheon: "HouseBaratheon",
  houseLannister: "HouseLannister",
  houseGreyjoy: "HouseGreyjoy",
  houseTyrell: "HouseTyrell",
  houseMartell: "HouseMartell",

  joinGameNameValidator: "JoinGameNameValidator",

  enterTheGameBtn: "EnterTheGameBtn",
  lookBoardBtn: "LookBoardBtn",
  aboutGameBtn: "AboutGameBtn",
  joinGameBtn: "JoinGameBtn",
  getGameBtn: "GetGameBtn",
  refreshBtn: "RefreshBtn",
  changePlayerBtn: "ChangePlayerBtn",

  idColName: "IdColName",
  playersCountColName: "PlayersCountColName",
  maxPlayersColName: "MaxPlayersColName",
  indexColName: "IndexColName",
  playerColName: "PlayerColName",
  houseColName: "HouseColName",
  playerStatusColName: "PlayerStatusColName",
  actionColName: "ActionColName",

  environmentLbl: "EnvironmentLbl",
  languageLbl: "LanguageLbl",
  serverLbl: "ServerLbl",
  databaseLbl: "DatabaseLbl",
  playerNameLbl: "PlayerNameLbl",

  polishLang: "PolishLang",
  englishLang: "EnglishLang",

  statusJoining: "StatusJoining",
  statusJoined: "StatusJoined",
  statusReady: "StatusReady",
};

@Injectable()
export class LocalizationData {
  private data = {
    "HouseStark": {
      "pl-PL": "Starkowie",
      "en-EN": "Starks"
    },
    "HouseBaratheon": {
      "pl-PL": "Baratheonowie",
      "en-EN": "Baratheons"
    },
    "HouseLannister": {
      "pl-PL": "Lannisterowie",
      "en-EN": "Lannisters"
    },
    "HouseGreyjoy": {
      "pl-PL": "Greyjoyowie",
      "en-EN": "Greyjoys"
    },
    "HouseTyrell": {
      "pl-PL": "Tyrellowie",
      "en-EN": "Tyrells"
    },
    "HouseMartell": {
      "pl-PL": "Martellowie",
      "en-EN": "Martells"
    },
    "JoinGameNameValidator": {
      "pl-PL": "Wprowadź nazwę - od 6 do 20 znaków, tylko małe i duże litery",
      "en-EN": "Type your nickname - from 6 to 20 signs, only small and big letters allowed"
    },
    "EnterTheGameBtn": {
      "pl-PL": "Wejdź do gry",
      "en-EN": "Enter the game"
    },
    "LookBoardBtn": {
      "pl-PL": "Zobacz planszę",
      "en-EN": "Look board"
    },
    "AboutGameBtn": {
      "pl-PL": "O grze",
      "en-EN": "About game"
    },
    "JoinGameBtn": {
      "pl-PL": "Dołącz",
      "en-EN": "Join game"
    },
    "GetGameBtn": {
      "pl-PL": "Pobierz grę",
      "en-EN": "Get game"
    },
    "RefreshBtn": {
      "pl-PL": "Odśwież",
      "en-EN": "Refresh"
    },
    "ChangePlayerBtn": {
      "pl-PL": "Zmień gracza",
      "en-EN": "Change player"
    },
    "IdColName": {
      "pl-PL": "Id",
      "en-EN": "Id"
    },
    "PlayersCountColName": {
      "pl-PL": "Graczy",
      "en-EN": "Players"
    },
    "MaxPlayersColName": {
      "pl-PL": "Maksymalnie graczy",
      "en-EN": "Max players"
    },
    "IndexColName": {
      "pl-PL": "Lp",
      "en-EN": "Index"
    },
    "PlayerColName": {
      "pl-PL": "Gracz",
      "en-EN": "Player"
    },
    "HouseColName": {
      "pl-PL": "Ród",
      "en-EN": "House"
    },
    "PlayerStatusColName": {
      "pl-PL": "Status",
      "en-EN": "Status"
    },
    "ActionColName": {
      "pl-PL": "Akcja",
      "en-EN": "Action"
    },
    "EnvironmentLbl": {
      "pl-PL": "Środowisko",
      "en-EN": "Environment"
    },
    "LanguageLbl": {
      "pl-PL": "Język",
      "en-EN": "Language"
    },
    "ServerLbl": {
      "pl-PL": "Serwer",
      "en-EN": "Server"
    },
    "DatabaseLbl": {
      "pl-PL": "Baza danych",
      "en-EN": "Database"
    },
    "PlayerNameLbl": {
      "pl-PL": "Nick",
      "en-EN": "Nickname"
    },

    "PolishLang": {
      "pl-PL": "polski",
      "en-EN": "polish"
    },
    "EnglishLang": {
      "pl-PL": "angielski",
      "en-EN": "english"
    },

    "StatusJoining": {
      "pl-PL": "Dołącza",
      "en-EN": "Joining"
    },
    "StatusJoined": {
      "pl-PL": "Dołączył",
      "en-EN": "Joined"
    },
    "StatusReady": {
      "pl-PL": "Gotowy",
      "en-EN": "Ready"
    }
  };

  public get localizationData() {
    return this.data;
  }
}
