import { styled } from "styled-components";

interface pageStyleProps {
  alignItems?: string;
}
export const PageContainer = styled.section<pageStyleProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    `