import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PokemonDetailsState } from "../../redux/pokemon/types";
import { fetchPokemonDetailsStartAction } from "../../redux/pokemon/pokemon-details/pokemonDetailsSlice";


const useGetPokemonDetails = (id: number | null) =>{


    const dispatch = useDispatch();

    const {data, isLoading, errors, isLoaded } : PokemonDetailsState = useSelector((state:any) => state.pokemonDetails)

    useEffect(()=>{
        dispatch(fetchPokemonDetailsStartAction({ id}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    

    return {data, isLoading, errors, isLoaded}
}

export default useGetPokemonDetails