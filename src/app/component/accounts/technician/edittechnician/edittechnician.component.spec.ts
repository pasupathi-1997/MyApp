import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittechnicianComponent } from './edittechnician.component';

describe('EdittechnicianComponent', () => {
  let component: EdittechnicianComponent;
  let fixture: ComponentFixture<EdittechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdittechnicianComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
