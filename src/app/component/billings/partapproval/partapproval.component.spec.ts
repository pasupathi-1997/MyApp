import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartapprovalComponent } from './partapproval.component';

describe('PartapprovalComponent', () => {
  let component: PartapprovalComponent;
  let fixture: ComponentFixture<PartapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartapprovalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
