import { Injectable } from '@angular/core';
import { UsersDto } from '../dto/users.dto';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UsersAdminService {
    users: UsersDto[] = [
        {
            id: 1,
            userName: 'titosManos',
            firstName: 'Chris',
            lastName: 'Bours',
            email: 'chrisbours@gmail.com',
            image: '',
            birthDate: '15/03/1999',
            address: "atreidon 11"
        },
        {
            id: 2,
            userName: 'laz',
            firstName: 'Lazaros',
            lastName: 'Pap',
            email: 'lazpap@gmail.com',
            image: '',
            birthDate: '15/03/1999',
            address: "atreidon 11"
        },
        {
            id: 3,
            userName: 'kostas',
            firstName: 'Kostas',
            lastName: 'Test',
            email: 'kostastest@gmail.com',
            image: 'https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            birthDate: '15/03/1999',
            address: "atreidon 11"
        },
        {
            id: 4,
            userName: 'arispap',
            firstName: 'Aris',
            lastName: 'Papageorgiou',
            email: 'ArisPapageorgiou@gmail.com',
            image: 'https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            birthDate: '15/03/1999',
            address: "atreidon 11"
        },
        {
            id: 5,
            userName: 'George',
            firstName: 'Giorgos',
            lastName: 'Xotos',
            email: 'GeorgeXoto@gmail.com',
            image: 'https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            birthDate: '15/03/1999',
            address: "atreidon 11"
        },
        {
            id: 6,
            userName: 'thanspan',
            firstName: 'Thanos',
            lastName: 'Spanos',
            email: 'thanoSpanos@gmail.com',
            image: 'https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            birthDate: '15/03/1999',
            address: "atreidon 11"
        },
    ];

    constructor() {}

    getAdminUsers(): Observable<UsersDto[]> {
        return of(this.users);
    }
}
