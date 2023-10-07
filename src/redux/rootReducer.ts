
import pokemonReducer from "./pokemon/pokemon-overview/pokemonSlice";
import pokemonDetailsReducer from "./pokemon/pokemon-details/pokemonDetailsSlice";


const rootReducers = {
    pokemon: pokemonReducer,
    pokemonDetails: pokemonDetailsReducer
};

export default rootReducers;