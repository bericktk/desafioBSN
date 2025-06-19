import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

import {
  IonContent,
  IonImg,
  IonSearchbar,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonContent,
    IonImg,
    IonSearchbar,
    IonButton,
  ],
})
export class PokemonListPage implements OnInit {
  currentPokemon: Pokemon | null = null;
  currentPokemonId: number = 1;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemon(this.currentPokemonId);
  }

  loadPokemon(idOrName: number | string) {
    this.pokemonService
      .getPokemonDetails(idOrName.toString().toLowerCase())
      .subscribe({
        next: (data: Pokemon) => {
          this.currentPokemon = data;
          this.currentPokemonId = data.id; // Atualiza o ID atual
        },
        error: (err) => {
          console.error('Pokémon não encontrado!', err);
          this.loadPokemon(1);
        },
      });
  }

  nextPokemon() {
    this.currentPokemonId++;
    this.loadPokemon(this.currentPokemonId);
  }

  prevPokemon() {
    if (this.currentPokemonId > 1) {
      this.currentPokemonId--;
      this.loadPokemon(this.currentPokemonId);
    }
  }

  searchPokemon(event: any) {
    const searchTerm = event.target.value;
    if (searchTerm) {
      this.loadPokemon(searchTerm);
    }
  }
}
