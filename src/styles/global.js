import { createGlobalStyle } from "styled-components"
import Roboto from "../fonts/Roboto-Regular.ttf"
import Futura from "../fonts/Futura-Oblique-Font.otf"
import { siteMetadata } from "../../gatsby-config"

const colors = siteMetadata.colors

const Global = createGlobalStyle`
:root {
  --light-h: ${colors.light.h};
  --light-s: ${colors.light.s};
  --light-l: ${colors.light.l};
  --light-a: ${colors.light.a};

  --dark-h: ${colors.dark.h};
  --dark-s: ${colors.dark.s};
  --dark-l: ${colors.dark.l};
  --dark-a: ${colors.dark.a};

  --primary-h: ${colors.primary.h};
  --primary-s: ${colors.primary.s};
  --primary-l: ${colors.primary.l};
  --primary-a: ${colors.primary.a};

  --secondary-h: ${colors.secondary.h};
  --secondary-s: ${colors.secondary.s};
  --secondary-l: ${colors.secondary.l};
  --secondary-a: ${colors.secondary.a};
}

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


a {
  color: black;
  text-decoration-color: gray;
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
    &:hover {
      text-decoration-color: hsla(var(--primary-h), var(--primary-s), calc(var(--primary-l)), var(--primary-a));
    }
  }
`

export default Global
