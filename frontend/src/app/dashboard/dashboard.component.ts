import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/auth/user.service";
import {Router} from "@angular/router";
import {IsLoggedInService} from "../services/auth/is-logged-in.service";
import {UserSocketService} from "../services/sockets/user-socket.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any;
  userOptionContainer = false;
  sockets:any;
  userOptions = [{name:'dashboard/profile',text:"⌘ Twój profil"},
                 {name:'dashboard/settings',text:"🛠 Ustawienia"},
                 {name:'logout',text:"⌥ Wyloguj się", function:'logout()'}]
 constructor(private userService:UserService, public router:Router,
            private isLoggedIn: IsLoggedInService,
            private socket: UserSocketService
 ) {
   // @ts-ignore
   this.isLoggedIn.canActivate().subscribe((authenticated) => {
     if (authenticated) {
       this.userService.getUser().subscribe(res => {
         this.user = res;
       });
     //   miejsce na socket
     }});
 }
  public async logout(){
    this.userService.logout().subscribe(()=>location.reload());

  }

  ngOnInit() {

  }

}
