import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotComponent } from './rot.component';

describe('RotComponent', () => {
  let component: RotComponent;
  let fixture: ComponentFixture<RotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
