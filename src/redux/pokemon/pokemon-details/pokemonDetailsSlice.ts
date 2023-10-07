import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonDetails } from "../../../utils/types/pokemonTypes";
import { PokemonDetailsState } from "../types";


const initialState: PokemonDetailsState = {
    id: null,
    data: null,
    isLoading: true,
    isLoaded: false,
    errors: null,
};

const pokemonDetailsSlice = createSlice({
    name: "pokemonDetails",
    initialState: initialState,
    reducers: {
        fetchPokemonDetailsStartAction: (state, action: PayloadAction<{ id: number | null}>) => {
            state.isLoading = true;
            state.isLoaded = false;
            state.errors = null;
            state.id = action.payload.id;
        },
        getPokemonDetailsSuccessAction: (state: PokemonDetailsState, action: PayloadAction<{data: PokemonDetails}>) => {
            state.isLoading = false;
            state.isLoaded = true;
            state.data = action.payload.data;
        },
        getPokemonDetailsErrorAction: (state: PokemonDetailsState, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.isLoaded = true;
            state.errors = action.payload;
        },
    },
});

export const {
    fetchPokemonDetailsStartAction,
    getPokemonDetailsSuccessAction,
    getPokemonDetailsErrorAction
} = pokemonDetailsSlice.actions;

export default pokemonDetailsSlice.reducer;
