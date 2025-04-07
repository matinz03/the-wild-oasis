import styled, { css } from 'styled-components'

const H1 = styled.h1`
  ${props =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${props =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
        ${props =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
  
  color: rgba(0, 0, 0, 0.98);
  /* background-color: #e4ce0a3c; */
  /* background-color: #ecec00; */
`
export default H1
