import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclealertComponent } from './vehiclealert.component';

describe('VehiclealertComponent', () => {
  let component: VehiclealertComponent;
  let fixture: ComponentFixture<VehiclealertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiclealertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclealertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
