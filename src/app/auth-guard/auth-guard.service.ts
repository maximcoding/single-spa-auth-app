import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable()
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) {
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token') as string;
    return !this.jwtHelper.isTokenExpired(token);
  }

  public signFakeToken(value) {
    localStorage.setItem('token', value);
  }
}

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {
  }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
