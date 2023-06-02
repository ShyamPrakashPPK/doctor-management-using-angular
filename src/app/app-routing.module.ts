import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component imports...
import { RegisterORLoginComponent } from './features/register-orlogin/register-orlogin.component';
import { DoctorRegistrationFormComponent } from './features/doctor-registration-form/doctor-registration-form.component';
import { ViewDoctorsPageComponent } from './features/view-doctors-page/view-doctors-page.component';
import { AfterRegistrationPageComponent } from './features/after-registration-page/after-registration-page.component';

const routes: Routes = [
  //path to the entry page... login and register
  {
    path: '',
    component: RegisterORLoginComponent
  },

  //path to the doc registration form
  {
    path: 'register',
    component: DoctorRegistrationFormComponent
  },

  //path to show after sucessfull doc registration
  {
    path: 'doc-reg-sucessfull',
    component: AfterRegistrationPageComponent
  },

  //path to view all doctors.. doctor card...
  {
    path: 'view-doctors',
    component: ViewDoctorsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
