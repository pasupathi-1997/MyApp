import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtyremakesComponent } from './addtyremakes.component';

describe('AddtyremakesComponent', () => {
  let component: AddtyremakesComponent;
  let fixture: ComponentFixture<AddtyremakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtyremakesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtyremakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
