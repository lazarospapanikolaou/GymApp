import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsHistoryComponent } from './programs-history.component';

describe('ProgramsHistoryComponent', () => {
  let component: ProgramsHistoryComponent;
  let fixture: ComponentFixture<ProgramsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramsHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
