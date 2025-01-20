import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditworkshopsComponent } from './editworkshops.component';

describe('EditworkshopsComponent', () => {
  let component: EditworkshopsComponent;
  let fixture: ComponentFixture<EditworkshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditworkshopsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditworkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
