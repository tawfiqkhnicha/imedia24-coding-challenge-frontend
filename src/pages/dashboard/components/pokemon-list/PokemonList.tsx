import React, { FC, useRef } from "react";
import useGetPokemonList from "../../../../hooks/pokemon/useGetPokemonList";
import { Pokemon } from "../../../../utils/types/pokemonTypes";
import useInfiniteScroll from "../../../../hooks/pokemon/useInfiniteScroll";
import useCleanComponent from "../../../../hooks/pokemon/useCleanComponent";
import Spinner from "../../../../components/spinner/Spinner";
import Typography from "../../../../components/typography/Typography";
import Image from "../../../../components/image/Image";
import Tile from "../../../../components/tile/Tile";
import Grid from "../../../../components/grid/Grid";

interface IPokemonList {

    showDetails : (id: number) => void
 }

const PokemonList: FC<IPokemonList> = ({showDetails}) => {

    const observerTargetRef = useRef<IntersectionObserver | null>(null);

    const { data, isLoading } = useGetPokemonList();
    const { lastPokemonElementRef } = useInfiniteScroll(observerTargetRef)
    useCleanComponent(observerTargetRef)

    return (
        <>
            {data ?  
            <Grid>
                {data?.map((item: Pokemon, index: number) => (
                    <Tile onClick={()=> showDetails(item.id)}
                        key={index}
                        ref={index === data.length - 1 ? lastPokemonElementRef : null}>
                        <Typography text={String(item.id)} style={{ textAlign: "right", width: "100%"}}  />
                        <Image src={item.sprites.front_default} alt={item.name} width={72} height={72} loading="lazy" />
                        <Typography text={item.name} />
                    </Tile>
                ))
                }
            </Grid> : <Typography text="No data to display" variant="h2"/>}
            {isLoading && <Spinner />}
          
        </>
    );
};

export default PokemonList;
