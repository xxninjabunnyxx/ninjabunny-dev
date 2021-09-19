import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Social from "./Social"
import { v4 as uuidv4 } from "uuid"
import banner from "../content/images/banner.jpg"
import StyledInternalLink from "../styles/StyledInternalLink"

const Navbar: React.FC = () => {
  const query = useStaticQuery(graphql`
    query NavbarQuery {
      site {
        siteMetadata {
          title
          socials {
            icon
            link
          }
        }
      }
    }
  `)

  const socials = query.site.siteMetadata.socials.map(s => (
    <Social icon={s.icon} link={s.link} key={uuidv4()} />
  ))

  return (
    <Style banner={banner}>
      <div className="title">
        <StyledInternalLink to="/" color="#fff">
          {query.site.siteMetadata.title}
        </StyledInternalLink>
      </div>
      <div className="socials">{socials}</div>
    </Style>
  )
}

const Style = styled.nav<{ banner: string }>`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  column-gap: 0.5rem;
  color: black;
  font-family: "Futura";
  font-weight: normal;
  font-style: normal;
  background: url(${props => props.banner}), rgba(0, 0, 0, 0.3);
  background-blend-mode: darken;
  background-position: center;
  background-size: cover;

  .title {
    display: flex;
    justify-content: center;
    padding-top: 0.75rem;
    font-size: 3.75rem;
    line-height: 1;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;

    &:hover {
      transform: scale(0.95);
    }
  }

  .socials {
    display: flex;
    justify-content: center;
  }
`

export default Navbar
