import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // Para ler o parâmetro da URL
import { PokemonService } from '../../services/pokemon.service';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonChip,
  IonLabel,
  IonTitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg,
    IonChip,
    IonLabel,
    IonTitle,
  ],
})
export class PokemonDetailPage implements OnInit {
  pokemon: any = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const pokemonName = this.route.snapshot.paramMap.get('name'); // Pega o 'name' da URL
    if (pokemonName) {
      this.pokemonService
        .getPokemonDetails(pokemonName)
        .subscribe((details) => {
          this.pokemon = details;
        });
    }
  }
}
