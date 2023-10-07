import { styled } from "styled-components";

export const TileContainer = styled.div`
display: flex;
flex-direction: column;
width: 104px;
height: 108px; 
align-items: center;
padding: 1px 4px 2px 4px; 
border-radius: 8px;
background-color: #fff;
box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.20);
cursor: pointer;
transition: transform 0.2s ease-in-out;

&:hover {
  transform: scale(1.05); 
}
@media (max-width: 900px) {
    width: 85px;
    height: 108px; 
  }
`

 