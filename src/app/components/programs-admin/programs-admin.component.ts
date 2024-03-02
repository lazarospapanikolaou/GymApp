import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
import {DialogService} from 'primeng/dynamicdialog';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AddNewProgramDialogComponent } from '../dialogs/add-new-program-dialog/add-new-program-dialog.component';

@Component({
    selector: 'app-programs-admin',
    standalone: true,
    imports: [CardModule, ButtonModule, ToastModule, AddNewProgramDialogComponent],
    templateUrl: './programs-admin.component.html',
    styleUrl: './programs-admin.component.scss',
    providers: [DialogService, MessageService]
})
export class ProgramsAdminComponent {
    showUsers: boolean = false;
    ref: DynamicDialogRef;

    constructor(private router: Router, private dialogService: DialogService, private messageService: MessageService) {}

    changePage() {
        this.router.navigate(['/pages/users']);
    }

    createNewProgram(): void{
        this.ref = this.dialogService.open(AddNewProgramDialogComponent, {
            header: 'Create a new Program',
            width: '70%',
            contentStyle:  {"overflow": "auto"},
            maximizable: false
        });

        this.ref.onClose.subscribe((res) => {
            if (typeof res !== 'undefined') {
                this.messageService.add({ severity:'error', summary: 'Error', detail: 'Faild to add a program'});
            }
        })
    }
}
