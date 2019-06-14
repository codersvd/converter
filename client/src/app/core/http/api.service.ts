import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  //get(url)

  //post(url, body, options)

  //delete(url, body)

  //put(url, data)

  //upload(url, file)
}
