import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonState } from "../types";
import { Pokemon } from "../../../utils/types/pokemonTypes";


const initialState: PokemonState = {
    data: [],
    offset: 0,
    limit: 50,
    isLoading: true,
    isLoaded: false,
    errors: null,
    hasMore: true
};

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: initialState,
    reducers: {
        fetchPokemonStartAction: (state, action: PayloadAction<{ offset: number, limit: number }>) => {
            state.isLoading = true;
            state.isLoaded = false;
            state.errors = null;
            state.offset = action.payload.offset;
        },
        getPokemonSuccessAction: (state: PokemonState, action: PayloadAction<{data: Array<Pokemon>, count: number}>) => {
            state.isLoading = false;
            state.isLoaded = true;
            state.data = [...state.data, ...action.payload.data];
            state.hasMore = state.data.length < action.payload.count
        },
        getPokemonErrorAction: (state: PokemonState, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.isLoaded = true;
            state.errors = action.payload;
            
        },
    },
});

export const {
    fetchPokemonStartAction,
    getPokemonSuccessAction,
    getPokemonErrorAction,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
