import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrotComponent } from './editrot.component';

describe('EditrotComponent', () => {
  let component: EditrotComponent;
  let fixture: ComponentFixture<EditrotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditrotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditrotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
