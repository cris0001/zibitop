import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Navbar, Footer } from '../components'
import { BooksContext } from '../context/BooksContext'
import { Link, Redirect } from 'react-router-dom'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const SearchBook = () => {
  const {
    isbnNewRequest,
    setIsbnNewRequest,
    searchStatus,
    searchByIsbn,

    setSearchStatus,
  } = useContext(BooksContext)

  const [checkIsbn, setChechIsbn] = useState('')
  const [addIsbn, setAddIsbn] = useState('')
  const { user } = useContext(AuthContext)

  console.log(addIsbn)
  const newIsbnRequest = () => {
    db.collection('requestAdmin').add({
      isbn: addIsbn,
      status: 'do zatwierdzenia',
      userID: user.uid,
    })
  }

  useEffect(() => {
    setSearchStatus(null)
  }, [])
  return (
    <Wrapper>
      <Navbar />
      <div className='section section-center grid'>
        <div className='search'>
          <div className='input'>
            <h2>ISBN ksiązki:</h2>
            <input
              type='text'
              value={checkIsbn}
              onChange={(e) => setChechIsbn(e.target.value)}
            />
          </div>

          <div className='buttons'>
            <button onClick={() => searchByIsbn(checkIsbn)} className='btn'>
              Wyszukaj ksiażkę
            </button>
            {searchStatus && (
              <Link className='btn btn-2' to={`/searchbook/${checkIsbn}`}>
                przejdź dalej
              </Link>
            )}
          </div>
        </div>
        <hr />
        <div className='add'>
          <div className='text'>
            <h2>
              Brak książki o podanym numerze ISBN?
              <br />
              <strong>Poproś o dodanie</strong>
            </h2>
            <input
              type='text'
              value={addIsbn}
              onChange={(e) => setAddIsbn(e.target.value)}
            />
            <button onClick={() => newIsbnRequest()} className='btn'>
              Wyślij prośbę
            </button>
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
  .buttons {
    display: grid;
    grid-template-columns: 1fr;
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
    justify-self: center;
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
