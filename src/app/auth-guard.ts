import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth/auth.service";
import { map, tap } from "rxjs/operators";


@Injectable()
export class AuthGuard {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
        return this.authService.userData.pipe(
            map(userGuard =>  {
                return !!userGuard;
            })
        );
    }

}