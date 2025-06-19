import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  // Método para buscar a lista de pokémons (primeira geração)
  getPokemonList(limit: number = 151): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon?limit=${limit}`);
  }

  // Método para buscar os detalhes de um pokémon específico pelo nome
  getPokemonDetails(name: string) {
    return this.http.get(`${this.baseUrl}/pokemon/${name}`);
  }
}
