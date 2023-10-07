import { AxiosResponse } from "axios";
import { put, takeLatest, call, all } from "redux-saga/effects";
import {
  fetchPokemonStartAction,
  getPokemonErrorAction,
  getPokemonSuccessAction,
} from "./pokemonSlice";
import { Pokemon, PokemonApiResponse } from "../../../utils/types/pokemonTypes";
import { getAllPokemon, getPokemonDetails } from "../../../api/pokemonApi";

function* fetchPokemonOverview(pokemonURL: string) {
  try {
    const response: AxiosResponse<Pokemon> = yield call(
      getPokemonDetails,
      pokemonURL
    );

    const { id, name, sprites } = response.data;

    return {
      id,
      name,
      sprites,
    };
  } catch (error) {
    throw error;
  }
}

export function* fetchPokemonList(action: any) {
  try {
    const { offset, limit } = action.payload;

    const response: AxiosResponse<PokemonApiResponse> = yield call(
      getAllPokemon,
      offset,
      limit
    );

    const { results, count } = response.data || {};

    const pokemonOverview: Array<Pokemon> = yield all(
      results.map((pokemon: { name: string; url: string }) =>
        call(fetchPokemonOverview, pokemon.url)
      )
    );
    yield put(getPokemonSuccessAction({ data: pokemonOverview, count }));
  } catch (error) {
    yield put(
      getPokemonErrorAction(
        error instanceof Error ? error.message : "An error occurred"
      )
    );
  }
}

export function* pokemonListSaga() {
  yield takeLatest(fetchPokemonStartAction.type, fetchPokemonList);
}
