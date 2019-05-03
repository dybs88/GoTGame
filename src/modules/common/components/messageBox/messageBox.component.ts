import { Component, Input, Output, EventEmitter } from "@angular/core";

import { GotBaseComponent } from "./../gotBase.component";
import { MessageBox } from "../../models/messageBox";

@Component({
  selector: "got-messageBox",
  templateUrl: "messageBox.component.html"
})
export class MessageBoxComponent extends GotBaseComponent {
  @Input()
  data: MessageBox;
  @Output()
  okCallback = new EventEmitter();
  @Output()
  noCallback = new EventEmitter();
  @Output()
  yesCallback = new EventEmitter();

  noEventEmit() {
    this.noCallback.emit();
  }

  okEventEmit() {
    this.okCallback.emit();
  }

  yesEventEmit() {
    this.yesCallback.emit();
  }
}
