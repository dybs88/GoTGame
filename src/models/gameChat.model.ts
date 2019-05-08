export class GameChat {
  constructor(public id?: number,
    public name?: string,
    public gameId?: number,
    public isPrivate?: boolean,
    public chatDatas?: ChatData[],
    public players?: ChatPlayer[]) { }
}

export class ChatData {
  constructor(public playerName?: string,
    public text?: string) { }
}

export class ChatPlayer {
  constructor(public playerId?: number, public name?: string, public isNew?: boolean) { }
}
