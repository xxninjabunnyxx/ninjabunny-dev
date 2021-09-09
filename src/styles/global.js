import { createGlobalStyle } from 'styled-components';
import Roboto from "../fonts/Roboto-Regular.ttf"
import Futura from "../fonts/Futura-Oblique-Font.otf"
const Global = createGlobalStyle`
@font-face {
    font-family: "Roboto";
    src: url(${Roboto});
}

@font-face {
    font-family: "Futura";
    src: url(${Futura});
}

  body {
    margin: 0;
    padding: 0;
    background: #f3f4f6;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 1.125rem;
  }
`;
 
export default Global;