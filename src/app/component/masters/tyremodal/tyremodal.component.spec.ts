import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyremodalComponent } from './tyremodal.component';

describe('TyremodalComponent', () => {
  let component: TyremodalComponent;
  let fixture: ComponentFixture<TyremodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TyremodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TyremodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
