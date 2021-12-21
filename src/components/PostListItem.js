import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const PostListItem = ({ title, slug, date }) => {
  return (
    <Style>
      <h1 className="title">
        <Link to={`/${slug}`}>{title}</Link>
      </h1>
      <h3 className="title">{date}</h3>
    </Style>
  )
}

const Style = styled.div`
  .title {
    font-family: "Futura";
    font-weight: normal;
    font-style: normal;
  }
`
export default PostListItem
