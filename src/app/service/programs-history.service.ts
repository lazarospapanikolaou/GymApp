import { Injectable } from "@angular/core"; 
import { ProgramsHistoryDto } from '../dto/programs-history.dto'
import { Observable, of } from "rxjs";
import { HttpHeaders } from "@angular/common/http"; 

@Injectable({
    providedIn: 'root',  
})
export class ProgramsHistoryService {
    programsHistory: ProgramsHistoryDto[] = [
        {
            id: 1,
            entries: 
            [
                {
                    exercise: 'Incline Dumbbell Fly',
                    comments: 'That was really tough',
                    createdAt: new Date('2-27-2024'),
                    updatedAt: new Date('3-27-2024'),
                },
                {
                    exercise: 'Incline Dumbbell Fly(underhead)',
                    comments: 'That was easy',
                    createdAt: new Date('2-27-2024'),
                    updatedAt: new Date('4-27-2024'),
                },
                {
                    exercise: 'Barbell Preacher Curl',
                    comments: 'That was competitive',
                    createdAt: new Date('2-27-2024'),
                    updatedAt: new Date('5-27-2024'),
                },
                {
                    exercise: 'Alternating Dumbbell Hammer Curl',
                    comments: 'That was competitive',
                    createdAt: new Date('2-27-2024'),
                    updatedAt: new Date('6-27-2024'),
                },
            ],
        },
        {
            id: 2,
            entries: 
            [
                {
                    exercise: 'Incline Dumbbell Fly',
                    comments: 'That was really tough',
                    createdAt: new Date('3-27-2024'),
                    updatedAt: new Date('3-27-2024'),
                },
                {
                    exercise: 'Incline Dumbbell Fly(underhead)',
                    comments: 'That was easy',
                    createdAt: new Date('3-27-2024'),
                    updatedAt: new Date('4-27-2024'),
                },
                {
                    exercise: 'Barbell Preacher Curl',
                    comments: 'That was competitive',
                    createdAt: new Date('3-27-2024'),
                    updatedAt: new Date('5-27-2024'),
                },
                {
                    exercise: 'Alternating Dumbbell Hammer Curl',
                    comments: 'That was competitive',
                    createdAt: new Date('3-27-2024'),
                    updatedAt: new Date('6-27-2024'),
                },
            ],
        },
        {
            id: 3,
            entries: 
            [
                {
                    exercise: 'Incline Dumbbell Fly',
                    comments: 'That was really tough',
                    createdAt: new Date('4-27-2024'),
                    updatedAt: new Date('3-27-2024'),
                },
                {
                    exercise: 'Incline Dumbbell Fly(underhead)',
                    comments: 'That was easy',
                    createdAt: new Date('4-27-2024'),
                    updatedAt: new Date('4-27-2024'),
                },
                {
                    exercise: 'Barbell Preacher Curl',
                    comments: 'That was competitive',
                    createdAt: new Date('4-27-2024'),
                    updatedAt: new Date('5-27-2024'),
                },
                {
                    exercise: 'Alternating Dumbbell Hammer Curl',
                    comments: 'That was competitive',
                    createdAt: new Date('4-27-2024'),
                    updatedAt: new Date('6-27-2024'),
                },
            ],
        },
        {
            id: 4,
            entries: 
            [
                {
                    exercise: 'Incline Dumbbell Fly',
                    comments: 'That was really tough',
                    createdAt: new Date('5-27-2024'),
                    updatedAt: new Date('3-27-2024'),
                },
                {
                    exercise: 'Incline Dumbbell Fly(underhead)',
                    comments: 'That was easy',
                    createdAt: new Date('5-27-2024'),
                    updatedAt: new Date('4-27-2024'),
                },
                {
                    exercise: 'Barbell Preacher Curl',
                    comments: 'That was competitive',
                    createdAt: new Date('5-27-2024'),
                    updatedAt: new Date('5-27-2024'),
                },
                {
                    exercise: 'Alternating Dumbbell Hammer Curl',
                    comments: 'That was competitive',
                    createdAt: new Date('5-27-2024'),
                    updatedAt: new Date('6-27-2024'),
                },
            ],
        },
        {
            id: 5,
            entries: 
            [
                {
                    exercise: 'Incline Dumbbell Fly',
                    comments: 'That was really tough',
                    createdAt: new Date('6-27-2024'),
                    updatedAt: new Date('3-27-2024'),
                },
                {
                    exercise: 'Incline Dumbbell Fly(underhead)',
                    comments: 'That was easy',
                    createdAt: new Date('6-27-2024'),
                    updatedAt: new Date('4-27-2024'),
                },
                {
                    exercise: 'Barbell Preacher Curl',
                    comments: 'That was competitive',
                    createdAt: new Date('6-27-2024'),
                    updatedAt: new Date('5-27-2024'),
                },
                {
                    exercise: 'Alternating Dumbbell Hammer Curl',
                    comments: 'That was competitive',
                    createdAt: new Date('7-27-2024'),
                    updatedAt: new Date('6-27-2024'),
                },
            ],
        },
        {
            id: 6,
            entries: 
            [
                {
                    exercise: 'Incline Dumbbell Fly',
                    comments: 'That was really tough',
                    createdAt: new Date('8-27-2024'),
                    updatedAt: new Date('3-27-2024'),
                },
                {
                    exercise: 'Incline Dumbbell Fly(underhead)',
                    comments: 'That was easy',
                    createdAt: new Date('8-27-2024'),
                    updatedAt: new Date('4-27-2024'),
                },
                {
                    exercise: 'Barbell Preacher Curl',
                    comments: 'That was competitive',
                    createdAt: new Date('8-27-2024'),
                    updatedAt: new Date('5-27-2024'),
                },
                {
                    exercise: 'Alternating Dumbbell Hammer Curl',
                    comments: 'That was competitive',
                    createdAt: new Date('8-27-2024'),
                    updatedAt: new Date('6-27-2024'),
                },
            ],
        },
    ]



}