import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlogreportComponent } from './addlogreport.component';

describe('AddlogreportComponent', () => {
  let component: AddlogreportComponent;
  let fixture: ComponentFixture<AddlogreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddlogreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddlogreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
