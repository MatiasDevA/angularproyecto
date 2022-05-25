import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTaskListComponent } from './header-task-list.component';

describe('HeaderTaskListComponent', () => {
  let component: HeaderTaskListComponent;
  let fixture: ComponentFixture<HeaderTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTaskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
