import { Injectable } from '@angular/core';
import { UsersDto } from '../dto/users.dto';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

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
            birthDate: '15/03/1999',
            address: 'atreidon 11',
        },
        {
            id: 2,
            userName: 'laz',
            firstName: 'Lazaros',
            lastName: 'Pap',
            email: 'lazpap@gmail.com',
            image: '',
            birthDate: '15/03/1999',
            address: 'atreidon 11',
        },
        {
            id: 3,
            userName: 'kostas',
            firstName: 'Kostas',
            lastName: 'Test',
            email: 'kostastest@gmail.com',
            image: 'https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            birthDate: '15/03/1999',
            address: 'atreidon 11',
        },
        {
            id: 4,
            userName: 'arispap',
            firstName: 'Aris',
            lastName: 'Papageorgiou',
            email: 'ArisPapageorgiou@gmail.com',
            image: 'https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            birthDate: '15/03/1999',
            address: 'atreidon 11',
        },
        {
            id: 5,
            userName: 'George',
            firstName: 'Giorgos',
            lastName: 'Xotos',
            email: 'GeorgeXoto@gmail.com',
            image: 'https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            birthDate: '15/03/1999',
            address: 'atreidon 11',
        },
        {
            id: 6,
            userName: 'thanspan',
            firstName: 'Thanos',
            lastName: 'Spanos',
            email: 'thanoSpanos@gmail.com',
            image: 'https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            birthDate: '15/03/1999',
            address: 'atreidon 11',
        },
    ];
    constructor() {}

    private getHeaders(): HttpHeaders {
        const authToken = localStorage.getItem('auth_token');
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
        });
    }

    getUser(id: number): Observable<UsersDto> {
        // How to use headers for needed requests as an example
        //     const headers = this.getHeaders();
        //     return this.http.get<any[]>(`${this.apiUrl}/products`, { headers });
        return of(this.users.find((user) => user.id == id));
    }

    isUserLoggedIn(): Observable<boolean> {
        const loggedIn = localStorage.getItem('auth_token');
        if (!loggedIn) {
            return of(false);
        }
        return of(true);
    }

    getRole(): Observable<string> {
        const role = localStorage.getItem('ROLE');
        return of('ROLE_ADMIN');
    }

    getAdminUsers(): Observable<UsersDto[]> {
        return of(this.users);
    }
}
