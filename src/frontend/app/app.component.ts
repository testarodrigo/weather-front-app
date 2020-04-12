import { Component } from "@angular/core";
import { Suggestion } from "./components/model/suggestion";
import { Subject } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "openweather";

  currentCity$: Subject<string> = new Subject();

  constructor() {}
  showCityWeather(suggestion: Suggestion): void {
    if (suggestion) {
      this.currentCity$.next(suggestion.id);
    }
  }
}
