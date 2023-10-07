import React, { FC } from "react";
import { ProgressBar as Bar } from "react-bootstrap";
import Typography from "../typography/Typography";
import { ProgressBarContainer } from "./progressBar.style";
interface IProgressBar {
    now: number,
    title: string,
    variant: string;
}

const ProgressBar: FC<IProgressBar> = ({ now, title, variant }) => {
    return (
        <ProgressBarContainer>
            <Typography text={title} variant="h3"  className="w-25 text-start"/>
            <Bar now={now} label={`${now}%`} className="w-75" variant={variant}/>
        </ProgressBarContainer>
    )
}

export default ProgressBar