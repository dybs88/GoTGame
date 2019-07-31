
// tslint:disable: max-line-length
import { Injectable } from "@angular/core";

export const localizationLanguages = {
  polish: "pl-PL",
  english: "en-EN"
};

export const localizationKeys = {
  sentence: "Sentence",
  description: "Description",
  fullName: "FullName",
  name: "Name",

  starkName: "StarkName",
  baratheonName: "BaratheonName",
  lannisterName: "LannisterName",
  greyjoyName: "GreyjoyName",
  tyrellName: "TyrellName",
  martellName: "MartellName",

  starkFullName: "StarkFullName",
  baratheonFullName: "BaratheonFullName",
  lannisterFullName: "LannisterFullName",
  greyjoyFullName: "GreyjoyFullName",
  tyrellFullName: "TyrellFullName",
  martellFullName: "MartellFullName",

  starkSentence: "StarkSentence",
  baratheonSentence: "BaratheonSentence",
  lanniserSentence: "LannisterSentence",
  greyjoySentence: "GreyjoySentence",
  tyrellSentence: "TyrellSentence",
  martellSentence: "MartellSentence",

  starkDescription: "StarkDescription",
  baratheonDescription: "BaratheonDescription",
  lannisterDescription: "LannisterDescription",
  greyjoyDescription: "GreyjoyDescription",
  tyrellDescription: "TyrellDescription",
  martellDescription: "MartellDescription",

  joinGameNameValidator: "JoinGameNameValidator",
  createGameNameValidator: "CreateGameNameValidator",
  rulesConfirmedValidator: "RulesConfirmedValidator",
  selectedHouseValidator: "SelectedHouseValidator",
  passwordValidator: "PasswordValidator",
  repeatPasswordValidator: "RepeatPasswordValidator",

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
  changeRulesBtn: "ChangeRulesBtn",
  okBtn: "OkBtn",
  kickBtn: "KickBtn",
  transferBtn: "TransferBtn",
  startBtn: "StartBtn",
  quickStartBtn: "QuickStartBtn",
  powerTracksBtn: "PowerTracksBtn",
  supplyTrackBtn: "SupplyTrackBtn",

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
  ipAddressColName: "IpAddressColName",

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
  mercenaryAvaibleLbl: "MercenaryAvaibleLbl",
  privateGameLbl: "PrivateGameLbl",
  passwordLbl: "PasswordLbl",
  repeatPasswordLbl: "RepeatPasswordLbl",
  roundNumberLbl: "RoundNumberLbl",
  phaseLbl: "PhaseLbl",
  castleLbl: "CastleLbl",
  castles1Lbl: "Castles1Lbl",
  castles2Lbl: "Castles2Lbl",
  progressLbl: "ProgressLbl",

  polishLang: "PolishLang",
  englishLang: "EnglishLang",

  statusJoining: "StatusJoining",
  statusJoined: "StatusJoined",
  statusReady: "StatusReady",

  planning: "Planning",
  action: "Action",

  rejoiningMsg: "RejoiningMsg",
  newGameCreatorMsg: "NewGameCreatorMsg",
  verifyPasswordMsg: "VerifyPasswordMsg",
  housePlayerExistMsg: "HousePlayerExistMsg",
  wrongPawnOnSeaFieldMsg: "WrongPawnOnSeaFieldMsg",
  wrongPawnOnLandFieldMsg: "WrongPawnOnLandFieldMsg",

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
    "StarkName": {
      "pl-PL": "Starkowie",
      "en-EN": "Starks"
    },
    "StarkSentence": {
      "pl-PL": "Nadchodzi Zima",
      "en-EN": "Winter Is Coming"
    },
    "StarkFullName": {
      "pl-PL": "Ród Starków",
      "en-EN": "House Stark"
    },
    "StarkDescription": {
      "pl-PL": "Starkowie wywodzą się od Brandona Budowniczego i starożytnych królów zimy. Przez tysiąclecia władali Winterfell jako królowie północy,"
      + " a później jako namiestnicy. Ich herbem, jest szary wilkor na białym jak lód polu.",
      "en-EN": ""
    },
    "Baratheon": {
      "pl-PL": "Baratheonowie",
      "en-EN": "Baratheons"
    },
    "BaratheonName": {
      "pl-PL": "Baratheonowie",
      "en-EN": "Baratheons"
    },
    "BaratheonSentence": {
      "pl-PL": "Nasza Jest Furia",
      "en-EN": "Ours Is the Fury"
    },
    "BaratheonFullName": {
      "pl-PL": "Ród Baratheonów",
      "en-EN": "House Baratheon"
    },
    "BaratheonDescription": {
      "pl-PL": "Najmłodszy z Wielkich Rodów, zrodzony podczas Podboju. Jego założyciel, Orys Baratheon, był jakoby bękarcim bratem Aegona Smoka. "
      + "Orys szybko awansował i stał się jednym  najbardziej wojowniczych dowódców Aegona. Herbem Baratheonów jest jeleń w koronie czarny na złotym tle.",
      "en-EN": ""
    },
    "Lannister": {
      "pl-PL": "Lannisterowie",
      "en-EN": "Lannisters"
    },
    "LannisterName": {
      "pl-PL": "Lannisterowie",
      "en-EN": "Lannisters"
    },
    "LannisterSentence" : {
      "pl-PL": "Słuchajcie Mojego Ryku",
      "en-EN": "Hear My Roar"
    },
    "LannisterFullName": {
      "pl-PL": "Ród Lannisterów",
      "en-EN": "House Lannister"
    },
    "LannisterDescription": {
      "pl-PL": "Lannisterowie z Casterly Rock pozostają najważniejszą siłą wspierającą pretensje króla Joffreya Baratheona do Żelaznego Tronu."
      + "Chęłpią się pochodzeniem od Lanna Sprytnego, legendarnego spryciarza z Ery Herosów."
      + "Złoto Casterly Rock i Złotego Zęba uczyniło z nich najbogatszych z wielkich rodów. Ich herbem jest złoty lew na karmazynowym polu.",
      "en-EN": "Translation later"
    },
    "Greyjoy": {
      "pl-PL": "Greyjoyowie",
      "en-EN": "Greyjoys"
    },
    "GreyjoyName": {
      "pl-PL": "Greyjoyowie",
      "en-EN": "Greyjoys"
    },
    "GreyjoySentence": {
      "pl-PL": "My Nie Siejemy",
      "en-EN": "We Do Not Sow"
    },
    "GreyjoyFullName": {
      "pl-PL": "Ród Greyjoyów",
      "en-EN": "House Greyjoy"
    },
    "GreyjoyDescription": {
      "pl-PL": "Greyjoyowie z Pyke utrzymują, że wywodzą się od Szarego Króla z Ery Herosów. Legendy podają, "
      + "że Szary Król władał nie tylko zachodnimi ziemiami ale i samym morzem i wziął sobie za żonę syrenę. Herbem Greyjoyów jest złoty kraken na czarnym polu.",
      "en-EN": ""
    },
    "Tyrell": {
      "pl-PL": "Tyrellowie",
      "en-EN": "Tyrells"
    },
    "TyrellName": {
      "pl-PL": "Tyrellowie",
      "en-EN": "Tyrells"
    },
    "TyrellSentence": {
      "pl-PL": "Zbieramy Siły",
      "en-EN": "Growing Strong"
    },
    "TyrellFullName": {
      "pl-PL": "Ród Tyrellów",
      "en-EN": "House Tyrell"
    },
    "TyrellDescription": {
      "pl-PL": "Tyrellowie zdobli znaczenie jako namiestnicy królów Reach,"
      + "którzy władali żyznymi równinami położonymi na południowy zachód od Dornijskiego Pogranicza i Czarnego Nurtu, aż po brzegi morza zachodzącego słońca. "
      + "Herbem Tyrellów jest złota róża na trawiastozielonym polu.",
      "en-EN": "Translation later"
    },
    "Martell": {
      "pl-PL": "Martellowie",
      "en-EN": "Martells"
    },
    "MartellName": {
      "pl-PL": "Martellowie",
      "en-EN": "Martells"
    },
    "MartellSentence": {
      "pl-PL": "Niezachwiani, Nieugięci, Niezłomni",
      "en-EN": "Unbowed, Unbent, Unbroken"
    },
    "MartellFullName": {
      "pl-PL": "Ród Martellów",
      "en-EN": "House Martell"
    },
    "MartellDescription": {
      "pl-PL": "Dorne jako ostatnie z Siedmiu Królestw poprzysięgło wierność Żelaznemu Tronowi. Krew, obyczaje i historia różnią je od pozostałych królestw."
      + "Gdy wybuchła wojna pięciu królów, Dorne nie przyłączyło się do niej. Na sztandarze Martellów widnieje czerwone słońce przebite złotą włócznią.",
      "en-EN": "Translation later"
    },
    "JoinGameNameValidator": {
      "pl-PL": "Wprowadź nazwę - od 3 do 8 znaków",
      "en-EN": "Type your nickname - from 3 to 8 signs, only small and big letters allowed"
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
    "PasswordValidator": {
      "pl-PL": "Nieprawidłowe hasło - od 6 do 20 znaków",
      "en-EN": "Wrong password - from 6 to 20 signs"
    },
    "RepeatPasswordValidator": {
      "pl-PL": "Hasła nie są takie same",
      "en-EN": "Passwords aren't equal"
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
    "ChangeRulesBtn": {
      "pl-PL": "Zmień zasady",
      "en-EN": "Change rules"
    },
    "OkBtn": {
      "pl-PL": "OK",
      "en-EN": "OK"
    },
    "KickBtn": {
      "pl-PL": "Wyrzuć",
      "en-EN": "Kick"
    },
    "TransferBtn": {
      "pl-PL": "Przekaż",
      "en-EN": "transfer"
    },
    "StartBtn": {
      "pl-PL": "START",
      "en-EN": "START"
    },
    "QuickStartBtn": {
      "pl-PL": "Szybki start",
      "en-EN": "Quick start"
    },
    "PowerTracksBtn": {
      "pl-PL": "Tor władzy",
      "en-EN": "Power track"
    },
    "SupplyTrackBtn": {
      "pl-PL": "Tor zaopatrzenia",
      "en-EN": "Supply track"
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
    "IpAddressColName": {
      "pl-PL": "Adres IP",
      "en-EN": "IP Address"
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
    "PrivateGameLbl" : {
      "pl-PL": "Prywatna gra",
      "en-EN": "Private game"
    },
    "PasswordLbl": {
      "pl-PL": "Hasło",
      "en-EN": "Password"
    },
    "RepeatPasswordLbl": {
      "pl-PL": "Powtórz hasło",
      "en-EN": "Repeat password"
    },
    "MercenaryAvaibleLbl": {
      "pl-PL": "Najemnicy dostępni",
      "en-EN": "Mercenary avaible"
    },
    "RoundNumberLbl": {
      "pl-PL": "Runda",
      "en-EN": "Round"
    },
    "PhaseLbl": {
      "pl-PL": "Faza",
      "en-EN": "Phase"
    },
    "CastleLbl": {
      "pl-PL": "zamek",
      "en-EN": "castle"
    },
    "Castles1Lbl": {
      "pl-PL": "zamki",
      "en-EN": "castles"
    },
    "Castles2Lbl": {
      "pl-PL": "zamków",
      "en-EN": "castles"
    },
    "ProgressLbl": {
      "pl-PL": "Postęp",
      "en-EN": "Progress"
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
    "Planning": {
      "pl-PL": "Planowanie",
      "en-EN": "Planning"
    },
    "Action": {
      "pl-PL": "Akcja",
      "en-EN": "Action"
    },
    "RejoiningMsg": {
      "pl-PL": "Jesteś już w innej grze. Czy chcesz zrezygnować z poprzedniej i gry i dołączyć do nowej?",
      "en-EN": "You are already in another game. Are you want join to new game and give up current game?"
    },
    "NewGameCreatorMsg": {
      "pl-PL": "Jesteś nowym administratorem gry",
      "en-EN": "You are new game admin"
    },
    "VerifyPasswordMsg": {
      "pl-PL": "Podaj hasło do gry",
      "en-EN": "Type game password"
    },
    "HousePlayerExistMsg": {
      "pl-PL": "W grze jest już gracz, który wybrał ten ród",
      "en-EN": "In game exist already player which choosed same house"
    },
    "WrongPawnOnSeaFieldMsg": {
      "pl-PL": "Na morzu lub w porcie można postawić jedynie pionek typu Statek",
      "en-EN": "On sea or in port field it can only be pawn as Ship type"
    },
    "WrongPawnOnLandFieldMsg": {
      "pl-PL": "Na lądzie nie można postawić pionka typu Statek",
      "en-EN": "On land field it cannot be pawn as Ship type"
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

    "BayOfIce": {
      "pl-PL": "Lodowa zatoka",
      "en-EN": "Bay of Ice"
    },
    "Blackwater": {
      "pl-PL": "Czarny Nurt",
      "en-EN": "Blackwater"
    },
    "BlackwaterBay": {
      "pl-PL": "Zatoka Czarnego Nurtu",
      "en-EN": "Blackwater Bay"
    },
    "CastleBlack": {
      "pl-PL": "Czarny Zamek",
      "en-EN": "Castle Black"
    },
    "CrackclawPoint": {
      "pl-PL": "Szczypcowy przylądek",
      "en-EN": "Crackclaw Point"
    },
    "DornishMarches": {
      "pl-PL": "Dornijskie pogranicze",
      "en-EN": "Dornish Marches"
    },
    "DragonStone": {
      "pl-PL": "Smocza Skała",
      "en-EN": "DragonStone"
    },
    "DragonStonePort": {
      "pl-PL": "Port Smoczej Skały",
      "en-EN": "DragonStone Port"
    },
    "EastSummerSea": {
      "pl-PL": "Wschodnie Morze Letnie",
      "en-EN": "East Summer Sea"
    },
    "FeverRiver": {
      "pl-PL": "Rzeka Fever",
      "en-EN": "Fever river"
    },
    "FlintsFinger": {
      "pl-PL": "Palec Flinta",
      "en-EN": "Flints Finger"
    },
    "GreywaterWatch": {
      "pl-PL": "Strażnica nad Szarą Wodą",
      "en-EN": "Greywater Watch"
    },
    "Harrenhal": {
      "pl-PL": "Harrenhal",
      "en-EN": "Harrenhal"
    },
    "Highgarden": {
      "pl-PL": "Wysogród",
      "en-EN": "Highgarden"
    },
    "IronmansBay": {
      "pl-PL": "Zatoka Żelaznych Ludzi",
      "en-EN": "Ironmans bay"
    },
    "Karhold": {
      "pl-PL": "Karhold",
      "en-EN": "Karhold"
    },
    "KingsLanding": {
      "pl-PL": "Królewska Przystań",
      "en-EN": "Kings Landing"
    },
    "Kingswood": {
      "pl-PL": "Królewski Las",
      "en-EN": "Kingswood"
    },
    "Lannisport": {
      "pl-PL": "Lannisport",
      "en-EN": "Lannisport"
    },
    "LannisportPort": {
      "pl-PL": "Port Lannisportu",
      "en-EN": "Lannisport Port"
    },
    "MoatCailin": {
      "pl-PL": "Fosa Cailin",
      "en-EN": "Moat Cailin"
    },
    "Oldtown": {
      "pl-PL": "Stare Miasto",
      "en-EN": "Oldtown"
    },
    "OldtownPort": {
      "pl-PL": "Port Starego Miasta",
      "en-EN": "Oldtown Port"
    },
    "PrincesPass": {
      "pl-PL": "Przełęcz Księcia",
      "en-EN": "Prince's Pass"
    },
    "Pyke": {
      "pl-PL": "Pyke",
      "en-EN": "Pyke"
    },
    "PykePort": {
      "pl-PL": "Port Pyke",
      "en-EN": "Pyke Port"
    },
    "RedwyneStraights": {
      "pl-PL": "Cieśnina Redwyne'ów",
      "en-EN": "Redwyne Straights"
    },
    "Riverrun": {
      "pl-PL": "Riverrun",
      "en-EN": "Riverrun"
    },
    "SaltShore": {
      "pl-PL": "Słony brzeg",
      "en-EN": "Salt shore"
    },
    "Seagard": {
      "pl-PL": "Seagard",
      "en-EN": "Seagard"
    },
    "SeaOfDorne": {
      "pl-PL": "Morze dornijskie",
      "en-EN": "Sea Of Dorne"
    },
    "SearoadMarches": {
      "pl-PL": "Mokradła Wschodniego Traktu",
      "en-EN": "Searoad marches"
    },
    "ShipbreakerBay": {
      "pl-PL": "Zatoka rozbitków",
      "en-EN": "Shipbreaker bay"
    },
    "Starfall": {
      "pl-PL": "Starfall",
      "en-EN": "Starfall",
    },
    "StoneySept": {
      "pl-PL": "Kamienny sept",
      "en-EN": "Stoney Sept"
    },
    "StormsEnd": {
      "pl-PL": "Koniec Burzy",
      "en-EN": "Storms End"
    },
    "StormsEndPort": {
      "pl-PL": "Port Końca Burzy",
      "en-EN": "Storms End Port"
    },
    "SunsetSea": {
      "pl-PL": "Morze Zachodzącego Słońca",
      "en-EN": "Sunset Sea"
    },
    "Sunspear": {
      "pl-PL": "Słoneczna Włócznia",
      "en-EN": "Sunspear"
    },
    "SunspearPort": {
      "pl-PL": "Port Słonecznej Włóczni",
      "en-EN": "Sunspear Port"
    },
    "TheArbor": {
      "pl-PL": "Wyspa Arbor",
      "en-EN": "The Arbor"
    },
    "TheBoneway": {
      "pl-PL": "Szlak Kości",
      "en-EN": "The Boneway"
    },
    "TheEyrie": {
      "pl-PL": "Eyrie",
      "en-EN": "The Eyrie"
    },
    "TheFingers": {
      "pl-PL": "Paluchy",
      "en-EN": "The Fingers"
    },
    "TheGoldenSound": {
      "pl-PL": "Złota cieśnina",
      "en-EN": "The Golden Sound"
    },
    "TheMountainsOfTheMoon": {
      "pl-PL": "Góry Księżycowe",
      "en-EN": "The Mountains of The Moon"
    },
    "TheNarrowSea": {
      "pl-PL": "Wąskie morze",
      "en-EN": "The Narrow Sea"
    },
    "TheReach": {
      "pl-PL": "Reach",
      "en-EN": "The Reach"
    },
    "TheShiveringSea": {
      "pl-PL": "Morze Dreszczy",
      "en-EN": "The Shivering Sea"
    },
    "TheStonyShore": {
      "pl-PL": "Kamienny brzeg",
      "en-EN": "TheStonyShore"
    },
    "TheTwins": {
      "pl-PL": "Bliźniaki",
      "en-EN": "The Twins"
    },
    "ThreeTowers": {
      "pl-PL": "Trzy wieże",
      "en-EN": "Three Towers"
    },
    "TorentineRiver": {
      "pl-PL": "Rzeka Torentine",
      "en-EN": "Torentine river"
    },
    "TridentRiver": {
      "pl-PL": "Rzeka Trident",
      "en-EN": "Trident river"
    },
    "WestSummerSea": {
      "pl-PL": "Zachodnie Morze Letnie",
      "en-EN": "West Summer Sea"
    },
    "WhiteHarbor": {
      "pl-PL": "Biały Port",
      "en-EN": "White Harbor"
    },
    "WhiteHarborPort": {
      "pl-PL": "Port Białego Portu",
      "en-EN": "White Harbor Port"
    },
    "WidowsWatch": {
      "pl-PL": "Wdowia przystań",
      "en-EN": "Widows Watch"
    },
    "Winterfell": {
      "pl-PL": "Winterfell",
      "en-EN": "Winterfell"
    },
    "WinterfellPort": {
      "pl-PL": "Port Winterfell",
      "en-EN": "Winterfell Port"
    },
    "Yronwood": {
      "pl-PL": "Yronwood",
      "en-EN": "Yronwood"
    }
  };

  public get localizationData() {
    return this.data;
  }
}
