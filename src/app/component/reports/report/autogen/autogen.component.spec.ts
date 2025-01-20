import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutogenComponent } from './autogen.component';

describe('AutogenComponent', () => {
  let component: AutogenComponent;
  let fixture: ComponentFixture<AutogenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutogenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
