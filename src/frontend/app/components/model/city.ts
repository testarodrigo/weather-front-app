import { Location } from "./location";

export interface City {
  id: string;
  name: string;
  state: string;
  country: string;
  coord: Location;
}
