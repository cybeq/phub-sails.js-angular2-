import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = '/api'
  constructor(private http:HttpClient) { }

  login(email:string, password:string) {
    return this.http.post<any>(`${this.url}/login`, {email:email, password:password});
  }
  register(body:any){
    return this.http.post<any>('/api/register', body);
  }
  logout(){
    return this.http.get<any>('/api/logout');
  }

  getUser() {
    return this.http.get<any>('/api/userdata');
  }

  getUserById(param: any) {
    return this.http.get<any>('/api/getuserbyid/'+param);
  }
}
