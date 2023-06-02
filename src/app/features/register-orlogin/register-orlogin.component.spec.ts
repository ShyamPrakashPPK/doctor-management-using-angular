import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterORLoginComponent } from './register-orlogin.component';

describe('RegisterORLoginComponent', () => {
  let component: RegisterORLoginComponent;
  let fixture: ComponentFixture<RegisterORLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterORLoginComponent]
    });
    fixture = TestBed.createComponent(RegisterORLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
