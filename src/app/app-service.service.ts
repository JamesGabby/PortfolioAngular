import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  serverUrl = 'http://localhost:3000/api/comment';

  constructor(private http: HttpClient) { }

  postData(clientData: String) {
    const Data = {
      comment: clientData
    };

    this.http.post(this.serverUrl, Data).toPromise().then(data => {
      console.log(data);
    });
  }
}
