export interface Country {
  id: number;
  image: string;
  name: string;
  capital: string;
  flag: string;
}

export interface Continent {
  countries: Country[];
}
