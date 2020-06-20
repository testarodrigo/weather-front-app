import { MarkerModalComponent } from "./marker-modal.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherModule } from "../weather/weather.module";

@NgModule({
  declarations: [MarkerModalComponent],
  imports: [CommonModule, WeatherModule],
})
export class MarkerModalModule {}
