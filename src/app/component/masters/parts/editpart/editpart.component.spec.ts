import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpartComponent } from './editpart.component';

describe('EditpartComponent', () => {
  let component: EditpartComponent;
  let fixture: ComponentFixture<EditpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditpartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
