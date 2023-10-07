import React, { FC } from "react";
import { Spinner as PokemonSpinner, SpinnerContainer } from "./spinner.style";
interface ISpinner { }

const Spinner: FC<ISpinner> = () => {

    return <SpinnerContainer>
        <PokemonSpinner />
    </SpinnerContainer>
}

export default Spinner