import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartdiscountComponent } from './partdiscount.component';

describe('PartdiscountComponent', () => {
  let component: PartdiscountComponent;
  let fixture: ComponentFixture<PartdiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartdiscountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
