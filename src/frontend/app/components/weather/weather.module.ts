import { NgModule } from "@angular/core";
import { WeatherComponent } from "./weather.component";
import { OpenWeatherService } from "./open-weather.service";
import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

// @NgModule decorator with its metadata
@NgModule({
  declarations: [WeatherComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  providers: [OpenWeatherService],
  exports: [WeatherComponent],
})
export class WeatherModule {}
