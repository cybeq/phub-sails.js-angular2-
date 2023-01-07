import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInService implements CanActivate{

  constructor(private http:HttpClient, private router:Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.http.get<{ authenticated: boolean }>('/api/get').pipe(
      map((res:any) => {
        if (!res.error)
          return true;


        return false;

      })
    );
  }
  isLoggedIn(){
    return this.http.get<{ authenticated: boolean }>('/api/get');
  }
}
