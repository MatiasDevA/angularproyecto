import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTaskListComponent } from './button-task-list.component';

describe('ButtonTaskListComponent', () => {
  let component: ButtonTaskListComponent;
  let fixture: ComponentFixture<ButtonTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonTaskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
