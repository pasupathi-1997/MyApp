import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcheckupComponent } from './addcheckup.component';

describe('AddcheckupComponent', () => {
  let component: AddcheckupComponent;
  let fixture: ComponentFixture<AddcheckupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcheckupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
