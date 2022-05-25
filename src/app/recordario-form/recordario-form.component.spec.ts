import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordarioFormComponent } from './recordario-form.component';

describe('RecordarioFormComponent', () => {
  let component: RecordarioFormComponent;
  let fixture: ComponentFixture<RecordarioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordarioFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
