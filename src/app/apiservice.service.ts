import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

    // private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    private apiUrl = 'http://localhost:9989/persons/getAll'

    constructor(private http:HttpClient) { }

    getPerson(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl)
    }
}
