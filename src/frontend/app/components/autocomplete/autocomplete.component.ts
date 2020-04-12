import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { Suggestion } from "../model/suggestion";
import { AutocompleteService } from "./autocomplete.service";
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from "rxjs/operators";

@Component({
  selector: "autocomplete-component",
  templateUrl: "./autocomplete.component.html",
  styleUrls: ["./autocomplete.component.scss"],
})
export class AutocompleteComponent implements OnInit {
  form = new FormControl();
  suggestions: Observable<Suggestion[]>;

  @ViewChild("destinationInput") destinationInput: ElementRef;

  @Output()
  valueChange: EventEmitter<Suggestion> = new EventEmitter<Suggestion>();

  constructor(private autocompleteService: AutocompleteService) {}

  ngOnInit() {
    this.suggestions = this.form.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      filter((item) => typeof item === "string" && item.length > 2),
      switchMap((hint) => {
        return this.autocompleteService.getCities(hint);
      })
    );
  }

  /**
   *
   * @param event the option selected from autocomplete input
   * @emits valueChange with the object value from autocomplete
   */
  selectedDestination(event: any): void {
    if (event.option.value.id !== "EMPTY") {
      this.destinationInput.nativeElement.value = event.option.value.name;
      this.valueChange.emit(event.option.value);
    } else {
      this.destinationInput.nativeElement.value = null;
    }
  }
}
