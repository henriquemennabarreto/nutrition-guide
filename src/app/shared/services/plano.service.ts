import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUserData(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}
