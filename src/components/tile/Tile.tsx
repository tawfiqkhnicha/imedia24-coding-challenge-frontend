import React, { forwardRef, HTMLAttributes, memo, ReactNode } from "react";
import { TileContainer } from "./tile.style";

interface ITileProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[];
  className?: string;
  style?: React.CSSProperties;
}

const Tile = forwardRef<HTMLDivElement, ITileProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <TileContainer data-testid="tile-component" ref={ref} className={className} {...props}>
        {children}
      </TileContainer>
    );
  }
);



export default memo(Tile);
