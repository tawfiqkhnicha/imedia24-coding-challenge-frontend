import React, { FC } from "react";
import Content from "../content/Content";
import { Header, Wrapper, Main } from "./layout.style";

 
const Layout: FC = () => (
    <Wrapper>
         <Header>
            
        </Header>
        <Main>
            <Content />
        </Main>
    </Wrapper>
)

export default Layout;