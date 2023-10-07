import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PokemonState } from "../../redux/pokemon/types";
import { fetchPokemonStartAction } from "../../redux/pokemon/pokemon-overview/pokemonSlice";


const useGetPokemonList = () =>{


    const dispatch = useDispatch();

    const {data, isLoading, errors, isLoaded, offset, limit} : PokemonState = useSelector((state:any) => state.pokemon)

    useEffect(()=>{
        dispatch(fetchPokemonStartAction({ offset: offset, limit: limit}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    

    return {data, isLoading, errors, isLoaded}
}

export default useGetPokemonList