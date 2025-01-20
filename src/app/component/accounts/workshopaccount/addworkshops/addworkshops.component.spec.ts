import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddworkshopsComponent } from './addworkshops.component';

describe('AddworkshopsComponent', () => {
  let component: AddworkshopsComponent;
  let fixture: ComponentFixture<AddworkshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddworkshopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddworkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
