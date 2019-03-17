import { MainMenuComponent } from './../components/mainMenu.component';
import { GameListComponent } from "./../../mainMenu/components/gameList/gameList.component";
import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class GotGuard {
  private firstNavigation = true;

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component !== GameListComponent && route.component !== MainMenuComponent) {
        this.router.navigateByUrl("/gameList");
        return false;
      }
    }
    return true;
  }
}
