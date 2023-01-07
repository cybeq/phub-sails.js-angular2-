import {Component, Renderer2} from '@angular/core';
import {UserService} from "../../services/auth/user.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  data:any;
  error:any = null;
  constructor(private userService:UserService, private router: Router, private location:Location,
              private activatedRoute:ActivatedRoute, private renderer:Renderer2
              ) {
    // @ts-ignore
    this.location.subscribe((location: PopStateEvent) => {
      if (location.type === 'popstate') {
        this.router.navigate(['/']);
      }
    });
    // @ts-ignore
       if(this.router.getCurrentNavigation().extras.state) {
      // @ts-ignore
      this.email = this.router.getCurrentNavigation().extras.state.email;
      // @ts-ignore
      this.password = this.router.getCurrentNavigation().extras.state.password;
    }

    renderer.listen('window', 'keydown.enter', (event) => {
     this.login();
    });
  }
  async login(){
      if(this.email.length<1 || this.password.length<1)
      {
        this.error = 'Wypełnij wszystkie pola'
        return;
      }

      await this.userService.login(this.email, this.password).subscribe(res=>{
        if(res.failure){
          console.log(res)
          this.error ='Niepoprawne dane logowania'
        }
        else this.router.navigate(['/'])
      })

  }
}
