import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() : Hero[] {
    return [
      {
          id: 1,
          name: "Jeremias serafim",
          strenght: 5,
          abilities: ["FIRE", "TIME"]
        },
        {
          id: 2,
          name: "Marmita cesar",
          strenght: 5.1,
          abilities: ["FIRE", "TIME"]
        },
        {
          id: 3,
          name: "Pareia dinho",
          strenght: 5.2,
          abilities: ["FIRE", "TIME"]
        },
        {
          id: 4,
          name: "Urso bruno",
          strenght: 5.3,
          abilities: ["FIRE", "TIME"]
        },
        {
          id: 5,
          name: "Jordao serafim",
          strenght: 5.4,
          abilities: ["FIRE", "TIME"]
        },
        {
          id: 6,
          name: "Graudo careca",
          strenght: 5.5,
          abilities: ["FIRE", "TIME"]
        }
      ];
  }
}
