import React, { FC, ReactNode, memo } from "react";
import { GridContainer } from "./Grid.style";

interface IGridProps {
    children: ReactNode;
    className?: string
     
}

 const Grid: FC<IGridProps> = ({ className, children, ...props }) => {
    return (
        <GridContainer className={className} {...props}>
            {children}
        </GridContainer>
    );
};

export default memo(Grid);
