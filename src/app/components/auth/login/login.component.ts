import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { UserService } from 'src/app/service/user-service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class LoginComponent {
    valCheck: string[] = ['remember'];

    email!: string;
    password!: string;

    constructor(
        public layoutService: LayoutService,
        private messageService: MessageService,
        private router: Router,
        private userService: UserService
    ) {
        this.userService.isUserLoggedIn().subscribe((res) => {
            if (res) {
                console.log('Login', res);
                this.router.navigate(['/pages']);
            }
        });
    }

    login() {
        if (this.email && this.password) {
            localStorage.setItem('auth_token', 'true');
            this.router.navigate(['/pages']);
        } else {
            this.show();
        }
    }

    show() {
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Something went wrong',
        });
    }
}
