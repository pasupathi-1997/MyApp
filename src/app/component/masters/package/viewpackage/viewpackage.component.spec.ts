import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpackageComponent } from './viewpackage.component';

describe('ViewpackageComponent', () => {
  let component: ViewpackageComponent;
  let fixture: ComponentFixture<ViewpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewpackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
