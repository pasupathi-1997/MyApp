import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreaddComponent } from './storeadd.component';

describe('StoreaddComponent', () => {
  let component: StoreaddComponent;
  let fixture: ComponentFixture<StoreaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
