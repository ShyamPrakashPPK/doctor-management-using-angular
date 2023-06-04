  import { HttpClient } from '@angular/common/http';
  import { Component } from '@angular/core';
import { Router } from '@angular/router';

  @Component({
    selector: 'app-view-doctors-page',
    templateUrl: './view-doctors-page.component.html',
    styleUrls: ['./view-doctors-page.component.css']
  })
  export class ViewDoctorsPageComponent {

    doctors: any[] = [];

    currentPage: number = 1;
    itemsPerPage: number = 5;


    constructor(private http: HttpClient , private route:Router) {
      this.fetchDoctors(this.currentPage,this.itemsPerPage);
    }

    fetchDoctors(page: number, limit: number) {

      const url = `http://localhost:3000/doctors?_page=${page}&_limit=${limit}`;

      this.http.get<any[]>(url).subscribe(
        (response: any[]) => {
          if (response.length > 0) {
            this.doctors = [...this.doctors,...response];
            console.log('Doctors:', this.doctors);
          } else {
            alert('No more available doctors');
          }
        },
        (error: any) => {
          console.error('Error fetching doctors:', error);
        }
      );
    }


    loadMore() {
      if (this.doctors.length > 0) {
        this.currentPage++;
        this.fetchDoctors(this.currentPage, this.itemsPerPage);
      }
    }

    goToHome() {
      this.route.navigate([''])
    }

    viewDoctor(doctor: string) {
      this.route.navigate(['/doctor-details', doctor])
    }   









  }
