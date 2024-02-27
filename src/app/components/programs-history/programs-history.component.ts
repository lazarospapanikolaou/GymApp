import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ProgramsHistoryDto } from 'src/app/dto/programs-history.dto';
import { ProgramsHistoryService } from 'src/app/service/programs-history.service';
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-programs-history',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './programs-history.component.html',
  styleUrl: './programs-history.component.scss'
})
export class ProgramsHistoryComponent {
  programsHistory: ProgramsHistoryDto[] = []
  cols!: any[];

  constructor(
    private programHistory_service: ProgramsHistoryService,
    private route: ActivatedRoute,
    private translateService: TranslateService
    ) {
      this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
        this.translateService.use(event.lang);
      });
    }

  ngOnInit(): void {
    
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'exercise', header: 'Exercise' },
      { field: 'createdAt', header: 'Start Date' },
      { field: 'updatedAt', header: 'Update Date'},
      { field: 'comments', header: 'Comments'}
    ]

    this.route.queryParams.subscribe((params) => {
      const userId = params['id'];
      if(userId) {
          this.programHistory_service.getProgramHistory(userId).subscribe(
              (programHistory) => {
                  this.programsHistory = [programHistory];
                  // this.showAdminUser = false;
                  console.log(this.programsHistory);
              },
              (error) => {
                  console.log('Error with the user:', error);
              }
          );
      } else {
          console.log('User ID not found in query parameters')
      }
  });
  }
}
