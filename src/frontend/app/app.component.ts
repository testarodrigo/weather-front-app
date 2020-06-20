import { Component, OnInit } from "@angular/core";
import { Suggestion } from "./components/model/suggestion";
import { Subject, of, Observable } from "rxjs";
import { tileLayer, latLng, marker, icon } from "leaflet";
import { OpenWeatherService } from "./components/weather/open-weather.service";
import {
  distinctUntilChanged,
  switchMap,
  finalize,
  map,
  tap,
} from "rxjs/operators";
import { Weather } from "./components/model/weather";
import { NgElement, WithProperties } from "@angular/elements";
import { MarkerModalComponent } from "./components/marker-modal/marker-modal.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "openweather";

  currentCity$: Subject<string> = new Subject();
  weather$: Observable<Weather>;
  layers = [];

  options = {
    layers: [
      tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }),
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909),
  };

  constructor(private openWeatherService: OpenWeatherService) {}

  ngOnInit() {
    this.currentCity$.pipe(distinctUntilChanged()).subscribe((id) => {
      this.weather$ = this.openWeatherService
        .getWeatherForCity(id)
        .pipe(switchMap((weather) => of(weather)));
    });
  }
  showCityWeather(suggestion: Suggestion): void {
    if (suggestion) {
      this.currentCity$.next(suggestion.id);
    }
  }

  onMapClick(event) {
    const layer = marker([event.latlng.lat, event.latlng.lng], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        popupAnchor: [0, -45],
        iconUrl: "assets/marker-icon.png",
        shadowUrl: "assets/marker-shadow.png",
      }),
    });
    layer.bindPopup(
      (fl) => this.createPopupComponentWithMessage(this.weather$),
      { maxWidth: 450 }
    );
    layer.openPopup(event.latlng);

    this.layers = [layer];
    this.weather$ = this.openWeatherService
      .getWeatherByLocation(event.latlng.lat, event.latlng.lng)
      .pipe(map((weather) => weather.current));
  }

  public createPopupComponentWithMessage(weather$: Observable<Weather>) {
    const popupEl: NgElement &
      WithProperties<MarkerModalComponent> = document.createElement(
      "marker-modal-element"
    ) as any;
    // Listen to the close event
    popupEl.addEventListener("closed", () =>
      document.body.removeChild(popupEl)
    );
    popupEl.weather$ = weather$;
    // Add to the DOM
    document.body.appendChild(popupEl);
    return popupEl;
  }
}
