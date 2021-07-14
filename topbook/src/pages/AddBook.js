import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import { Navbar, Footer } from '../components'
import styled from 'styled-components'
import { db } from '../firebase'
import { BooksContext } from '../context/BooksContext'
import { AuthContext } from '../context/AuthContext'

const AddBook = () => {
  const { isbn } = useParams()

  const { getIDbyISBN, idFromIsbn } = useContext(BooksContext)
  const { user } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [postCode, setPostCode] = useState('')
  const [streetNbr, setStreetNbr] = useState('')

  const bookId = getIDbyISBN(isbn)

  const addNotice = (e) => {
    e.preventDefault()

    db.collection('notices').add({
      bookId: idFromIsbn,
      userId: user.uid,
      status: 'wolna',
      isbn,
      name,
      surname,
      email,
      postCode,
      streetNbr,
    })
    // db.collection('notices')
    //   .add({
    //     bookId: idFromIsbn,
    //     userId: user.uid,
    //     status: 'wolna',
    //     isbn,
    //     name,
    //     surname,
    //     email,
    //     postCode,
    //     streetNbr,
    //   })
    //   .then(function (docRef) {
    //     console.log('Document written with ID: ', docRef.id)
    //   })
    //   .catch(function (error) {
    //     console.error('Error adding document: ', error)
    //   })
  }

  useEffect(() => {
    getIDbyISBN(isbn)
  }, [])

  return (
    <Wrapper>
      <Navbar />

      <div className='section section-center'>
        <form onSubmit={addNotice}>
          <div className='content grid'>
            <div className='info'>
              <h2>Dane wystawiającego</h2>
              <div className='input'>
                <p>Imię:</p>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className='input'>
                <p>Nazwisko:</p>
                <input
                  type='text'
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
              </div>
              <div className='input'>
                <p>email:</p>
                <input
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className='place'>
              <div className='info'>
                <h2 className='margin'>Adres odbioru</h2>
                <div className='input'>
                  <p>Kod pocztowy:</p>
                  <input
                    type='text'
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                    required
                  />
                </div>
                <div className='input'>
                  <p>Ulica i numer domu:</p>
                  <input
                    type='text'
                    value={streetNbr}
                    onChange={(e) => setStreetNbr(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <button type='submit' className='btn'>
            Dodaj
          </button>
        </form>
      </div>
      {/* <Footer /> */}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
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
