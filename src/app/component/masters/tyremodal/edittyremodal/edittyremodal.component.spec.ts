import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittyremodalComponent } from './edittyremodal.component';

describe('EdittyremodalComponent', () => {
  let component: EdittyremodalComponent;
  let fixture: ComponentFixture<EdittyremodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdittyremodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittyremodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
