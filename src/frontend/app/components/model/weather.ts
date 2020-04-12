import { Location } from "./location";
import { Main } from "./main";
import { Wind } from "./wind";
import { Cloud } from "./cloud";

export interface Weather {
  id: string;
  name: string;
  coord: Location;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  dt: number;
  clouds: Cloud;
}
