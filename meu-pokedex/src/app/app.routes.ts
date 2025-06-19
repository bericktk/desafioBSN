import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', // Rota principal
    redirectTo: 'pokemons', // Redireciona para a nossa lista
    pathMatch: 'full',
  },
  {
    path: 'pokemon/:name', // O ':' indica que 'name' é um parâmetro dinâmico
    loadComponent: () =>
      import('./pages/pokemon-detail/pokemon-detail.page').then(
        (m) => m.PokemonDetailPage
      ),
  },
  {
    path: 'pokemons', // O caminho na URL (ex: /pokemons)
    loadComponent: () =>
      import('./pages/pokemon-list/pokemon-list.page').then(
        (m) => m.PokemonListPage
      ),
  },
  {
    path: 'pokemon-detail',
    loadComponent: () =>
      import('./pages/pokemon-detail/pokemon-detail.page').then(
        (m) => m.PokemonDetailPage
      ),
  },
];
