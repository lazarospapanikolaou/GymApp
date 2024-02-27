import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-programs-history',
  standalone: true,
  imports: [TableModule],
  templateUrl: './programs-history.component.html',
  styleUrl: './programs-history.component.scss'
})
export class ProgramsHistoryComponent {

}
