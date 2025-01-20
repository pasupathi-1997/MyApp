import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcheckupComponent } from './newcheckup.component';

describe('NewcheckupComponent', () => {
  let component: NewcheckupComponent;
  let fixture: ComponentFixture<NewcheckupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewcheckupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
