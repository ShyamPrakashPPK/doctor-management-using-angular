import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordChecker } from 'src/app/shared/password-checker';

@Component({
  selector: 'app-doctor-registration-form',
  templateUrl: './doctor-registration-form.component.html',
  styleUrls: ['./doctor-registration-form.component.css']
})
export class DoctorRegistrationFormComponent {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      mobile_number: ['', Validators.required],
      email_address: ['', [Validators.required, Validators.email]],
      full_name: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      confirm_password: ['', Validators.required],
    },{
      validators: passwordChecker('password', 'confirm_password')
    });
  }

  submitForm() {
    console.log("HEREREE",this.myForm.value );
    
    if (this.myForm.valid) {
      console.log("VALIDATED");
      
      console.log(this.myForm.value);
    } else {
      console.log("VALIDATION FAILED");
      
      this.myForm.markAllAsTouched();
    }
  }
  
}
