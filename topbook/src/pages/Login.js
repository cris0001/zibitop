import React from 'react'
import styled from 'styled-components'
import bcg from '../images/bcg.jpg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Wrapper>
      <div className='content'>
        <div className='card'>
          <div className='form'>
            <h1>Logowanie</h1>
            <div className='input'>
              <p>nazwa użytkownika:</p>
              <input type='text' />
            </div>
            <div className='input'>
              <p>hasło:</p>
              <input type='password' />
            </div>
            <button>Zaloguj</button>

            <h3>Nie masz konta? załóż je tutaj!</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-image: url(${bcg});
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  button {
    width: 100%;
    background: #0a1d37;
    border-radius: 10px;
    border: none;
    padding: 1rem 0;
    color: white;
    font-size: 1.5rem;
    margin-top: 2.365rem;
    margin-bottom: 3rem;
  }

  h3 {
    margin-bottom: 3rem;
    font-size: 1.25rem;
  }

  input {
    width: 100%;
    border: none;
    background: #c4c4c4;
    opacity: 0.3;
    height: 3.3125rem;
    border-radius: 10px;
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    padding: 2.65rem 0;
  }

  p {
    text-align: left;
    font-size: 1.125rem;
    margin-bottom: 7px;
  }

  .form {
    margin: 0 4.9375em;
  }

  .card {
    width: 37.5rem;
    background: white;
    border-radius: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`

export default Login
