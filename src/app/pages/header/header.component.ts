import { Component, OnInit, OnDestroy } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: object;

  private _isLoggedIn: boolean;
  private _isLoggedInAsObservable;

  constructor(
    private auth: AuthService,
    private session: SessionService
  ) {
    this.user = session.getSession();
  }

  ngOnInit() {
    // short version
    // using this means you don't need OnDestroy
    this._isLoggedInAsObservable = this.session.isLoggedInAsAnObservable();

    // long version
    this._isLoggedInAsObservable
      .subscribe(
        (loggedIn: boolean) => {
          this._isLoggedIn = loggedIn;
        },
        err => {
          console.log(err)
        }
      );
  }

  ngOnDestroy() {
    // long
    this._isLoggedInAsObservable.unscubscribe();
  }

  isLoggedIn() {
    return this._isLoggedIn;
  }

  logout() {
    return this.auth.logout();
  }

}