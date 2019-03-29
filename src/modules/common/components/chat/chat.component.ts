import { Component, Input } from "@angular/core";

import { ChatService, ChatData } from "./../../infrastructure/services/chat.service";
import { PlayerService } from "src/modules/common/infrastructure/authorization/player.service";
import { timer, Subscription } from "rxjs";

@Component({
  selector: "got-chat",
  templateUrl: "chat.component.html"
})
export class ChatComponent {
  private datas: ChatData[];
  text: string = "";

  timerSubscription: Subscription;
  chatSubscription: Subscription;

  constructor(private chatService: ChatService,
    private playerService: PlayerService) {
    this.refreshChat();
  }

  ngOnDestroy(): void {
    this.chatSubscription.unsubscribe();
    this.timerSubscription.unsubscribe();
  }

  refreshChat() {
    this.chatSubscription = this.chatService.getChat().subscribe(serverData => {
      this.datas = serverData;
      this.subscribeNextRefresh();
    });
  }

  sendMessage() {
    if (this.text !== "") {
      this.chatService.updateChat(new ChatData(this.playerService.player.name, this.text)).subscribe(serverData => {
        this.datas = serverData;
      });
      this.text = "";
    }
  }

  private subscribeNextRefresh() {
    this.timerSubscription = timer(500).subscribe(() => this.refreshChat());
  }
}
