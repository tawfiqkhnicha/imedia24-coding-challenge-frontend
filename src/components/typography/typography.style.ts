import styled from 'styled-components';

interface IParagraphStyledProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4';
  }
export const Paragraph = styled.p<IParagraphStyledProps>`
  color: #1D1D1D;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin: 0;

  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return `
          font-size: 24px;
          font-weight: 600;
        `;
      case 'h2':
        return `
          font-size: 20px;
          font-weight: 500;
        `;
      case 'h3':
        return `
          font-size: 16px;
          font-weight: 400;
        `;
      case 'h4':
        return `
          font-size: 14px;
          font-weight: 400;
        `;
      default:
        return ''; 
    }
  }}
`;
