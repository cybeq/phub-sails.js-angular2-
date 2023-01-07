import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInRouterService implements CanActivate{

  constructor(private http:HttpClient, private router:Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.http.get<{ authenticated: boolean }>('/api/get').pipe(
      map((res:any) => {
        if (!res.error)
          return true;

        this.router.navigate(['/login'])
        return false;

      })
    );
  }
}
