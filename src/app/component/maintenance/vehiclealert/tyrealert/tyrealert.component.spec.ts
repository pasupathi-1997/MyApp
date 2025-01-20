import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyrealertComponent } from './tyrealert.component';

describe('TyrealertComponent', () => {
  let component: TyrealertComponent;
  let fixture: ComponentFixture<TyrealertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TyrealertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TyrealertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
