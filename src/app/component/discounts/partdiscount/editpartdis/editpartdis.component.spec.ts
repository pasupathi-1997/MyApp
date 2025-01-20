import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpartdisComponent } from './editpartdis.component';

describe('EditpartdisComponent', () => {
  let component: EditpartdisComponent;
  let fixture: ComponentFixture<EditpartdisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditpartdisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpartdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
