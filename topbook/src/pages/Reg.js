import React, { useCallback } from 'react'
import styled from 'styled-components'
import bcg from '../images/bcg.jpg'
import { Link } from 'react-router-dom'
import app from '../firebase'
import { db } from '../firebase'

const Reg = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements

      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)

        db.collection('users').add({
          email: email.value,
          role: 'user',
        })

        history.push('/')
      } catch (error) {
        console.log(error)
        alert(error)
      }
    },
    [history]
  )

  return (
    <Wrapper>
      <div className='content'>
        <div className='card'>
          <div className='form'>
            <form onSubmit={handleSignUp}>
              <h1>Załóż konto</h1>
              <div className='input'>
                <p>nazwa użytkownika:</p>
                <input name='email' type='email' placeholder='Email' />
              </div>

              <div className='input'>
                <p>hasło:</p>
                <input name='password' type='password' placeholder='Password' />
              </div>

              <button type='submit'>Zarejestruj</button>
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

  .err {
    color: red;
    margin-bottom: 2rem;
    font-size: 1rem;
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
    margin-bottom: 2rem;
  }

  h3 {
    margin-bottom: 2.5rem;
    font-size: 1rem;
    font-weight: 300;
  }

  input {
    width: 100%;
    border: none;
    background: #eae9e9;
    height: 2.5rem;
    border-radius: 10px;
    //margin-bottom: 2rem;
    font-size: 1rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: 400;
    padding: 2.3rem 0;
  }

  p {
    text-align: left;
    font-size: 1.125rem;
    margin-top: 10px;
  }

  .form {
    margin: 0 4em;
  }

  .card {
    width: 20rem;
    min-height: 420px;
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
      height: 3.3125rem;
      border-radius: 10px;
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

      min-height: 500px;
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
      height: 3.3125rem;
      border-radius: 10px;
    }

    .input {
      width: 100%;
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

export default Reg
