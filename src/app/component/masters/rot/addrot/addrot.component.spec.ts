import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrotComponent } from './addrot.component';

describe('AddrotComponent', () => {
  let component: AddrotComponent;
  let fixture: ComponentFixture<AddrotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddrotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
