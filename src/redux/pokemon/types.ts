import { Pokemon, PokemonDetails } from "../../utils/types/pokemonTypes";

export interface PokemonState {
  data: Array<Pokemon>;
  isLoading: boolean;
  offset: number;
  limit: number;
  isLoaded: boolean;
  errors: string | null;
  hasMore: boolean;
}

export interface PokemonDetailsState {
  id: number | null;
  data: PokemonDetails | null;
  isLoading: boolean;
  isLoaded: boolean;
  errors: string | null;
}
