import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartgroupComponent } from './partgroup.component';

describe('PartgroupComponent', () => {
  let component: PartgroupComponent;
  let fixture: ComponentFixture<PartgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartgroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
