import { FC, memo } from "react";
import Typography from "../../../../components/typography/Typography";
import ProgressBar from "../../../../components/progress-bar/ProgressBar";
import { findClosestValue } from "../../../../utils/helpers/helpers";
import { progressBarVariant } from "../../constants/contants";
import { PokemonStat } from "../../../../utils/types/pokemonTypes";

const PokemonStats: FC<{ stats: Array<PokemonStat> }> = ({ stats }) => (
    <>
        <Typography text="Base stats" variant="h1" className="mb-4" />
        {stats.map((item: PokemonStat) => (
            <ProgressBar
                key={item.stat.name}
                now={item.base_stat}
                title={item.stat.name}
                variant={progressBarVariant[findClosestValue(Object.keys(progressBarVariant).map(Number), item.base_stat)]}
            />
        ))}
    </>
);

export default memo(PokemonStats)
