import { type Type } from "./Type";

export interface Pokemon {
  id: number;
  name: string;
  picture: string;
  types: Type[];
}