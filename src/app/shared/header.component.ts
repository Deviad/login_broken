import { Component, Optional, Inject } from "@angular/core";

import { AuthService, MyLogin, FacebookLogin, GoogleLogin, AuthFactory } from "./auth.service";
import {SigninComponent} from '../unprotected/signin.component';


@Component({
    selector: 'my-header',
    template: `
       
        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
        
                    <ul class="nav navbar-nav">
        
              <!--          <li><a [routerLink]="['signup']">Sign Up</a></li> -->
                        <li><a [routerLink]="['signin']">Sign In</a></li>
                        <li><a [routerLink]="['protected']">Protected</a></li>
        
                    </ul>
                    <ul class="nav navbar-nav navbar-right" *ngIf="isAuth()">
        
                        <li><a (click)="onLogout()" style="cursor: pointer;">Logout</a></li>
                    </ul>
                </div><!-- /.container-fluid -->
        
            </nav>
        
        </header>
    `
})
export class HeaderComponent {

    myLogin: MyLogin;
    facebookLogin: FacebookLogin;
    googleLogin: GoogleLogin;

  constructor(private authService: AuthService, @Optional() myLogin: MyLogin, @Optional() facebookLogin: FacebookLogin, @Optional() googleLogin: GoogleLogin) {
      this.myLogin = myLogin;
      this.facebookLogin = facebookLogin;
      this.googleLogin = googleLogin;

  }

  isAuth() {
    return AuthService.isAuthenticated();
  }

  onLogout() {

    let aCookie = JSON.parse(localStorage.getItem('auth_token'));

    window.alert(aCookie);
    let loginProperty = aCookie.loginP;

    window.alert(loginProperty);

    this[loginProperty + 'Login'].logout();


  }
}
