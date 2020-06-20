import { Component, OnInit, Input } from "@angular/core";
import { of } from "rxjs";
import { Weather } from "../model/weather";
import { switchMap, distinctUntilChanged, finalize } from "rxjs/operators";

@Component({
  selector: "weather-component",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.scss"],
})
export class WeatherComponent implements OnInit {
  @Input()
  weather: Weather;

  constructor() {}

  ngOnInit() {}
}
