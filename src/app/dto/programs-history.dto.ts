export class ProgramsHistoryDto {
    id: number;
    entries: ExerciseEntry[];
}

interface ExerciseEntry {
    exercise: string;
    comments: string;
    createdAt: Date;
    updatedAt: Date;   
}

