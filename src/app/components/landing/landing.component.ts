import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { UserService } from 'src/app/service/user-service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
})
export class LandingComponent {
    constructor(
        public layoutService: LayoutService,
        public router: Router,
        private userService: UserService
    ) {
        this.userService.isUserLoggedIn().subscribe((user) => {
            if (user) {
                this.router.navigate(['/pages']);
            }
        });
    }
}
