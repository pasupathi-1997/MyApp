import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminalertComponent } from './adminalert.component';

describe('AdminalertComponent', () => {
  let component: AdminalertComponent;
  let fixture: ComponentFixture<AdminalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminalertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
