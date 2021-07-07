import React from 'react'
import styled from 'styled-components'
import { Navbar, Footer } from '../components'

const SearchBook = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className='section section-center grid'>
        <div className='search'>
          <div className='input'>
            <h2>ISBN ksiązki:</h2>
            <input type='text' />
          </div>

          <button className='btn'> Wyszukaj ksiażkę</button>
        </div>
        <hr />
        <div className='add'>
          <div className='text'>
            <h2>
              Brak książki o podanym numerze ISBN?
              <br />
              <strong>Poproś o dodanie</strong>
            </h2>
            <input type='text' />
            <button className='btn'>Wyślij prośbę</button>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  .search {
    padding: 5rem 0;
    text-align: center;
  }
  input {
    width: 330px;
    border: none;
    background: #e6e7eb;

    height: 2.5rem;
    border-radius: 10px;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  .btn {
    margin-top: 2em;
    width: 330px;
    background: #0a1d37;
    color: white;
    border-radius: 10px;
    align-items: center;
    font-size: 1.5rem;
    border: none;
    padding: 0.1rem 0;
  }

  .search h2 {
    font-size: 2.5rem;
    font-weight: 300;
  }

  .add {
    margin-top: 5rem;

    text-align: center;
    margin-bottom: 5rem;
  }

  .add h2 {
    margin-top: 5rem;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 300;
  }

  @media (min-width: 800px) {
    .grid {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      padding: 15rem 0;
    }

    .search {
      justify-self: center;
    }

    input,
    .btn {
      width: 300px;
    }

    .add {
      justify-self: center;
      margin: 0;
    }

    .btn {
      margin: 0;
    }

    .add h2 {
      font-size: 2rem;
      margin-top: 2rem;
    }

    .search h2 {
    }
    @media (min-width: 1023px) {
      input,
      .btn {
        width: 400px;
      }
    }
  }
`
export default SearchBook
