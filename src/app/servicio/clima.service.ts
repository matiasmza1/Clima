import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  key = "03d2cf9d8bf1be16f83247350df1eb8e";

  constructor(private http: HttpClient) { }

  clima(ciudad: string): Observable<any> {
    //return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&mode=json&units=metric&appid=${this.key}');
    //return this.http.get('https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}');
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q={"mendoza"},{"AR"}&appid={"03d2cf9d8bf1be16f83247350df1eb8e"}');
  }

}
