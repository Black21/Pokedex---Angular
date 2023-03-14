import { Component } from '@angular/core';
import { Pokemon } from 'src/model/_model/Pokemon';
import { Type } from 'src/model/_model/Type.enum';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  constructor(public pokemonService: PokemonService) {}
}
