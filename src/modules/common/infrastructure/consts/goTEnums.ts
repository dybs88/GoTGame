export enum HouseType {
  Lannister = "Lannister",
  Baratheon = "Baratheon",
  Stark = "Stark",
  Greyjoy = "Greyjoy",
  Martell = "Martell",
  Tyrell = "Tyrell"
}

export enum PlayerStatus {
  Joining = "0",
  Joined = "1",
  Ready = "2"
}

export enum GameStatus {
  WaitingForPlayers,
  Started,
  Finished
}

export enum WinCondition {
  Castles = "Castles",
  Points = "Points"
}

export enum CastleType {
  None = "None",
  Large = "Large",
  Small = "Small"
}

export enum FieldType {
  Land = "Land",
  Sea = "Sea",
  Port = "Port",
  River = "River"
}
