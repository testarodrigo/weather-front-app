import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Weather } from "../model/weather";

@Injectable()
export class OpenWeatherService {
  private API_WEATHER_URL = "http://localhost:4200/weather/api/weather/cities/";
  private API_WEATHER_ALL_URL = "http://localhost:4200/weather/api/weather/all";

  constructor(private httpClient: HttpClient) {}

  getWeatherForCity(id: string): Observable<Weather> {
    return this.httpClient.get<Weather>(`${this.API_WEATHER_URL}${id}`);
  }

  getWeatherByLocation(lat: number, lng: number) {
    return this.httpClient.get<any>(
      `${this.API_WEATHER_ALL_URL}?latitude=${lat}&longitude=${lng}`
    );
  }
}
