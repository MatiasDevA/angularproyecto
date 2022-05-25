import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSegundoComponent } from './login-segundo.component';

describe('LoginSegundoComponent', () => {
  let component: LoginSegundoComponent;
  let fixture: ComponentFixture<LoginSegundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSegundoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSegundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
