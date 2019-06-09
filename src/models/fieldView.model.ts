import { Location } from "./common/location.model";

export class FieldView {
  constructor(
    public id: number,
    public name: string,
    public paths: string[],
    public width: string,
    public height: string,
    public image: string,
    public location: Location) {

  }
}



