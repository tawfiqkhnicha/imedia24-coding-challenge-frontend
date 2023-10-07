import { FC, memo } from "react";
import Modal from "../../../../components/modal/Modal";
import useGetPokemonDetails from "../../../../hooks/pokemon/useGetPokemonDetails";
import { Spinner } from "../../../../components/spinner/spinner.style";
import Typography from "../../../../components/typography/Typography";
import { Card, CardBody, CardHeader } from "../../../../components/card/Card";
import PokemonStatsDetais from "./PokemonStatsDetais";
import PokemonAboutDetails from "./PokemonAboutDetails";

interface IPokemonDetails {
    modalData: { isOpen: boolean; id: number | null };
    handleClose: () => void;
}


const PokemoneDetails: FC<IPokemonDetails> = ({ modalData, handleClose }) => {
    const { isOpen, id } = modalData;
    const { data, isLoading } = useGetPokemonDetails(id);

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            {data ? (
                    <Card>
                        <CardHeader>
                            <Typography text={data.name} variant="h3" />
                            <Typography text={String(id)} variant="h3" />
                        </CardHeader>
                        <CardBody>
                            <PokemonAboutDetails data={data} id={id} />
                            <PokemonStatsDetais stats={data.stats} />
                        </CardBody>
                    </Card>
            ) : (
                <Typography text="No data to display" variant="h2" />
            )}

            {isLoading && <Spinner />}
        </Modal>
    );
};

export default memo(PokemoneDetails);
