import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AutocompleteModule } from "./components/autocomplete/autocomplete.module";
import { CommonModule } from "@angular/common";
import { WeatherModule } from "./components/weather/weather.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AutocompleteModule,
    WeatherModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
