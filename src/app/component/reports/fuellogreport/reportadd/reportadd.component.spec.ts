import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportaddComponent } from './reportadd.component';

describe('ReportaddComponent', () => {
  let component: ReportaddComponent;
  let fixture: ComponentFixture<ReportaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
