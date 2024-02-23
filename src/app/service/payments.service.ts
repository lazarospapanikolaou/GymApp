import { Injectable } from '@angular/core';
import { PaymentsDto } from '../dto/payments.dto';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PaymentsService {
    payments: PaymentsDto[] = [
        {
            id: 1,
            userName: 'titos',
            firstName: 'Chris',
            lastName: 'Bours',
            payment: 32,
        },
        {
            id: 2,
            userName: 'laz',
            firstName: 'Lazaros',
            lastName: 'Pap',
            payment: 27,
        },
        {
            id: 3,
            userName: 'kostas',
            firstName: 'Kostas',
            lastName: 'Test',
            payment: 15,
        },
    ];

    constructor() {}

    getPayments(): Observable<PaymentsDto[]> {
        return of(this.payments);
    }
}
