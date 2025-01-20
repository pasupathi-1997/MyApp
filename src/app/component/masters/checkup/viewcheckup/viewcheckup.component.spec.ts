import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcheckupComponent } from './viewcheckup.component';

describe('ViewcheckupComponent', () => {
  let component: ViewcheckupComponent;
  let fixture: ComponentFixture<ViewcheckupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewcheckupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
