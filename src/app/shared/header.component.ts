import { Component } from "@angular/core";

import { AuthService } from "../nav/auth.service";

@Component({
    selector: 'my-header',
    template: `
       
        <!--<header>-->
            <!--<nav class="navbar navbar-default">-->
                <!--<div class="container-fluid">-->
        <!---->
                    <!--<ul class="nav navbar-nav">-->
        <!---->
                        <!--<li><a [routerLink]="['signup']">Sign Up</a></li>-->
                        <!--<li><a [routerLink]="['signin']">Sign In</a></li>-->
                        <!--<li><a [routerLink]="['protected']">Protected</a></li>-->
        <!---->
                    <!--</ul>-->
                    <!--<ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">-->
        <!---->
                        <!--<li><a (click)="onLogout()" style="cursor: pointer;">Logout</a></li>-->
                    <!--</ul>-->
                <!--</div>&lt;!&ndash; /.container-fluid &ndash;&gt;-->
        <!---->
            <!--</nav>-->
        <!---->
        <!--</header>-->
    `
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  isAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }
}
