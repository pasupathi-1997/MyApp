import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyremakesComponent } from './tyremakes.component';

describe('TyremakesComponent', () => {
  let component: TyremakesComponent;
  let fixture: ComponentFixture<TyremakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TyremakesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TyremakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
