import { Injectable } from '@angular/core';
import { ProgramsDto } from '../dto/programs.dto';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ProgramsService {
    programs: ProgramsDto[] = [
        {
            id: 1,
            gymId: 2,
            title: 'The Daily Pump',
            date: '2024-04-22',
            area: 'Quads/Adductor',
            image: '',
        },
        {
            id: 2,
            gymId: 1,
            title: 'The Daily Pump',
            date: '2024-04-19',
            area: 'Chest/Biceps',
            image: '',
        },
        {
            id: 3,
            gymId: 1,
            title: 'The Daily Pump',
            date: '2024-04-26',
            area: 'Calves/Neck/Forearms',
            image: '',
        },
        {
            id: 4,
            gymId: 2,
            title: 'The Daily Pump',
            date: '2024-04-08',
            area: 'Back/Rear Delts',
            image: '',
        },
        {
            id: 5,
            gymId: 3,
            title: 'The Daily Pump',
            date: '2024-04-10',
            area: 'Hamstrings/Glutes/Abductor',
            image: '',
        },
        {
            id: 6,
            gymId: 2,
            title: 'The Daily Pump',
            date: '2024-04-05',
            area: 'Shoulders/Triceps/Abs',
            image: '',
        },
        {
            id: 7,
            gymId: 3,
            title: 'The Daily Pump',
            date: '2024-04-06',
            area: 'Quads/Adductor',
            image: '',
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

    getProgram(id: number): Observable<ProgramsDto> {
        // How to use headers for needed requests as an example
        //     const headers = this.getHeaders();
        //     return this.http.get<any[]>(`${this.apiUrl}/products`, { headers });
        return of(this.programs.find((program) => program.id == id));
    }

    getPrograms(): Observable<ProgramsDto[]> {
        return of(this.programs);
    }
}
