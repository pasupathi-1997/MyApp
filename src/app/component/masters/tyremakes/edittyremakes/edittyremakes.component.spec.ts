import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittyremakesComponent } from './edittyremakes.component';

describe('EdittyremakesComponent', () => {
  let component: EdittyremakesComponent;
  let fixture: ComponentFixture<EdittyremakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdittyremakesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittyremakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
