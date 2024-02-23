import { Injectable } from '@angular/core';
import { UserDetailDto } from '../dto/user-detail.dto';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class UserDetailsService {
    user: UserDetailDto[] = [
        {
           
            firstName: 'Lazaros',
            lastName: 'Papanikolaou',
            email: 'lazaros.papanikolaoy@gmail.com',
            birthDate: '15/03/1999',
            address: "atreidon 11"
        },
        {
            
            firstName: 'Chris',
            lastName: 'Boursis',
            email: 'chrisBoursis@gmail.com',
            birthDate: '15/03/1990',
            address: "lekatasa 24"
        },
        {
            
            firstName: 'Spiros',
            lastName: 'Koustas',
            email: 'SpirosKoustas@gmail.com',
            birthDate: '15/03/1990',
            address: "Kritis 52"
        },
        {
            
            firstName: 'Spiros',
            lastName: 'Koustas',
            email: 'SpirosKoustas@gmail.com',
            birthDate: '15/03/1990',
            address: "Kritis 52"
        },
        {
            
            firstName: 'Spiros',
            lastName: 'Koustas',
            email: 'SpirosKoustas@gmail.com',
            birthDate: '15/03/1990',
            address: "Kritis 52"
        },
        {
            
            firstName: 'Spiros',
            lastName: 'Koustas',
            email: 'SpirosKoustas@gmail.com',
            birthDate: '15/03/1990',
            address: "Kritis 52"
        },
        {
            
            firstName: 'Spiros',
            lastName: 'Koustas',
            email: 'SpirosKoustas@gmail.com',
            birthDate: '15/03/1990',
            address: "Kritis 52"
        },
        {
            
            firstName: 'Spiros',
            lastName: 'Koustas',
            email: 'SpirosKoustas@gmail.com',
            birthDate: '15/03/1990',
            address: "Kritis 52"
        },
        {
            
            firstName: 'Spiros',
            lastName: 'Koustas',
            email: 'SpirosKoustas@gmail.com',
            birthDate: '15/03/1990',
            address: "Kritis 52"
        },
        {
            
            firstName: 'Spiros',
            lastName: 'Koustas',
            email: 'SpirosKoustas@gmail.com',
            birthDate: '15/03/1990',
            address: "Kritis 52"
        }
    ];

    constructor() {}

    getUserDetails(): Observable<UserDetailDto[]> {
        return of (this.user);
    }
}