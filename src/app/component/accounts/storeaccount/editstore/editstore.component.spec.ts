import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstoreComponent } from './editstore.component';

describe('EditstoreComponent', () => {
  let component: EditstoreComponent;
  let fixture: ComponentFixture<EditstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditstoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
