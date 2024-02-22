import { Injectable } from '@angular/core';
import { UsersDto } from '../components/users-admin/dto/users.dto';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UsersAdminService {
    users: UsersDto[] = [
        {
            id: 1,
            userName: 'titos',
            firstName: 'Chris',
            lastName: 'Bours',
            email: 'chrisbours@gmail.com',
        },
        {
            id: 2,
            userName: 'laz',
            firstName: 'Lazaros',
            lastName: 'Pap',
            email: 'lazpap@gmail.com',
        },
        {
            id: 3,
            userName: 'kostas',
            firstName: 'Kostas',
            lastName: 'Test',
            email: 'kostastest@gmail.com',
        },
    ];

    constructor() {}

    getAdminUsers(): Observable<UsersDto[]> {
        return of(this.users);
    }
}
