import React, { FC } from "react";
import Page from "../../layout/page/Page";
import PokemonDetails from "./components/pokemon-details/PokemonDetails";
import usePokemonModal from "../../hooks/pokemon/usePokemonModal";
import PokemonList from "./components/pokemon-list/PokemonList";
const Dashboard: FC = () => {

    const { modalData, showDetails, closeModal } = usePokemonModal();

    return (
        <Page title="Dashboard">
            <PokemonList showDetails={showDetails} />
            {modalData.isOpen && <PokemonDetails modalData={modalData} handleClose={closeModal} />}
        </Page>
    )
}
export default Dashboard