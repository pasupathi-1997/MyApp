import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpartgroupComponent } from './addpartgroup.component';

describe('AddpartgroupComponent', () => {
  let component: AddpartgroupComponent;
  let fixture: ComponentFixture<AddpartgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddpartgroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpartgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
