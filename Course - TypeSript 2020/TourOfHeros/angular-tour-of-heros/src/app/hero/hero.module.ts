
// import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroTopComponent } from './hero-top/hero-top.component';

import { HeroService } from './hero.service';



@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    HeroTopComponent
  ],
  imports: [
    CommonModule, // contem diretivas e partes mais comuns do angular
    FormsModule // se tiver usando forms tbm precisa importar
  ],
  exports:[
    HeroesComponent
    // HeroDetailComponent exportanto aqui, deixa visível para quem importar o Modulo
  ],
  providers:[
    HeroService
  ]
})
export class HeroModule { }
