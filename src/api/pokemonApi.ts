import { API_POKE } from "../http/endpoints";
import { http } from "../http/http";

export const getAllPokemon   = (offset: number, limit: number)=> http.get(`${API_POKE.GET_POKE}?limit=${limit}&offset=${offset}`)

export const getPokemonDetails   = (url: string)=> http.get(url)

export const getPokemonById = (id: number) => http.get(`${API_POKE.GET_POKE}/${id}/`)