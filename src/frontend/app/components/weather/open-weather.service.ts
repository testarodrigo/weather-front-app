import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Weather } from "../model/weather";

@Injectable()
export class OpenWeatherService {
  private API_WEATHER_URL = "http://localhost:8080/weather/cities/";

  constructor(private httpClient: HttpClient) {}

  getWeatherForCity(id: string): Observable<Weather> {
    return this.httpClient.get<Weather>(`${this.API_WEATHER_URL}${id}`);
  }
}
