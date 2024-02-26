import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { UsersDto } from 'src/app/dto/users.dto';
import { UserService } from 'src/app/service/user-service';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [InputSwitchModule, FormsModule, DropdownModule, CommonModule],
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit {
    user: UsersDto;
    checkedDark: boolean;
    languages: { code: string; name: string }[] = [
        { code: 'en', name: 'English' },
        { code: 'el', name: 'Greek' },
    ];
    selectedLanguage: { code: string; name: string } | undefined;

    constructor(
        public layoutService: LayoutService,
        private translate: TranslateService,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        this.checkedDark = !localStorage.getItem('theme')
            ? false
            : localStorage.getItem('theme') === 'light'
            ? false
            : localStorage.getItem('theme') === 'dark'
            ? true
            : false; //read from db or localstorage
        
        this.selectedLanguage = this.languages.find(
            (lang) => lang.code == localStorage.getItem('lang')
        ) || {
            code: 'en',
            name: 'English',
        }; //read from db or localstorage
        //get current logged in user(with id 2 on this example)
        this.userService.getUser(2).subscribe((user) => {
            this.user = user;
        });
    }

    set theme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            theme: val,
        }));
    }

    get theme(): string {
        return this.layoutService.config().theme;
    }

    set colorScheme(val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            colorScheme: val,
        }));
    }

    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }

    changeTheme(theme: string, colorScheme: string) {
        this.theme = theme;
        this.colorScheme = colorScheme;
    }

    themeSwitch($event) {
        if (this.checkedDark) {
            this.changeTheme('mdc-dark-indigo', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            this.changeTheme('mdc-light-indigo', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    changeLanguage($event): void {
        this.translate.use($event.code);
        localStorage.setItem('lang', $event.code);
    }
}
