import { Injectable } from '@angular/core';
import { UserDetailDto } from '../dto/user-detail.dto';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class UserDetailsService {
    user: UserDetailDto[] = [
        {
            id: 1,
            firstName: 'Chris',
            lastName: 'Bours',
            email: 'chrisbours@gmail.com',
            birthDate: '15/03/1999',
            address: "atreidon 11"
        },
        {
            id: 2,
            firstName: 'Lazaros',
            lastName: 'Pap',
            email: 'lazpap@gmail.com',
            birthDate: '15/03/1990',
            address: "lekatasa 24"
        },
        {
            id: 3,
            firstName: 'kostas',
            lastName: 'Test',
            email: 'kostastest@gmail.com',
            birthDate: '15/03/1990',
            address: "Kritis 52"
        },
        {
            id: 4,
            firstName: 'Aris',
            lastName: 'Papageorgiou',
            email: 'ArisPapageorgiou@gmail.com',
            birthDate: '15/03/1990',
            address: "Kritis 52"
        },
        {
            id: 5,
            firstName: 'Giorgos',
            lastName: 'Xotos',
            email: 'GeorgeXoto@gmail.com',
            birthDate: '15/03/1990',
            address: "Kritis 52"
        },
        {
            id: 6,
            firstName: 'Thanos',
            lastName: 'Spanos',
            email: 'thanoSpanos@gmail.com',
            birthDate: '15/03/1990',
            address: "Kritis 52"
        }
    ];

    constructor() {}

    // getUserDetails(): Observable<UserDetailDto[]> {
    //     return of (this.user);
    // }
    
    // -------- Example --------

    getUserDetails(id: number): Observable<UserDetailDto> {
        return of (this.user.find((user) => user.id == id));
    }
}