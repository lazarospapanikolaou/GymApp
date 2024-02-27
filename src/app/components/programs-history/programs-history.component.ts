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
  showProgramHistory: boolean = true;

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
      
      // { field: 'entries.' + 'exercise', header: 'Exercise' },
      // { field: 'entries[0].createdAt', header: 'Start Date' },
      // { field: 'entries[0].updatedAt', header: 'Update Date'},
      // { field: 'entries[0].comments', header: 'Comments'}
    ]
    this.route.queryParams.subscribe((params) => {
      const userId = params['id'];
      if(userId) {
          this.programHistory_service.getProgramHistory(userId).subscribe(
              (programsHistory) => {
                  this.programsHistory = [programsHistory];
                  this.showProgramHistory = false;
                  console.log(this.programsHistory)
                  // console.log(this.programsHistory[0].entries[0].exercise);
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
