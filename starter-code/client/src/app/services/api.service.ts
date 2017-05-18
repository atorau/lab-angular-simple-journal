import { Injectable } from '@angular/core';
import { Http,RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/journal-entries`)
      .map((res) => res.json());
  }
  get(id) {
   return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`)
     .map((res) => res.json());
   }

   addEntry(entry) {
     let headers = new Headers({ 'Content-Type': 'application/json' });

     let options = new RequestOptions({ headers: headers });
     return this.http.post(`${this.BASE_URL}/api/journal-entries`, entry, options)
      .map((res) => res.json());
    }
    remove(id) {
      console.log('remove')
     return this.http.delete(`${this.BASE_URL}/api/journal-entries/${id}`)
       .map((res) => res.json());
   }


}
