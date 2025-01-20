import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuellogreportComponent } from './fuellogreport.component';

describe('FuellogreportComponent', () => {
  let component: FuellogreportComponent;
  let fixture: ComponentFixture<FuellogreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuellogreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuellogreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
