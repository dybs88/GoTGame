export class GameChat {
  constructor(public id?: number,
    public name?: string,
    public gameId?: number,
    public isPrivate?: boolean,
    public chatDatas?: ChatData[],
    public players?: number[]) { }
}

export class ChatData {
  constructor(public playerName?: string,
    public text?: string) { }
}
