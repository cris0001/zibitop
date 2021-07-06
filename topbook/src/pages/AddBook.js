import React from 'react'
import { Navbar, Footer } from '../components'
import styled from 'styled-components'

const AddBook = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className='section section-center'>
        <div className='content grid'>
          <div className='info'>
            <h2>Dane wystawiającego</h2>
            <div className='input'>
              <p>Imię:</p>
              <input type='text' />
            </div>
            <div className='input'>
              <p>Nazwisko:</p>
              <input type='text' />
            </div>
            <div className='input'>
              <p>email:</p>
              <input type='text' />
            </div>
          </div>

          <div className='place'>
            <div className='info'>
              <h2 className='margin'>Adres odbioru</h2>
              <div className='input'>
                <p>Kod pocztowy:</p>
                <input type='text' />
              </div>
              <div className='input'>
                <p>Ulica i numer domu:</p>
                <input type='text' />
              </div>
            </div>
          </div>
        </div>
        <button className='btn'>Dodaj</button>
      </div>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
  }

  .btn {
    margin-top: 2em;
    width: 100%;
    background: #0a1d37;
    color: white;
    border-radius: 10px;
    align-items: center;
    font-size: 1.5rem;
    border: none;
    padding: 0.1rem 0;
    margin-bottom: 5rem;
  }

  .margin {
    margin-top: 3rem;
  }

  .content h2 {
    margin-bottom: 2rem;
  }
  .input {
    margin-bottom: 1rem;
  }
  input {
    width: 100%;
    border: none;
    background: #e6e7eb;
    opacity: 1;
    height: 2.5rem;
    border-radius: 10px;
  }
  .content {
    margin-top: 5rem;
    min-height: 33vh;
  }

  @media (min-width: 600px) {
    .grid {
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
    }

    .margin {
      margin: 0;
    }
  }
`
export default AddBook
