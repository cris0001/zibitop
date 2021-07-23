import React, { useContext, useCallback } from 'react'
import styled from 'styled-components'
import bcg from '../images/bcg.jpg'
import { Link, Redirect } from 'react-router-dom'
import app from '../firebase.js'
import firebase from 'firebase/app'
import 'firebase/auth'
import { AuthContext } from '../context/AuthContext'

console.log(firebase.auth.Auth.Persistence.SESSION)

const Login = ({ history }) => {
  const { user } = useContext(AuthContext)
  console.log(user)

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
      try {
        await app.auth().signInWithEmailAndPassword(email.value, password.value)
      } catch (error) {
        alert(error)
        console.log('zle')
      }
    },
    [history]
  )

  if (user) {
    return <Redirect to='/' />
  }

  return (
    <Wrapper>
      <div className='content'>
        <div className='card'>
          <div className='form'>
            <form onSubmit={handleLogin}>
              <h1>Logowanie</h1>
              <div className='input'>
                <p>nazwa użytkownika:</p>
                <input
                  className='form-input'
                  name='email'
                  type='email'
                  placeholder='email'
                />
              </div>

              <div className='input'>
                <p>hasło:</p>
                <input
                  className='form-input'
                  name='password'
                  type='password'
                  placeholder='hasło'
                />
              </div>

              <button type='submit'>Zaloguj</button>

              <h3>
                Nie masz konta? załóż je <Link to='reg'>tutaj!</Link>
              </h3>
            </form>
            <h3>
              <Link className='redirect' to='/'>
                strona główna
              </Link>
            </h3>
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

  .redirect {
    color: black;
    font-weight: 700;
  }

  button {
    width: 100%;
    background: #0a1d37;
    border-radius: 10px;
    border: none;
    padding: 0.5rem 0;
    color: white;
    font-size: 1rem;
    margin-top: 2rem;
    margin-bottom: 2.5rem;
  }
  a {
    color: blue;
  }

  .form-input {
    border: none;
  }

  h3 {
    margin-bottom: 2.5rem;
    font-size: 1rem;
    font-weight: 300;
  }
  .err {
    color: red;
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  input {
    width: 100%;

    background: #eae9e9;
    border-radius: 10px;
    height: 2.5rem;
    font-size: 1rem;
    color: black;

    //margin-bottom: 2rem;
  }

  .input {
  }

  h1 {
    font-size: 2rem;
    font-weight: 400;
    padding: 2.3rem 0;
  }

  p {
    text-align: left;
    font-size: 1.125rem;
    margin-bottom: 7px;
    margin-top: 10px;
  }

  .form {
    margin: 0 4em;
  }

  .card {
    width: 20rem;
    min-height: 470px;
    background: white;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  @media (min-width: 500px) {
    button {
      width: 100%;
      background: #0a1d37;
      border-radius: 10px;
      border: none;
      padding: 0.5rem 0;
      color: white;
      font-size: 1.5rem;
      margin-top: 2.365rem;
      margin-bottom: 3rem;
    }

    h3 {
      margin-bottom: 3rem;
      font-size: 1.25rem;
      font-weight: 300;
    }

    input {
      width: 100%;
      border: none;
      background: #eae9e9;
      border-radius: 10px;
      height: 3.3125rem;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 400;
      padding: 2.3rem 0;
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
      width: 28rem;
      background: white;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    .input {
      width: 100%;
    }
  }

  @media (min-width: 700px) {
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
      font-weight: 300;
    }

    input {
      width: 100%;
      border: none;
      background: #eae9e9;
      border-radius: 10px;
      height: 3.3125rem;
    }

    .input {
      width: 100%;
      color: black;
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

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }
`

export default Login
