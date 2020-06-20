import { Component, OnInit, Input } from "@angular/core";
import { Weather } from "../model/weather";
import { Observable } from "rxjs";

@Component({
  selector: "app-marker-modal",
  templateUrl: "./marker-modal.component.html",
  styleUrls: ["./marker-modal.component.html"],
})
export class MarkerModalComponent implements OnInit {
  @Input() weather$: Observable<Weather>;

  constructor() {}

  ngOnInit() {}
}
