import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
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
        `
            :host ::ng-deep p-password > div {
                margin-bottom: 0.5rem !important;
            }
        `,
    ],
})
export class LoginComponent implements OnInit {
    valCheck: string[] = ['remember'];
    loginForm: FormGroup;

    email!: string;
    password!: string;

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    passwordFormControl = new FormControl('', [
        Validators.required,
        Validators.minLength(8),
    ]);

    constructor(
        public layoutService: LayoutService,
        private messageService: MessageService,
        private router: Router,
        private userService: UserService,
        private formBuilder: FormBuilder
    ) {
        this.userService.isUserLoggedIn().subscribe((res) => {
            if (res) {
                this.router.navigate(['/pages']);
            }
        });
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: this.emailFormControl,
            password: this.passwordFormControl,
        });
    }

    login() {
        if (this.email && this.password && !this.loginForm.invalid) {
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
