import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div className='logo'>
        <p>ul. Warneńczyka 3</p>
        <p>Rzeszów 35-612</p>
      </div>
      <div className='kontakt'>
        <p>tel.: (17) 856 39 99 </p>
        <p>fax: (17) 856 39 98</p>
      </div>
      <div className='logo'>
        <h3> </h3>
        <p>ul. Bukowińska 8/511</p>
        <p>Warszawa 02-703</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  position: relative;
  margin-top: 4rem;
  // bottom: -27px;
  bottom: 0;
  width: 100%;
  padding: 2rem 0;
  height: 14rem;
  background: var(--main);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  line-height: 2;
  @media (min-width: 777px) {
    flex-direction: row;
    height: 8rem;
  }
`

export default Footer
