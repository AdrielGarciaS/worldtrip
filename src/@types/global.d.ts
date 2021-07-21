interface City {
  name: string;
  country: string;
  flagImg: string;
  photo: string;
}

interface Continent {
  id: number;
  bgImage: string;
  coverImage: string;
  title: string;
  description?: string;
  longDescription?: string;
  slug: string;
  countriesQuantity: number;
  languagesQuantity: number;
  citiesQuantity: number;
  cities: City[];
}
