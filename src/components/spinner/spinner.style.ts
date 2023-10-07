import styled from 'styled-components';
import { keyframes } from 'styled-components';


export const roll = keyframes`
  from {
    transform: rotate(0); 
  }
  90%,
  to {
    transform: rotate(720deg);
  }
`;

export const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  box-shadow: -2px 0 rgba(0, 0, 0, 0.1) inset;
  animation: ${roll} 1s ease-in-out infinite;
  background: linear-gradient(
    to bottom,
    #e83e35 0%,
    #e83e35 50.5%,
    #ffffff 50.51%,
    #ffffff 100%
  );

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    border: 0.75px solid #3f3f3f;
    border-radius: 50%;
    background: white;
    z-index: 1;
    box-shadow: 0 0 1.75px -0.25px #c62828 inset;
    transform: translate(-50%, -50%); 
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 20px;
    height: 0.375px;
    background: #3f3f3f;
    transform: translateY(-50%); /* Center vertically */
  }
`;

export const SpinnerContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: auto;
`