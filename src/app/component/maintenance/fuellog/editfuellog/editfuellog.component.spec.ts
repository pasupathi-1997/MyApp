import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfuellogComponent } from './editfuellog.component';

describe('EditfuellogComponent', () => {
  let component: EditfuellogComponent;
  let fixture: ComponentFixture<EditfuellogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditfuellogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditfuellogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
