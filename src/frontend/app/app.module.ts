import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AutocompleteModule } from "./components/autocomplete/autocomplete.module";
import { CommonModule } from "@angular/common";
import { WeatherModule } from "./components/weather/weather.module";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { MarkerModalComponent } from "./components/marker-modal/marker-modal.component";
import { MarkerModalModule } from "./components/marker-modal/marker-modal.module";

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
    MarkerModalModule,
    LeafletModule.forRoot(),
    LeafletModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MarkerModalComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const PopupElement = createCustomElement(MarkerModalComponent, {
      injector,
    });
    // Register the custom element with the browser.
    customElements.define("marker-modal-element", PopupElement);
  }
}
