import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
<<<<<<< HEAD
=======
import { LoginComponent } from './login/login.component';
>>>>>>> parent of d276e35 (login attempt 1)

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    OverviewComponent
=======
    OverviewComponent,
    LoginComponent
>>>>>>> parent of d276e35 (login attempt 1)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
