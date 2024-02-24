import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from './layout/service/app.layout.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    constructor(
        private primengConfig: PrimeNGConfig,
        private translate: TranslateService,
        public layoutService: LayoutService
    ) {
        this.translate.setDefaultLang('en');
        const lang = localStorage.getItem('lang');
        if (lang) {
            this.translate.use(lang);
        } else {
            this.translate.use('en');
        }

        let theme = localStorage.getItem('theme') || 'light';
        this.changeTheme('mdc-' + theme + '-indigo', theme);
    }

    ngOnInit() {
        this.primengConfig.ripple = true;
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
}
