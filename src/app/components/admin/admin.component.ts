import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import { UserComponent } from 'src/app/components/user/user.component';
import { UsersDto } from 'src/app/dto/users.dto';
import { UserDetailsService } from 'src/app/service/user-details.service';
import { UserService } from 'src/app/service/user-service';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core'; 

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [TabViewModule, CommonModule, UserComponent, TranslateModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  showAdminUser: boolean = false;
  showProgramHistory: boolean = false;
  pageTitle: string = '';
  user: UsersDto;

  constructor(
    private user_service: UserService,
    private route: ActivatedRoute,
    private user_details_service: UserDetailsService,
    private translateService: TranslateService
) {
  this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
    this.translateService.use(event.lang);
  });
}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // Access the query parameters here
      this.user_service.getUser(params['id']).subscribe((user) => {
          this.user = user;
          
      });
  });
  this.changeView('user')
  }

  changeView(view: any) {
    this.changeViewInternal(view)
  }

  changeViewInternal(view: any) {
    this.showAdminUser = false;
    this.showProgramHistory = false;

    if (view == 'user') {
      this.showAdminUser = true;
      this.pageTitle = this.translateService.instant('admin.user_details');
    } else if (view == 'programHistory') {
      this.showProgramHistory = true;
      this.pageTitle = this.translateService.instant('admin.program_history')
    }
  }
}
