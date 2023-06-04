import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  private url="http://localhost:3000/doctors"

  doctorDetails: any;

  constructor(private route:ActivatedRoute, private router:Router, private http:HttpClient){}



  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      console.log(id);
      this.http.get(`${this.url}/${id}`).subscribe(
        (details) => {
          this.doctorDetails = details
          console.log(details,"details");
          
        }
      )
    });
  }


  
  


  goToHome() {    
    this.router.navigate([''])
  }

}
