import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-getapi',
  templateUrl: './getapi.component.html',
  styleUrls: ['./getapi.component.css']
})

export class GetapiComponent {
  apiData : any[]=[];
  getapiDta:any;
  constructor(private  callApiService:ApiserviceService){};

  ngOnInit() {
    this.fetchApiData();
  }
  fetchApiData() {
    this.callApiService.getPerson().subscribe(
      (data:any) => {
        this.apiData = data;
      },
      (error:any) => {
        console.error('API error, error')
      }
      );
  }

  // clickMe() {
  //   this.callApiService.getPerson().subscribe(
  //     (data:any) => {
  //       this.apiData = data;
  //     },
  //     (error:any) => {
  //       console.error('API error, error')
  //     }
  //     );
  // }
}
