import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenalertComponent } from './maintenalert.component';

describe('MaintenalertComponent', () => {
  let component: MaintenalertComponent;
  let fixture: ComponentFixture<MaintenalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenalertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
