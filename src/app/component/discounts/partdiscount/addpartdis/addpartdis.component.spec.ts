import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpartdisComponent } from './addpartdis.component';

describe('AddpartdisComponent', () => {
  let component: AddpartdisComponent;
  let fixture: ComponentFixture<AddpartdisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddpartdisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpartdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
