declare module "countries-cities" {
  export function getCities(country: string): string[];
  export function getCitiesByCountry(country: string): string[];
  export function getCountry(city: string): string;
}
