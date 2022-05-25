import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecicladorComponent } from './form-reciclador.component';

describe('FormRecicladorComponent', () => {
  let component: FormRecicladorComponent;
  let fixture: ComponentFixture<FormRecicladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRecicladorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRecicladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
