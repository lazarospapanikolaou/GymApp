import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProgramDialogComponent } from './add-new-program-dialog.component';

describe('AddNewProgramDialogComponent', () => {
  let component: AddNewProgramDialogComponent;
  let fixture: ComponentFixture<AddNewProgramDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewProgramDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewProgramDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
