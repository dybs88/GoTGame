import { Injectable } from "@angular/core";

export const localizationLanguages = {
  polish: "pl-PL",
  english: "en-EN"
};

export const localizationKeys = {
  houseStark: "Stark",
  houseBaratheon: "Baratheon",
  houseLannister: "Lannister",
  houseGreyjoy: "Greyjoy",
  houseTyrell: "Tyrell",
  houseMartell: "Martell",

  joinGameNameValidator: "JoinGameNameValidator",

  enterTheGameBtn: "EnterTheGameBtn",
  lookBoardBtn: "LookBoardBtn",
  aboutGameBtn: "AboutGameBtn",
  joinGameBtn: "JoinGameBtn",
  getGameBtn: "GetGameBtn",
  refreshBtn: "RefreshBtn",
  changePlayerBtn: "ChangePlayerBtn",
  leaveGameBtn: "LeaveGameBtn",
  readyBtn: "ReadyBtn",
  clearPlayerBtn: "ClearPlayerBtn",
  waitBtn: "WaitBtn",
  cancelBtn: "CancelBtn",
  continueBtn: "ContinueBtn",
  newGameBtn: "NewGameBtn",

  idColName: "IdColName",
  gameNameColName: "GameNameColName",
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

  rejoiningMsg: "RejoiningMsg"
};

@Injectable()
export class LocalizationData {
  private data = {
    "Stark": {
      "pl-PL": "Starkowie",
      "en-EN": "Starks"
    },
    "Baratheon": {
      "pl-PL": "Baratheonowie",
      "en-EN": "Baratheons"
    },
    "Lannister": {
      "pl-PL": "Lannisterowie",
      "en-EN": "Lannisters"
    },
    "Greyjoy": {
      "pl-PL": "Greyjoyowie",
      "en-EN": "Greyjoys"
    },
    "Tyrell": {
      "pl-PL": "Tyrellowie",
      "en-EN": "Tyrells"
    },
    "Martell": {
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
    "LeaveGameBtn": {
      "pl-PL": "Opuść grę",
      "en-EN": "Leave game"
    },
    "ReadyBtn": {
      "pl-PL": "Gotów",
      "en-EN": "Ready"
    },
    "ClearPlayerBtn": {
      "pl-PL": "Wyczyść",
      "en-EN": "Clear"
    },
    "WaitBtn": {
      "pl-PL": "Zaczekaj",
      "en-EN": "Wait"
    },
    "CancelBtn": {
      "pl-PL": "Anuluj",
      "en-EN": "Cancel"
    },
    "ContinueBtn": {
      "pl-PL": "Kontynuuj",
      "en-EN": "Continue"
    },
    "NewGameBtn": {
      "pl-PL": "Nowa gra",
      "en-EN": "New game"
    },
    "IdColName": {
      "pl-PL": "Id",
      "en-EN": "Id"
    },
    "GameNameColName": {
      "pl-PL": "Nazwa gry",
      "en-EN": "Game name"
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
    "Joining": {
      "pl-PL": "Dołącza",
      "en-EN": "Joining"
    },
    "Joined": {
      "pl-PL": "Dołączył",
      "en-EN": "Joined"
    },
    "Ready": {
      "pl-PL": "Gotowy",
      "en-EN": "Ready"
    },
    "RejoiningMsg": {
      "pl-PL": "Jesteś już w innej grze. Czy chcesz zrezygnować z poprzedniej i gry i dołączyć do nowej?",
      "en-EN": "You are already in another game. Are you want join to new game and give up current game?"
    }
  };

  public get localizationData() {
    return this.data;
  }
}
