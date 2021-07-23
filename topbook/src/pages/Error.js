import React from 'react'
import err from '../images/err.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Error = () => {
  return (
    <Wrapper className='section'>
      <div className='section-center'>
        <img src={err} alt='' />
        <h1>xd</h1>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default Error
