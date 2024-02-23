import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig, private translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
      }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
