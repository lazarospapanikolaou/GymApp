import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-programs-admin',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './programs-admin.component.html',
  styleUrl: './programs-admin.component.scss'
})
export class ProgramsAdminComponent {

  load() {
    console.log("Success")
  }

}
