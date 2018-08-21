import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  url: string = 'http://localhost:4200/api/';

  constructor(private http: HttpClient) {

  }

  // data becomes "this.backend"
  contact(data) {
    console.log('data', data)
    const contactUrl = this.url + 'contact';
    return this.http.post(contactUrl, data).toPromise();
  }
}