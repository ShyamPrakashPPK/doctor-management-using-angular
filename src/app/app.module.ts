import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterORLoginComponent } from './features/register-orlogin/register-orlogin.component';
import { DoctorRegistrationFormComponent } from './features/doctor-registration-form/doctor-registration-form.component';
import { ViewDoctorsPageComponent } from './features/view-doctors-page/view-doctors-page.component';
import { AfterRegistrationPageComponent } from './features/after-registration-page/after-registration-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterORLoginComponent,
    DoctorRegistrationFormComponent,
    ViewDoctorsPageComponent,
    AfterRegistrationPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }