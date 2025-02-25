import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcustomersComponent } from './newcustomers.component';

describe('NewcustomersComponent', () => {
  let component: NewcustomersComponent;
  let fixture: ComponentFixture<NewcustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewcustomersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
