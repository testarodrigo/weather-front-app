import { Location } from "./location";

export interface Suggestion {
  id: string;
  name: string;
  highlight?: string;
  location?: Location;
}
