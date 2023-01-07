import {Component, OnInit} from '@angular/core';
import {IsLoggedInService} from "../services/auth/is-logged-in.service";
import {UserService} from "../services/auth/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  logged?:boolean ;
  public constructor(private isLoggedIn: IsLoggedInService, private userService:UserService, private router:Router) {
  }

  ngOnInit() {
    // @ts-ignore
    this.isLoggedIn.canActivate().subscribe((authenticated) => {
      if (authenticated) {
        this.logged = true;
        this.router.navigate(['/dashboard']);
      } else {
        this.logged = false;
      }
    });
  }
  public async logout(){
    this.userService.logout().subscribe(()=>location.reload());

  }
}
