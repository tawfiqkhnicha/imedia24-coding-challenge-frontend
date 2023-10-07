 export interface Pokemon  {
    name: string;
    id: number;
    sprites: {
      front_default: string; 
    };  
}
export interface PokemonApiResponse {
    count: number;
    next: string;
    previous: string;
    results: Array<{name: string, url: string}>
};

export interface PokemonDetails {
  name: string;
  abilities: Array<PokemonAbility>;
  stats: Array<PokemonStat>;
  weight: number;
  height: number;
  base_experience: number,
  sprites: {
    front_default: string; 
  };  
}

interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}



export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

