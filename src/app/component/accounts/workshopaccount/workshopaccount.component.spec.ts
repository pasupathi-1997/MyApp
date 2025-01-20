import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopaccountComponent } from './workshopaccount.component';

describe('WorkshopaccountComponent', () => {
  let component: WorkshopaccountComponent;
  let fixture: ComponentFixture<WorkshopaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopaccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
