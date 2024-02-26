import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user-service';
import { ActivatedRoute } from '@angular/router';
import { UsersDto } from '../../dto/users.dto';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { UserDetailDto } from 'src/app/dto/user-detail.dto';
import { UserDetailsService } from 'src/app/service/user-details.service';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core'; 


@Component({
    selector: 'app-user',
    standalone: true,
    imports: [CardModule, TableModule, CommonModule, ProgressSpinnerModule, TranslateModule, CommonModule],
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
    user: UsersDto;
    userDetail: UserDetailDto[] = [];
    cols!: any[];
    showAdminUser: boolean = false;

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
        this.showAdminUser = false;
        this.cols = [
            { field: 'firstName', header: 'First Name' },
            { field: 'lastName', header: 'Last Name' },
            { field: 'email', header: 'Email' },
            { field: 'birthDate', header: 'Date Birth'},
            { field: 'address', header: 'Address'}
        ]
        this.route.queryParams.subscribe((params) => {
            // Access the query parameters here
            this.user_service.getUser(params['id']).subscribe((user) => {
                this.user = user;
                console.log(user)
            });
        });

        this.user_details_service.getUserDetails().subscribe((res: UserDetailDto[]) => {
            this.userDetail = res;
            this.showAdminUser = true;
        })
    }
}
