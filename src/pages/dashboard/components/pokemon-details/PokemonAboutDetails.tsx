import React, { FC, memo } from "react";
import Typography from "../../../../components/typography/Typography";
import Image from "../../../../components/image/Image";
import Tile from "../../../../components/tile/Tile";
import Grid from "../../../../components/grid/Grid";
import { icons } from '../../../../assets/index'
import { PokemonDetails } from "../../../../utils/types/pokemonTypes";



const PokemonAboutDetails: FC<{ data: PokemonDetails, id: number | null }> = ({ data, id }) => (
    <>
        <Image
            src={data.sprites.front_default}
            alt={data.name}
            loading="lazy"
            height={130}
            width={130}
        />
        <Typography text="About" variant="h1" />
        <Grid className="my-4">
            <Tile className=" justify-content-center">
                <Image
                    src={icons.weight}
                    alt={data.name}
                    loading="lazy"
                    height={25}
                    width={25}
                />
                <Typography text={`${String(data.weight)} kg`} variant="h4" />
            </Tile>
            <Tile className=" justify-content-center">
                <Image
                    src={icons.straighten}
                    alt={data.name}
                    loading="lazy"
                    height={25}
                    width={25}
                />
                <Typography text={`${String(data.height)} cm`} variant="h4" />
            </Tile>
            <Tile className=" justify-content-center">
                <Image
                    src={icons.experience}
                    alt={data.name}
                    loading="lazy"
                    height={25}
                    width={25}
                />
                <Typography text={`${String(data.base_experience)} years`} variant="h4" />
            </Tile>
        </Grid>

    </>
);

export default memo(PokemonAboutDetails)