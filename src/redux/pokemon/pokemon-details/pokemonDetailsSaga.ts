import { AxiosResponse } from "axios";
import { put, takeLatest, call } from "redux-saga/effects";

import { PokemonDetails } from "../../../utils/types/pokemonTypes";
import { getPokemonById } from "../../../api/pokemonApi";
import { fetchPokemonDetailsStartAction, getPokemonDetailsErrorAction, getPokemonDetailsSuccessAction } from "./pokemonDetailsSlice";

export function* fetchPokemonById(action: any) {
  try {
    const { id } = action.payload;

    const response: AxiosResponse<PokemonDetails> = yield call(
      getPokemonById,
      id
    );

    const { name, abilities, stats, sprites, weight, height, base_experience } = response.data;

    yield put(
      getPokemonDetailsSuccessAction({
        data: { name, abilities, stats, sprites, height, weight, base_experience },
      })
    );
  } catch (error) {
    yield put(
      getPokemonDetailsErrorAction(
        error instanceof Error ? error.message : "An error occurred"
      )
    );
  }
}

export function* pokemonDetailsSaga() {
  yield takeLatest(fetchPokemonDetailsStartAction.type, fetchPokemonById);
}
