import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user-service';
import { ActivatedRoute } from '@angular/router';
import { UsersDto } from '../../dto/users.dto';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
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
    user: UsersDto[] = [];
    cols!: any[];
    showAdminUser: boolean = true;

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
        
        this.cols = [
            { field: 'firstName', header: 'First Name' },
            { field: 'lastName', header: 'Last Name' },
            { field: 'email', header: 'Email' },
            { field: 'birthDate', header: 'Date Birth'},
            { field: 'address', header: 'Address'}
        ]

        this.route.queryParams.subscribe((params) => {
            const userId = params['id'];
            if(userId) {
                this.user_service.getUser(userId).subscribe(
                    (user) => {
                        this.user = [user];
                        this.showAdminUser = false;
                        console.log(this.user);
                    },
                    (error) => {
                        console.log('Error with the user:', error);
                    }
                );
            } else {
                console.log('User ID not found in query parameters')
            }
        });
    }
}
