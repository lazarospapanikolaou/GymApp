import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
import { ProgramsService } from 'src/app/service/programs.service';
import { CommonModule } from '@angular/common';
import { ProgramsDto } from 'src/app/dto/programs.dto';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-programs-admin',
    standalone: true,
    imports: [CommonModule, CardModule, ButtonModule, DatePipe],
    templateUrl: './programs-admin.component.html',
    styleUrl: './programs-admin.component.scss',
})
export class ProgramsAdminComponent {
    showPrograms: boolean = false;
    programs: ProgramsDto[];

    constructor(
        private router: Router,
        private programsService: ProgramsService
    ) {}

    ngOnInit() {
        this.programsService.getPrograms().subscribe((res: ProgramsDto[]) => {
            this.programs = res;
        });
    }

    changePage() {
        this.router.navigate(['/pages/users']);
    }
}
