import { Injectable } from '@angular/core';
import { UsersDto } from '../dto/users.dto';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    users: UsersDto[] = [
        {
            id: 1,
            userName: 'titos',
            firstName: 'Chris',
            lastName: 'Bours',
            email: 'chrisbours@gmail.com',
            image: '',
        },
        {
            id: 2,
            userName: 'laz',
            firstName: 'Lazaros',
            lastName: 'Pap',
            email: 'lazpap@gmail.com',
            image: '',
        },
        {
            id: 3,
            userName: 'kostas',
            firstName: 'Kostas',
            lastName: 'Test',
            email: 'kostastest@gmail.com',
            image: 'https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];
    constructor() {}

    getUser(id: number): Observable<UsersDto> {
        return of(this.users.find((user) => user.id == id));
    }

    isUserLoggedIn(): Observable<boolean> {
        const loggedIn = localStorage.getItem('auth_token');
        if (!loggedIn) {
            return of(false);
        }
        return of(true);
    }
}
