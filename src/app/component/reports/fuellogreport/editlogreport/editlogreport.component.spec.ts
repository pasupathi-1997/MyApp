import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlogreportComponent } from './editlogreport.component';

describe('EditlogreportComponent', () => {
  let component: EditlogreportComponent;
  let fixture: ComponentFixture<EditlogreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditlogreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditlogreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
