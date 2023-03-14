import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonService } from './pokemon.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PokemonCardComponent, PokemonListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
