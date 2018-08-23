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

  constructor(
    private auth: AuthService,
    private session: SessionService
  ) {
    this.user = session.getSession();
  }

  ngOnInit() {
    this.session.isLoggedInAsAnObservable()
      .subscribe(
        (loggedIn: boolean) => {
          this._isLoggedIn = loggedIn;
        },
        err => {
          console.log(err)
        }
      )
  }

  ngOnDestroy() {
  
  }

  isLoggedIn() {
    return this._isLoggedIn;
  }

  logout() {
    return this.auth.logout();
  }

}