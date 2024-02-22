import { Component, OnInit } from '@angular/core';
import { UsersAdminService } from '../../service/users-admin.service';
import { UsersDto } from './dto/users.dto';
import { Table, TableModule } from 'primeng/table';

@Component({
    selector: 'app-users-admin',
    standalone: true,
    imports: [TableModule],
    templateUrl: './users-admin.component.html',
    styleUrl: './users-admin.component.scss',
})
export class UsersAdminComponent implements OnInit {
    users: UsersDto[] = [];
    loading: boolean = true;

    constructor(private users_admin_service: UsersAdminService) {}

    ngOnInit(): void {
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
}
