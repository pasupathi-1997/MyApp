import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcusdisComponent } from './addcusdis.component';

describe('AddcusdisComponent', () => {
  let component: AddcusdisComponent;
  let fixture: ComponentFixture<AddcusdisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcusdisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcusdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
