import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmanagersComponent } from './editmanagers.component';

describe('EditmanagersComponent', () => {
  let component: EditmanagersComponent;
  let fixture: ComponentFixture<EditmanagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditmanagersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditmanagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
