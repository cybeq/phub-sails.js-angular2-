import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfirmComponent } from './popups/confirm/confirm.component';
import { LoginComponent } from './user/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './user/register/register.component';
import { ProfilMainComponent } from './user/profil/profil-main/profil-main.component';
import { ProfilSettingsControllerComponent } from './user/profil/profil-settings-controller/profil-settings-controller.component';
import { PartySearchComponent } from './dashboard/party-search/party-search.component';
import {UserSocketService} from "./services/sockets/user-socket.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    ConfirmComponent,
    LoginComponent,
    RegisterComponent,
    ProfilMainComponent,
    ProfilSettingsControllerComponent,
    PartySearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
