import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;500&family=Raleway:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,700&display=swap');
body {
  margin: 0;
}
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;