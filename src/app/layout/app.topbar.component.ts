import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { UserService } from '../service/user-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
    items!: MenuItem[];
    isUserLoggedIn: boolean = false;

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        public layoutService: LayoutService,
        private userService: UserService,
        private router: Router
    ) {
        this.userService.isUserLoggedIn().subscribe((isLoggedIn) => {
            this.isUserLoggedIn = isLoggedIn;
        });
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.isUserLoggedIn = false;
        this.router.navigate(['/home']);
    }
}
