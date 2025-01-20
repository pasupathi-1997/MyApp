import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpartgroupComponent } from './editpartgroup.component';

describe('EditpartgroupComponent', () => {
  let component: EditpartgroupComponent;
  let fixture: ComponentFixture<EditpartgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditpartgroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpartgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
