import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittransactionComponent } from './edittransaction.component';

describe('EdittransactionComponent', () => {
  let component: EdittransactionComponent;
  let fixture: ComponentFixture<EdittransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdittransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
