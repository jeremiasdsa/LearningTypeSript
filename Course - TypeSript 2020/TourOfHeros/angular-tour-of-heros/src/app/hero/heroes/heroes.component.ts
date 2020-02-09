import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes1: Hero[];
  selectedHero: Hero;

  constructor(private service: HeroService) { 
    this.heroes1 = this.service.getHeroes();
  }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }
}
