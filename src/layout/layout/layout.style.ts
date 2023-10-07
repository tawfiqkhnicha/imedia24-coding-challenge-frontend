import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #DC0A2D;
`;

export const Main = styled.main`
  margin: 0 auto;
  box-sizing: border-box;
  height: 90vh;
  background-color: #FFF;
  width: 550px;
  border-radius: 10px; 
  padding: 10px;
  overflow: scroll;
  @media (max-width: 600px) {
    width: 99vw;
    height: 97vh;
    border-radius: 10px 10px 10px 10px; 
  }
`

export const Header = styled.header`
  color: white;
  padding: 10px;
`;

export const Footer = styled.footer`
  color: white;
  padding: 10px;
`;