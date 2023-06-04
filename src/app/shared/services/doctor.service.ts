import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private url = 'http://localhost:3000/doctors'
  
  constructor(private http:HttpClient) { }

  // getDocByMail(mail: string) {
  //   return this.http.get()
  // }
}
