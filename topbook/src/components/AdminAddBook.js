import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { BooksContext } from '../context/BooksContext'

const AdminAddBook = () => {
  const { fetchBook } = useContext(BooksContext)
  const [isbn, setIsbn] = useState('')
  const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'

  return (
    <Wrapper className='section section-center'>
      <div className='content'>
        <h2>Numer ISBN dodawanej książki:</h2>
        <input
          type='text'
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <button
          onClick={() => {
            fetchBook(url, isbn)
            setIsbn('')
          }}
        >
          Dodaj książkę
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;

  .content {
    display: grid;
    padding: 12rem 1rem 0 1rem;
  }

  button {
    width: 100%;
    height: 3rem;
    background: #0a1d37;
    color: white;
    border-radius: 7px;
    align-items: center;
    font-size: 1rem;
    border: none;
    padding: 0.25rem 3rem;
  }

  input {
    width: 100%;
    border: none;
    background: var(--input);
    font-size: 2rem;

    height: 3rem;
    border-radius: 10px;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 300;
  }

  @media (min-width: 665px) {
    .content {
      display: grid;
      padding: 12rem 5rem 0 5rem;
    }
    input {
      width: 100%;

      height: 5rem;

      margin-bottom: 2rem;
    }

    button {
      width: 100%;
      height: 5rem;

      font-size: 1.5rem;
      border: none;
      padding: 0.25rem 3rem;
    }
  }
`
export default AdminAddBook
