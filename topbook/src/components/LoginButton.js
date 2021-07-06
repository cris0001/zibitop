import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LoginButton = () => {
  return (
    <Wrapper className='login-btn'>
      <Link to='/login'>
        {' '}
        <h2>zaloguj</h2>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #0a1d37;
  color: white;
  border-radius: 14px;
  align-items: center;
  width: 8.75rem;
  height: 2.75rem;
  margin-left: 50px;
  h2 {
    font-size: 1.567rem;
    font-weight: 300;
  }
`

export default LoginButton
