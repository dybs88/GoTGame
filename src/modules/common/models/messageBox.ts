export class MessageBox {
  private visible: boolean;
  get isVisible() {
    return this.visible;
  }

  constructor(public message?: string, public mode?: string) {
    this.visible = false;
   }

  public hide() {
    this.visible = false;
  }

  public show(message: string, mode: string) {
    this.message = message;
    this.mode = mode;
    this.visible = true;
  }
}
