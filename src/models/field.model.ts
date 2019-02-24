export class Field {
  constructor(public name: string,
    public paths: string[],
    public width: string,
    public height: string,
    public image: string,
    public location: Location) {

  }
}

export class Location {
  constructor(public x: number, public y: number) { }
}
