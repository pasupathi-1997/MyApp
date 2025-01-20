import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstoresComponent } from './editstores.component';

describe('EditstoresComponent', () => {
  let component: EditstoresComponent;
  let fixture: ComponentFixture<EditstoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditstoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditstoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
