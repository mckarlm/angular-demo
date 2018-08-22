import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // for routing
import { FormsModule } from '@angular/forms'; // for input handling
import { HttpClientModule } from '@angular/common/http'; // ng's version of axios, and it's built in.

import { AppComponent } from './app.component';

//pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component'
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';

//shared components
import { HeaderComponent } from './pages/header/header.component';

//services
import { BackendService } from './services/backend.service';
import { SessionService } from './services/session.service'
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [ //duuuude
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([ // order matters, because it's like express
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [
    BackendService,
    SessionService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
