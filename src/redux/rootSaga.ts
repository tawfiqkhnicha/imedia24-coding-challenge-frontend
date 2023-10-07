import { all, fork } from "redux-saga/effects";
import { pokemonDetailsSaga } from "./pokemon/pokemon-details/pokemonDetailsSaga";
import { pokemonListSaga } from "./pokemon/pokemon-overview/pokemonSaga";

export default function* rootSaga() {
    yield all([
        fork(pokemonListSaga),
        fork(pokemonDetailsSaga)
    ])
  }