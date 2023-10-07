import React, { FC, ReactNode, useEffect } from "react";
import { PageContainer } from "./page.styles";

interface IPageProps {
    title?: string;
    children: ReactNode;
    className?: string;
    alignItems?: string
}

const Page: FC<IPageProps> = ({ title, children, className, alignItems, ...props }) => {

    useEffect(() => {
        // @ts-ignore
        document.getElementsByTagName('TITLE')[0].text = `${title ? `${title} | ` : ''}${process.env.REACT_APP_SITE_NAME
            }`;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <PageContainer className={className} {...props}>
                {children}
        </PageContainer>
    )
}



export default Page