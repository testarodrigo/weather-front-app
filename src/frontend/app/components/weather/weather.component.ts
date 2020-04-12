import { Component, OnInit, Input } from "@angular/core";
import { Observable, of } from "rxjs";
import { Weather } from "../model/weather";
import { OpenWeatherService } from "./open-weather.service";
import { switchMap, distinctUntilChanged, finalize } from "rxjs/operators";

@Component({
  selector: "weather-component",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"],
})
export class WeatherComponent implements OnInit {
  @Input()
  id: string;

  @Input()
  city: Observable<string>;

  loading = false;
  weather$: Observable<{ weather: Weather }>;

  constructor(private openWeatherService: OpenWeatherService) {}

  ngOnInit() {
    this.city.pipe(distinctUntilChanged()).subscribe((id) => {
      this.loading = true;
      this.weather$ = this.openWeatherService.getWeatherForCity(id).pipe(
        switchMap((weather) =>
          of({
            weather,
          })
        ),
        finalize(() => (this.loading = false))
      );
    });
  }
}
