import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuellogComponent } from './fuellog.component';

describe('FuellogComponent', () => {
  let component: FuellogComponent;
  let fixture: ComponentFixture<FuellogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuellogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuellogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
