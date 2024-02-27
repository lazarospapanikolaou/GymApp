import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
    selector: 'app-programs-admin',
    standalone: true,
    imports: [CardModule, ButtonModule],
    templateUrl: './programs-admin.component.html',
    styleUrl: './programs-admin.component.scss',
    providers: [DialogService]
})
export class ProgramsAdminComponent {
    showUsers: boolean = false;
    ref: DynamicDialogRef;

    constructor(private router: Router, private dialogService: DialogService) {}

    changePage() {
        this.router.navigate(['/pages/users']);
    }

    createNewProgram(): void{
        this.ref = this.dialogService.open(AddNewProgramDialog, {
            header: 'Create a new Programm',
            width: '70%',
            contentStyle:  {"overflow": "auto"},
            maximizable: true
        });

        this.ref.onClose.subscribe((res) => {
            if (typeof res !== 'undefined') {
                var message = '';
                this.showToast
            }
        })
    }
}
