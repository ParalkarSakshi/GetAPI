import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

    private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http:HttpClient) { }

    getapiData() {
      return this.http.get<any[]>(this.apiUrl)
    }
}
