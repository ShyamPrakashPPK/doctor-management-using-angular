import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordChecker } from 'src/app/shared/password-checker';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-doctor-registration-form',
  templateUrl: './doctor-registration-form.component.html',
  styleUrls: ['./doctor-registration-form.component.css']
})
export class DoctorRegistrationFormComponent {
  myForm!: FormGroup;


  constructor(private formBuilder: FormBuilder ,private http: HttpClient) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      mobile_number: ['', Validators.required],
      email_address: ['', [Validators.required, Validators.email]],
      full_name: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      confirm_password: ['', Validators.required],
      date: ['', Validators.required],
      degree: ['', Validators.required]

    },{
      validators: passwordChecker('password', 'confirm_password')
    });
  }


  addNewDegree() {
    
  }
  get r() {
    return this.myForm.controls
  }

  name = "Add degree"
  values:any = [];
  
  removeValues(i: any) {
    this.values.splice(i,1)
  }

  addValues() {
    this.values.push({value:""})
  }

  submitForm() {
    if (this.myForm.valid) {
      // Create a new user object based on the form values
      const newUser = {
        mobile_number: this.r['mobile_number'].value,
        email_address: this.r['email_address'].value,
        full_name: this.r['full_name'].value,
        password: this.r['password'].value,
        date: this.r['date'].value,
        degree:this.r['degree'].value
      };

      // Make the HTTP POST request to the JSON server
      this.http.post('http://localhost:3000/users', newUser).subscribe(
        (response: any) => {
          console.log('New user created:', response);
        },
        (error: any) => {
          console.error('Error creating user:', error);
        }
      );
    } else {
      this.myForm.markAllAsTouched();
    }
  }
  
}
