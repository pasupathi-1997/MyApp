import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportfuellogComponent } from './reportfuellog.component';

describe('ReportfuellogComponent', () => {
  let component: ReportfuellogComponent;
  let fixture: ComponentFixture<ReportfuellogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportfuellogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportfuellogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
