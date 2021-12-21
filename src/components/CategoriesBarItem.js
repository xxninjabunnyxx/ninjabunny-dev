import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const CategoriesBarItem = ({ path, name }) => {
  return (
    <Style>
      <Link to={path}>{name}</Link>
    </Style>
  )
}

const Style = styled.h2`
  font-family: "Futura";
  font-weight: normal;
  font-style: normal;
  margin: 0.5rem;

  a {
    text-decoration-thickness: 15%;
    text-decoration-color: gray;
    transition-property: all;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
    &:hover {
      text-decoration-color: hsla(
        var(--primary-h),
        var(--primary-s),
        calc(var(--primary-l)),
        var(--primary-a)
      );
    }
  }
`

export default CategoriesBarItem
