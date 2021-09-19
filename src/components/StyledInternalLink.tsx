import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledInternalLink = ({ children, color, to }) => {
  return (
    <Style color={color} to={to}>
      {children}
    </Style>
  )
}
const Style = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: ${props => props.color};
`

export default StyledInternalLink
