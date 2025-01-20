import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtyremodalComponent } from './addtyremodal.component';

describe('AddtyremodalComponent', () => {
  let component: AddtyremodalComponent;
  let fixture: ComponentFixture<AddtyremodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtyremodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtyremodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
