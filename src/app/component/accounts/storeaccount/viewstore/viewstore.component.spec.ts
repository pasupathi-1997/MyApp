import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstoreComponent } from './viewstore.component';

describe('ViewstoreComponent', () => {
  let component: ViewstoreComponent;
  let fixture: ComponentFixture<ViewstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewstoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
