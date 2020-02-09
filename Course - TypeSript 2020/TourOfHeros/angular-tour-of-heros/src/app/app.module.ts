
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeroesComponent } from './hero/heroes/heroes.component';
// import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { HeroModule } from './hero/hero.module';

@NgModule({
  declarations: [
    AppComponent
    // HeroesComponent,
    // HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeroModule // criano novo modulo e importado aqui
  ],
  providers: [], //autenticador de rotas
  bootstrap: [AppComponent] // componente instanciado no inicio da aplicacao
})
export class AppModule { }
