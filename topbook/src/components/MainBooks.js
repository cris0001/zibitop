import React from 'react'
import styled from 'styled-components'
import books from '../utils/constans'

const MainBooks = () => {
  return (
    <Wrapper className='section'>
      <div className='section-center flex'></div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 40vh;
  margin-bottom: 5rem;
  .flex {
  }
`

export default MainBooks
