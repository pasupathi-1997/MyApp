import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfuellogComponent } from './addfuellog.component';

describe('AddfuellogComponent', () => {
  let component: AddfuellogComponent;
  let fixture: ComponentFixture<AddfuellogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddfuellogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfuellogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
