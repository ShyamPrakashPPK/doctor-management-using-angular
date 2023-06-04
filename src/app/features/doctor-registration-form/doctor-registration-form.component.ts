import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordChecker } from 'src/app/shared/password-checker';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctor-registration-form',
  templateUrl: './doctor-registration-form.component.html',
  styleUrls: ['./doctor-registration-form.component.css']
})
export class DoctorRegistrationFormComponent {
  myForm!: FormGroup;
  values: any = [""];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route: Router) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      mobile_number: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email_address: ['', [Validators.required, Validators.email]],
      full_name: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      confirm_password: ['', Validators.required],
      date: ['', Validators.required],
      online_consult_fee: ['', Validators.required],
      offline_consult_fee: ['', Validators.required],
    }, {
      validators: passwordChecker('password', 'confirm_password')
    });
  }



  get r() {
    return this.myForm.controls
  }


  //to add a new degree
  addNewDegree(value: any, index: number) {
    this.values[index] = value
  }


  //for adding and removing new degree
  removeValues(i: any) {
    if (i !== 0) {
      alert("Need at least on degree")
      this.values.splice(i, 1)
    }
  }
  addValues() {
    this.values.push('')
  }




  submitForm() {
    console.log("..................................");

    if (this.myForm.valid) {
      let error = this.values.filter((value: any) => value === '')
      if (error.length > 0) {
        console.log(error);
        console.log(this.values);
        alert('Cant leave any empty fields')

      } else {
        console.log(error);
        console.log(this.values);
        const newDoctor = {
          mobile_number: this.r['mobile_number'].value,
          email_address: this.r['email_address'].value,
          full_name: this.r['full_name'].value,
          password: this.r['password'].value,
          date: this.r['date'].value,
          degree: this.values,
          online_fees: this.r['online_consult_fee'].value,
          offline_fees: this.r['offline_consult_fee'].value
        };
        this.http.post('http://localhost:3000/doctors', newDoctor).subscribe(
          (response: any) => {
            console.log('New user created:', response);
            this.route.navigate(['/doc-reg-sucessfull'])
          },
          (error: any) => {
            console.error('Error creating user:', error);
          }
        );
      }
    } else {
      this.myForm.markAllAsTouched();
    }

  }

}
