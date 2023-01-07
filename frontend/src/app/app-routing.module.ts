import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {LoginComponent} from "./user/login/login.component";
import {RegisterComponent} from "./user/register/register.component";
import {IsLoggedInService} from "./services/auth/is-logged-in.service";
import {IsNotLoggedInService} from "./services/auth/is-not-logged-in.service";
import {IsLoggedInRouterService} from "./services/auth/is-logged-in-router.service";
import {ProfilMainComponent} from "./user/profil/profil-main/profil-main.component";
import {
  ProfilSettingsControllerComponent
} from "./user/profil/profil-settings-controller/profil-settings-controller.component";
import {PartySearchComponent} from "./dashboard/party-search/party-search.component";



const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:'login', component:LoginComponent, canActivate:[IsNotLoggedInService]},
  {path:'register', component:RegisterComponent, canActivate:[IsNotLoggedInService]},
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [IsLoggedInRouterService],
    children: [
      {path: 'profile/:id', component: ProfilMainComponent},
      {path: 'settings', component: ProfilSettingsControllerComponent},
      {path:'', component:PartySearchComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
