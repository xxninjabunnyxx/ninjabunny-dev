import React from "react"
import { FaSkull } from "@react-icons/all-files/fa/FaSkull"
import { FaGithubAlt } from "@react-icons/all-files/fa/FaGithubAlt"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import styled from "styled-components"

const Social = ({ icon, link, id }) => {
  let socialIcon

  switch (icon) {
    case `github`:
      socialIcon = <FaGithubAlt />
      break
    case `instagram`:
      socialIcon = <FaInstagram />
      break
    case `twitter`:
      socialIcon = <FaTwitter />
      break
    default:
      socialIcon = <FaSkull />
  }

  return (
    <Style color={`#000`} href={link} target="_blank" rel="noreferrer" key={id}>
      {socialIcon}
    </Style>
  )
}

const Style = styled.a`
  text-decoration: none;
  color: hsla(
    var(--secondary-h),
    var(--secondary-s),
    var(--secondary-l),
    var(--secondary-a)
  );
  font-size: 1.875rem;
  line-height: 2.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  align-self: center;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  &:hover {
    transform: scale(1.25);
  }
`

export default Social
