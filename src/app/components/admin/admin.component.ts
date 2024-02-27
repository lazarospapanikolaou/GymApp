import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { UserComponent } from 'src/app/components/user/user.component';
import { UsersDto } from 'src/app/dto/users.dto';
import { UserService } from 'src/app/service/user-service';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core'; 
import { ProgramsHistoryComponent } from '../programs-history/programs-history.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [TabViewModule, CommonModule, UserComponent, TranslateModule, ProgramsHistoryComponent, ButtonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  showAdminUser: boolean = false;
  showProgramHistory: boolean = false;
  pageTitle: string = '';
  user: UsersDto;
  activeTabIndex: number = 0;

  constructor(
    private user_service: UserService,
    private route: ActivatedRoute,
    private translateService: TranslateService
) {
  this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
    this.translateService.use(event.lang);
  });
}

  ngOnInit(): void {
    this.changeViewInternal('user');
  }

  changeView(index: number) {
    if (index === 0) {
      this.changeViewInternal('user');
    } else if (index === 1) {
      this.changeViewInternal('programHistory');
    }
  }

  changeViewInternal(view: any) {
    this.showAdminUser = false;
    this.showProgramHistory = false;

    if (view === 'user') {
      this.showAdminUser = true;
      this.activeTabIndex = 0
      this.pageTitle = this.translateService.instant('admin.user_details');
    } else if (view === 'programHistory') {
      this.showProgramHistory = true;
      this.activeTabIndex = 1;
      this.pageTitle = this.translateService.instant('admin.program_history')
    }
  }
}
