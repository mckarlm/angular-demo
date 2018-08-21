import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // for routing
import { FormsModule } from '@angular/forms'; // for input handling

import { AppComponent } from './app.component';

//pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component'
import { ContactComponent } from './pages/contact/contact.component';

//shared components
import { HeaderComponent } from './pages/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent
  ],
  imports: [ //duuuude
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([ // order matters, because it's like express
      { path: '', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
