import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  ${props => props.flip && 'transform: rotate(180deg);'}
  path {
    fill: ${props => (props.color ? props.theme.colors.darkgrey : '#fff')};
  }
`

const ArrowBack = props => {
  return (
    <Svg
      color={props.color}
      flip={props.flip}
      fill="none"
      height="24"
      viewBox="0 0 14 24"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="m13.2122.502103c.6695.669467.6695 1.754897 0 2.424367l-9.07355 9.07353 9.07355 9.0735c.6695.6695.6695 1.7549 0 2.4244s-1.7549.6695-2.4244 0l-10.285697-10.2857c-.669471-.6695-.669471-1.7549 0-2.4244l10.285697-10.285697c.6695-.669471 1.7549-.669471 2.4244 0z"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default ArrowBack
