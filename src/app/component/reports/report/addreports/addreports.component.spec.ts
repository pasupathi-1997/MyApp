import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreportsComponent } from './addreports.component';

describe('AddreportsComponent', () => {
  let component: AddreportsComponent;
  let fixture: ComponentFixture<AddreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddreportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
