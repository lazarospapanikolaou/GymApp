import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programs-admin',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './programs-admin.component.html',
  styleUrl: './programs-admin.component.scss'
})

export class ProgramsAdminComponent {
  showUsers: boolean = false;

  constructor(private router: Router) {
  }

  changePage() {
    this.router.navigate(['users'])
  }

}
