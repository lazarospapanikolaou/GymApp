import { Component, OnInit } from '@angular/core';
import { UsersAdminService } from '../../service/users-admin.service';
import { UsersDto } from '../../dto/users.dto';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users-admin',
    standalone: true,
    imports: [CommonModule, TableModule, ButtonModule, InputTextModule],
    templateUrl: './users-admin.component.html',
    styleUrl: './users-admin.component.scss',
})
export class UsersAdminComponent implements OnInit {
    users: UsersDto[] = [];
    loading: boolean = true;
    cols!: any[];

    constructor(
        private users_admin_service: UsersAdminService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.cols = [
            // { field: 'id', header: 'ID' },
            { field: 'userName', header: 'User Name' },
            { field: 'firstName', header: 'First Name' },
            { field: 'lastName', header: 'Last Name' },
            { field: 'email', header: 'Email' },
        ];

        this.users_admin_service
            .getAdminUsers()
            .subscribe((res: UsersDto[]) => {
                this.users = res;
                console.log(this.users);
                this.loading = false;
            });
    }

    clear(table: Table) {
        table.clear();
    }

    handleRowSelect(user: UsersDto) {
        console.log(user);
        const queryParams = {
            id: user.id,
        };
        this.router.navigate(['/users/user/'], { queryParams });
    }
}
