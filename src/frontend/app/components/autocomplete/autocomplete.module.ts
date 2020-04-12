import { NgModule } from "@angular/core";
import { AutocompleteService } from "./autocomplete.service";
import { AutocompleteComponent } from "./autocomplete.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatOptionModule } from "@angular/material/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { SanitizeHtmlPipe } from "../../pipes/sanitize-html.pipe";

// @NgModule decorator with its metadata
@NgModule({
  declarations: [AutocompleteComponent, SanitizeHtmlPipe],
  imports: [
    CommonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AutocompleteService],
  exports: [AutocompleteComponent],
})
export class AutocompleteModule {}
