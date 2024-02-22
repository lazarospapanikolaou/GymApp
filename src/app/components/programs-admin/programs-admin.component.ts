import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-programs-admin',
  standalone: true,
  imports: [CardModule],
  templateUrl: './programs-admin.component.html',
  styleUrl: './programs-admin.component.scss'
})
export class ProgramsAdminComponent {

}
