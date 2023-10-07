import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PokemonState } from "../../redux/pokemon/types";
import { fetchPokemonStartAction } from "../../redux/pokemon/pokemon-overview/pokemonSlice";



const useInfiniteScroll = (observerTargetRef: React.MutableRefObject<IntersectionObserver | null>) => {


  const { hasMore, isLoading, offset, limit }: PokemonState = useSelector((state: any) => state.pokemon)
  const dispatch = useDispatch();

  const lastPokemonElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (node && !isLoading) {
        if (observerTargetRef.current) {
          observerTargetRef.current.disconnect();
        }
        observerTargetRef.current = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting && !isLoading && hasMore) {
              const newOffset = offset + limit;
              dispatch(fetchPokemonStartAction({ offset: newOffset, limit }));
            }
          },
          { threshold: 1 }
        );
        observerTargetRef.current.observe(node);
      }
    },
    [dispatch, observerTargetRef, isLoading, hasMore, limit, offset]
  );



  return {lastPokemonElementRef}
}


export default useInfiniteScroll;
