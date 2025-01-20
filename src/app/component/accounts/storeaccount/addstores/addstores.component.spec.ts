import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstoresComponent } from './addstores.component';

describe('AddstoresComponent', () => {
  let component: AddstoresComponent;
  let fixture: ComponentFixture<AddstoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddstoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
