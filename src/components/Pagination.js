import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FaAngleLeft } from "@react-icons/all-files/fa/FaAngleLeft"
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight"

const Pagination = ({ prefix, currentPage, hasNextPage, hasPreviousPage }) => {
  const arrowBuilder = ({ pageCheck, component, to }) => {
    if (pageCheck == true) {
      const link = currentPage == 2 ? `/${prefix}/` : `/${prefix}?page=${to}`
      return (
        <h1 className="hovered">
          <Link to={link}>{component}</Link>
        </h1>
      )
    } else {
      return <h1 className="greyed-out">{component}</h1>
    }
  }

  const rightArrow = arrowBuilder({
    pageCheck: hasNextPage,
    component: <FaAngleRight />,
    to: currentPage + 1,
  })
  const leftArrow = arrowBuilder({
    pageCheck: hasPreviousPage,
    component: <FaAngleLeft />,
    to: currentPage - 1,
  })

  return (
    <Style>
      {leftArrow}
      {rightArrow}
    </Style>
  )
}

const Style = styled.div`
  display: flex;
  justify-content: space-between;

  .greyed-out {
    color: lightgray;
  }

  a {
    transition-property: all;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
    &:hover {
      color: hsla(
        var(--primary-h),
        var(--primary-s),
        var(--primary-l),
        var(--primary-a)
      );
    }
  }
`

export default Pagination
