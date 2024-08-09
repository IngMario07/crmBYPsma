import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private http:HttpClient) {}
  baseUrl = "http://localhost:8080/api/";
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer 2|HqprpuFH5cs9b3OXS0uOQVzom4RHKumEA3cSw362aa1a33bf`,
    })
  };

  Get(Modelo: string) {
    return this.http.get(`${this.baseUrl}${Modelo}`, this.httpOptions);
  }






}
