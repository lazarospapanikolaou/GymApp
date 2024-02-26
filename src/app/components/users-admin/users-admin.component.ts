import { Component, OnInit } from '@angular/core';
import { UsersDto } from '../../dto/users.dto';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsersAdminService } from 'src/app/service/users-admin.service';
import { AvatarModule } from 'primeng/avatar';
import { UserService } from 'src/app/service/user-service';

@Component({
    selector: 'app-users-admin',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        ButtonModule,
        InputTextModule,
        AvatarModule,
    ],
    templateUrl: './users-admin.component.html',
    styleUrl: './users-admin.component.scss',
    providers: [UsersAdminService],
})
export class UsersAdminComponent implements OnInit {
    users: UsersDto[] = [];
    loading: boolean = true;
    cols!: any[];

    constructor(
        // private users_admin_service: UsersAdminService,
        private users_admin_service:  UserService,
        private router: Router
    ) {}

    ngOnInit(): void {
        
        this.cols = [
            { field: 'userName', header: 'User Name' },
            { field: 'firstName', header: 'First Name' },
            { field: 'lastName', header: 'Last Name' },
            { field: 'email', header: 'Email' },
        ];

        this.users_admin_service
            .getAdminUsers()
            .subscribe((res: UsersDto[]) => {
                this.users = res;
                this.loading = false;
                // console.log(this.users)
            });
    }

    clear(table: Table) {
        table.clear();
    }

    handleRowSelect(user: UsersDto) {
        const queryParams = {
            id: user.id,
        };
        // ------- This is for details of the user with Tabs ------- 
        this.router.navigate(['pages/users/admin'], { queryParams });
        
        // ------- This is for details of the user without Tabs ------- 
        // this.router.navigate(['pages/users/user/'], { queryParams });
    }
    
}
