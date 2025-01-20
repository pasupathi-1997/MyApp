import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryalertComponent } from './batteryalert.component';

describe('BatteryalertComponent', () => {
  let component: BatteryalertComponent;
  let fixture: ComponentFixture<BatteryalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatteryalertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatteryalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
