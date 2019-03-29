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
  createGameNameValidator: "CreateGameNameValidator",
  rulesConfirmedValidator: "RulesConfirmedValidator",
  selectedHouseValidator: "SelectedHouseValidator",

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
  confirmBtn: "ConfirmBtn",

  idColName: "IdColName",
  gameNameColName: "GameNameColName",
  playersCountColName: "PlayersCountColName",
  maxPlayersColName: "MaxPlayersColName",
  indexColName: "IndexColName",
  playerColName: "PlayerColName",
  houseColName: "HouseColName",
  playerStatusColName: "PlayerStatusColName",
  actionColName: "ActionColName",
  isCreatorColName: "IsCreatorColName",

  environmentLbl: "EnvironmentLbl",
  languageLbl: "LanguageLbl",
  serverLbl: "ServerLbl",
  databaseLbl: "DatabaseLbl",
  playerNameLbl: "PlayerNameLbl",
  gameNameLbl: "GameNameLbl",
  houseNameLbl: "HouseNameLbl",
  playerCountLbl: "PlayerCountLbl",
  maxPlayersLbl: "MaxPlayersLbl",
  gameRulesLbl: "GameRulesLbl",
  standardRulesLbl: "StandardRulesLbl",
  housesLbl: "HousesLbl",
  allHousesLbl: "AllHousesLbl",
  randomHousesLbl: "RandomHousesLbl",
  winConditionsLbl: "WinConditionsLbl",
  winConditionLbl: "WinConditionLbl",
  roundCountLbl: "RoundCountLbl",
  unlimitedRoundsLbl: "UnlimitedRoundsLbl",
  castlesCountLbl: "CastlesCountLbl",
  pointsCountLbl: "PointsCountLbl",
  areAllHousesLbl: "AreAllHousesLbl",
  areRandomHousesLbl: "AreRandomHousesLbl",
  otherRulesLbl: "OtherRulesLbl",
  lookPlayerCardLbl: "LookPlayerCardLbl",
  largeCastleDefenceLbl: "LargeCastleDefenceLbl",
  smallCastleDefenceLbl: "SmallCastleDefenceLbl",

  polishLang: "PolishLang",
  englishLang: "EnglishLang",

  statusJoining: "StatusJoining",
  statusJoined: "StatusJoined",
  statusReady: "StatusReady",

  rejoiningMsg: "RejoiningMsg",

  yesValue: "true",
  noValue: "false",

  castlesWinCondition: "Castles",
  pointsWinCondition: "Points"

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
      "pl-PL": "Wprowadź nazwę - od 6 do 20 znaków",
      "en-EN": "Type your nickname - from 6 to 20 signs, only small and big letters allowed"
    },
    "CreateGameNameValidator": {
      "pl-PL": "Wprowadź nazwę - od 6 do 50 znaków",
      "en-EN": "Type your nickname - from 6 to 50 signs, only small and big letters allowed"
    },
    "RulesConfirmedValidator": {
      "pl-PL": "Zasady gry nie zostały zatwierdzone",
      "en-EN": "Game rules wasn't confirmed"
    },
    "SelectedHouseValidator": {
      "pl-PL": "Wybierz ród, którym będziesz grał",
      "en-EN": "Select house which you will play"
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
      "pl-PL": "Opuść",
      "en-EN": "Leave"
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
    "ConfirmBtn": {
      "pl-PL": "Zatwierdź",
      "en-EN": "Confirm"
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
    "IsCreatorColName": {
      "pl-PL": "Stworzył grę",
      "en-EN": "Create game"
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
      "pl-PL": "Nazwa gracza",
      "en-EN": "Nickname"
    },
    "GameNameLbl": {
      "pl-PL": "Nazwa gry",
      "en-EN": "Game name"
    },
    "HouseNameLbl": {
      "pl-PL": "Ród",
      "en-EN": "House"
    },
    "PlayerCountLbl": {
      "pl-PL": "Ilość graczy",
      "en-EN": "Players count"
    },
    "MaxPlayersLbl": {
      "pl-PL": "Maksymalnie graczy",
      "en-EN": "Max players"
    },
    "GameRulesLbl": {
      "pl-PL": "Zasady gry",
      "en-EN": "Game rules"
    },
    "StandardRulesLbl": {
      "pl-PL": "Standardowe zasady",
      "en-EN": "Standard rules"
    },
    "HousesLbl": {
      "pl-PL": "Rody",
      "en-EN": "Houses"
    },
    "AllHousesLbl": {
      "pl-PL": "Wszystkie rody dostępne",
      "en-EN": "All houses avaible"
    },
    "RandomHousesLbl": {
      "pl-PL": "Losowe rody",
      "en-EN": "Random houses"
    },
    "WinConditionsLbl": {
      "pl-PL": "Warunki zwycięstwa",
      "en-EN": "Win conditions"
    },
    "WinConditionLbl": {
      "pl-PL": "Warunek zwycięstwa",
      "en-EN": "Win condition"
    },
    "RoundCountLbl": {
      "pl-PL": "Ilość rund",
      "en-EN": "Rounds count"
    },
    "UnlimitedRoundsLbl": {
      "pl-PL": "Nieograniczone rundy",
      "en-EN": "Unlimited rounds"
    },
    "CastlesCountLbl": {
      "pl-PL": "Ilość zamków",
      "en-EN": "Castles count"
    },
    "PointsCountLbl": {
      "pl-PL": "Ilość punktów",
      "en-EN": "Points count"
    },
    "AreAllHousesLbl": {
      "pl-PL": "Czy wszystkie rody dostępne?",
      "en-EN": "Are all houses avaible?"
    },
    "AreRandomHousesLbl": {
      "pl-PL": "Czy rody losowe?",
      "en-EN": "Are houses random?"
    },
    "OtherRulesLbl": {
      "pl-PL": "Pozostałe",
      "en-EN": "Others"
    },
    "LookPlayerCardLbl": {
      "pl-PL": "Podgląd kart graczy",
      "en-EN": "Look other players cards"
    },
    "LargeCastleDefenceLbl": {
      "pl-PL": "Obrona dużego zamku",
      "en-EN": "Large castle defence"
    },
    "SmallCastleDefenceLbl": {
      "pl-PL": "Obrona małego zamku",
      "en-EN": "Small castle defence"
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
    },
    "true": {
      "pl-PL": "Tak",
      "en-EN": "Yes"
    },
    "false": {
      "pl-PL": "Nie",
      "en-EN": "No"
    },
    "Castles": {
      "pl-PL": "Zamki",
      "en-EN": "Castles"
    },
    "Points": {
      "pl-PL": "Punkty",
      "en-EN": "Points"
    },
  };

  public get localizationData() {
    return this.data;
  }
}
