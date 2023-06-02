import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterRegistrationPageComponent } from './after-registration-page.component';

describe('AfterRegistrationPageComponent', () => {
  let component: AfterRegistrationPageComponent;
  let fixture: ComponentFixture<AfterRegistrationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterRegistrationPageComponent]
    });
    fixture = TestBed.createComponent(AfterRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
