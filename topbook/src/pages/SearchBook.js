import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Navbar, Alert } from '../components'
import { BooksContext } from '../context/BooksContext'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { addNotification } from '../notification'

const SearchBook = () => {
  const {
    searchStatus,
    searchByIsbn,
    setSearchStatus,
    msg,

    alert2,
    setAlert2,
    alert,

    showAlert,
    showAlert2,
  } = useContext(BooksContext)

  const [checkIsbn, setChechIsbn] = useState('')
  const [addIsbn, setAddIsbn] = useState('')
  const { user } = useContext(AuthContext)

  const newIsbnRequest = async () => {
    if (addIsbn.length !== 13 && addIsbn.length !== 10) {
      setAlert2({ show: true, msg: 'podaj poprawny isbn', type: 'danger' })
      return null
    }

    const citiesRef = db.collection('books')
    const snapshot = await citiesRef.where('isbn', '==', addIsbn).get()
    if (!snapshot.empty) {
      addNotification(
        'Prośba do Administratora',
        'podana książka już istnieje',
        'info'
      )
      return null
    }

    const notRef = db.collection('requestAdmin')
    const snapshot2 = await notRef.where('isbn', '==', addIsbn).get()
    if (!snapshot2.empty) {
      addNotification(
        'Prośba do Administratora',
        'Ktoś już poprosił o dodanie tej książki',
        'default'
      )

      return null
    }

    await db.collection('requestAdmin').add({
      isbn: addIsbn,
      status: 'do zatwierdzenia',
      userID: user.uid,
    })
    addNotification('Prośba do Administratora', 'Zgłoszenie wysłane', 'success')
    //setAlert2({ show: true, msg: 'Zgłoszenie wysłane', type: 'success' })
  }

  useEffect(() => {
    setSearchStatus(null)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert()
      showAlert2()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert, alert2])

  useEffect(() => {
    setSearchStatus(false)
  }, [checkIsbn])

  return (
    <Wrapper>
      <Navbar />
      <div className='section section-center grid'>
        <div className='search'>
          <div className='input'>
            <h2>ISBN ksiązki:</h2>
            <input
              type='number'
              value={checkIsbn}
              onChange={(e) => setChechIsbn(e.target.value)}
            />
          </div>
          <p>{msg}</p>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={msg} />
          )}

          <div className='buttons'>
            {searchStatus === false ? (
              <button
                onClick={() => {
                  searchByIsbn(checkIsbn)
                  // setChechIsbn('')
                }}
                className='btn'
              >
                Wyszukaj ksiażkę
              </button>
            ) : null}
            {searchStatus && (
              <Link className='btn btn-2' to={`/searchbook/${checkIsbn}`}>
                Przejdź dalej
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
              type='number'
              value={addIsbn}
              onChange={(e) => setAddIsbn(e.target.value)}
            />
            <div className='info'>
              {alert2.show && (
                <Alert {...alert2} removeAlert={showAlert2} list={msg} />
              )}
            </div>

            <button
              onClick={() => {
                newIsbnRequest()
                setAddIsbn('')
              }}
              className='btn'
            >
              Wyślij prośbę
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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
    //margin-bottom: 2rem;
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
    .info {
      width: 300px;
      margin: auto;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      padding: 13rem 0;
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

      .info {
        width: 400px;
      }
    }
  }
`
export default SearchBook
