import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorsPageComponent } from './view-doctors-page.component';

describe('ViewDoctorsPageComponent', () => {
  let component: ViewDoctorsPageComponent;
  let fixture: ComponentFixture<ViewDoctorsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDoctorsPageComponent]
    });
    fixture = TestBed.createComponent(ViewDoctorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
