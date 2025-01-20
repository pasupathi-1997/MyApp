import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcusdisComponent } from './editcusdis.component';

describe('EditcusdisComponent', () => {
  let component: EditcusdisComponent;
  let fixture: ComponentFixture<EditcusdisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditcusdisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcusdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
