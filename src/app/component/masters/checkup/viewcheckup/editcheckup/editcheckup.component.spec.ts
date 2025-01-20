import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcheckupComponent } from './editcheckup.component';

describe('EditcheckupComponent', () => {
  let component: EditcheckupComponent;
  let fixture: ComponentFixture<EditcheckupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditcheckupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
