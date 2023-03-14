import { Type } from './Type.enum';

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
}
