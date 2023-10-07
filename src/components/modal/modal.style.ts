import { styled } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: white;
  position: relative;
  padding: 10px;
  height: auto;
  width: 500px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 600px) {
    width: 90vw;
   
  }

`;

export const CloseModal = styled.button`
border-radius: 50%;
  padding: 6px 10px 6px 10px; 
  position: absolute;
  cursor: pointer;
  top: -15px; 
  right: -12px; 
  background-color: white;
  border: 1px solid gray; 
  &:hover {
    background-color: lightgray; 
    border-color: darkgray; 
  }
`;