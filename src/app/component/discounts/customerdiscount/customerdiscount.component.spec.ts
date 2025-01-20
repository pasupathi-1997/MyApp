import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdiscountComponent } from './customerdiscount.component';

describe('CustomerdiscountComponent', () => {
  let component: CustomerdiscountComponent;
  let fixture: ComponentFixture<CustomerdiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerdiscountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
