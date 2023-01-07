import { Component } from '@angular/core';
import {UserService} from "../../../services/auth/user.service";
import {ActivatedRoute} from "@angular/router";
import {IsLoggedInService} from "../../../services/auth/is-logged-in.service";

@Component({
  selector: 'app-profil-main',
  templateUrl: './profil-main.component.html',
  styleUrls: ['./profil-main.component.css']
})
export class ProfilMainComponent {
    user:any;
    userAge: any;
    noUserError:any;
    owner:boolean = false;
    constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
                private isLoggedIn:IsLoggedInService
                ) {
      this.userService.getUserById(activatedRoute.snapshot.params['id']).subscribe(res=> {
        if(res.error){this.noUserError = res.error; return;}
        this.user = res;

        // @ts-ignore
        this.isLoggedIn.canActivate().subscribe((authenticated) => {
          if (authenticated) {
        this.userService.getUser().subscribe(res=>{
          if(this.user.id === res.id) this.owner = true;
        })}});

        this.userAge = (new Date().getTime() - new Date(this.user.dob).getTime()) / 3.15569e10;
        this.userAge = parseInt(this.userAge)
      });

    }

}
