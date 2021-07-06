import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <h3>TopBook</h3>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  width: 100%;
  height: 8rem;
  background: var(--main);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    color: white;
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 777px) {
    flex-direction: row;
  }
`

export default Footer
