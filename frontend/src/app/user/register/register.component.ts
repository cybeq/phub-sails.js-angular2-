import {Component, Renderer2} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/auth/user.service";
import {CitiesService} from "../../services/autofill/cities.service";
import {NavigationExtras, Router} from "@angular/router";
import {range} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  citiesArray:any[] = [];
  citiesLoading = false;
  citiesArrayRemeber:any[] = [];
  choice:any[] = [];
  error:any = null;
  range: any; monthRange:any; dayRange:any; chosenDay:any; chosenMonth:any; chosenYear:any;
  fistaszek:any = false;
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repassword: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required)

  })
  public constructor(private userService: UserService,
                      private citiesService:CitiesService,
                      private router:Router,
                      private renderer: Renderer2
                     ) {
    this.range = Array.from({length: 60}, (_, i) => new Date().getFullYear()-18 - i);
    this.monthRange =  Array.from({length: 12}, (_, i) => 1+i);
    this.dayRange = Array.from({length: new Date(this.range[0], this.monthRange[0], 0).getDate()}, (_, i) => 1+i);
    this.chosenYear = this.range[0]; this.chosenMonth = this.monthRange[0]; this.chosenDay = this.dayRange[0]
    this.calendarize();

    renderer.listen('window', 'keydown.enter', (event) => {
      this.register();
    });
  }

  public  register():any {
    // @ts-ignore
    this.registerForm.get('dob').setValue(this.chosenYear+'-'+this.chosenMonth+'-'+this.chosenDay);


      // @ts-ignore
    if(!this.citiesArrayRemeber.includes(this.registerForm.get('city').value)){
      this.error = 'Musisz wybrać miasto z załadowanej listy! To po to, abyśmy wszyscy się odnaleźli 🗺️'
      console.log('wybierz miasto z listy')
      return;
    }
    if(!this.registerForm.valid) {
      this.error = 'Musisz wypełnić cały formularz';

      if (this.registerForm.controls.email.status=="INVALID"){
        this.error = 'Podaj poprawny adres email'
      }
      return;
    }
    // @ts-ignore
    if(this.registerForm.get('password').value !== this.registerForm.get('repassword').value) {
      console.log('poprawnie powtórz hasło')
      this.error = 'Poprawnie powtórz hasło. To dla twojego bezpieczeństwa 😊'
      return;
    }


    this.userService.register(this.registerForm.value).subscribe(res=>{
      if(res.failure) this.error = 'Wypełnij dane poprawnie';
      if(res.failureReason) this.error = res.failureReason;
      else
          this.router.navigate(['/login'], {state:{email:this.registerForm.get('email')?.value, password:this.registerForm.get('password')?.value}});
    })

  }

  public cityAutoFill(){
    this.fistaszek = false;
    this.citiesLoading = true;
    const city = this.registerForm.get('city');
    this.citiesArray=[];
    // @ts-ignore
    this.citiesService.autofill(city.value).subscribe((res:any[])=>{
      let result = res;
      for(let all of result){
        if(all.type!='administrative' && all.type!='village') continue;
        this.citiesArray.push(all.display_name)
        this.citiesArray = this.citiesArray.filter((item, index) => this.citiesArray.indexOf(item) === index);
        this.citiesArrayRemeber = this.citiesArray;
      }
    })
    // @ts-ignore
    if(this.registerForm.get('city').value==='') this.citiesLoading = false;

  }
  public choose(choice:any){
    // @ts-ignore
    this.registerForm.get('city').setValue(choice);
    this.citiesArray = [];
    this.citiesLoading = false;

    // @ts-ignore
    if(this.citiesArrayRemeber.includes(this.registerForm.get('city').value)){
      this.fistaszek = 'good';
      this.error = null;
    }

  }

  onCityBlur(){
    // @ts-ignore
    if(!this.citiesArrayRemeber.includes(this.registerForm.get('city').value)){
      this.fistaszek = 'bad';
      this.citiesLoading = false;

    }
  }

  calendarize(){
    this.dayRange = Array.from({length: new Date(this.chosenYear, this.chosenMonth, 0).getDate()}, (_, i) => 1+i);
  }
}
