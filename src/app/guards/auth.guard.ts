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
        console.log('Inside guard');
        return this.userService.isUserLoggedIn().pipe(
            switchMap((loggedIn: boolean) => {
                console.log('is logged in', loggedIn);
                if (loggedIn) {
                    console.log('User is logged in. Checking for role');
                    return this.userService.getRole().pipe(
                        map((role: string) => {
                            console.log(route.data['roles'].includes(role));
                            console.log(route.data['roles']);
                            console.log(role);
                            if (
                                route.data['roles'] &&
                                !route.data['roles'].includes(role)
                            ) {
                                console.log(
                                    'User doesnt have the needed role',
                                    role
                                );
                                this.router.navigate(['/']);
                                return false;
                            }
                            console.log('User has the needed role', role);
                            return true;
                        })
                    );
                } else {
                    console.log('User is not logged in', loggedIn);
                    this.router.navigate(['/home']);
                    return of(false);
                }
            })
        );
    }
}
