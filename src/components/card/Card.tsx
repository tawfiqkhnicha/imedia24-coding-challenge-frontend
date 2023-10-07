import React, { FC, ReactNode } from "react";
import { CardContainer, CardHeader as Header, CardBody as Body } from "./card.style";

interface ICardProps {
  children: ReactNode;
}

interface ICardHeaderProps {
  children: ReactNode;
}

interface ICardBodyProps {
  children: ReactNode;
}

export const Card: FC<ICardProps> = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export const CardHeader: FC<ICardHeaderProps> = ({ children }) => {
    return <Header>{children}</Header>;

};

export const CardBody: FC<ICardBodyProps> = ({ children }) => {
    return <Body>{children}</Body>;

};

