import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { UserService } from '../service/user-service';
import { Observable, map, of, switchMap, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        let url: string = state.url;
        return this.checkUserLogin(next, url);
    }

    checkUserLogin(
        route: ActivatedRouteSnapshot,
        url: any
    ): Observable<boolean> {
        
        return this.userService.isUserLoggedIn().pipe(
            switchMap((loggedIn: boolean) => {
        
                if (loggedIn) {
        
                    return this.userService.getRole().pipe(
                        map((role: string) => {
                                    if (
                                route.data['roles'] &&
                                !route.data['roles'].includes(role)
                            ) {

                                this.router.navigate(['/']);
                                return false;
                            }
                    
                            return true;
                        })
                    );
                } else {
                    
                    this.router.navigate(['/']);
                    return of(false);
                }
            })
        );
    }
}
