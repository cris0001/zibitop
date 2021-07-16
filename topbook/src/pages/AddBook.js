import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { addNotification } from '../notification'
import { Navbar, Footer } from '../components'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { db } from '../firebase'
import { BooksContext } from '../context/BooksContext'
import { AuthContext } from '../context/AuthContext'

const AddBook = ({ history }) => {
  const { isbn } = useParams()

  const { getIDbyISBN, idFromIsbn, alert, setAlert } = useContext(BooksContext)
  const { user } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [postCode, setPostCode] = useState('')
  const [streetNbr, setStreetNbr] = useState('')
  const [number, setNumber] = useState('')
  const [disable, setDisable] = useState(false)

  const bookId = getIDbyISBN(isbn)

  const clearForm = () => {
    setName('')
    setSurname('')
    setEmail('')
    setPostCode('')
    setStreetNbr('')
    setNumber('')
  }

  const chceckName = () => {
    const reg = /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/
    if (!name.match(reg)) {
      addNotification('Wprowadzanie danych', 'podaj poprawne imie', 'danger')
      return
    } else return true
  }

  const checkSurname = () => {
    const reg = /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/
    if (!surname.match(reg)) {
      addNotification(
        'Wprowadzanie danych',
        'podaj poprawne nazwisko',
        'danger'
      )
      return
    } else return true
  }

  const checkEmail = () => {
    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!email.match(reg)) {
      addNotification('Wprowadzanie danych', 'podaj poprawny email', 'danger')
      return
    } else return true
  }

  const checkPostCode = () => {
    const reg = /^[0-9]{2}(-[0-9]{3})?$/
    if (!postCode.match(reg)) {
      addNotification(
        'Wprowadzanie danych',
        'podaj poprawny kod pocztowy',
        'danger'
      )
      return
    } else return true
  }

  const chceckStreet = () => {
    if (streetNbr.length < 5) {
      addNotification('Wprowadzanie danych', 'podaj poprawną ulicę', 'danger')
      return
    } else return true
  }

  const checkNumber = () => {
    const reg = /^[0-9]{1,5}[a-z]{0,1}$/
    if (!number.match(reg)) {
      addNotification(
        'Wprowadzanie danych',
        'podaj poprawny numer domu',
        'danger'
      )
      return
    } else return true
  }

  const addNotice = (e) => {
    e.preventDefault()
    setDisable(false)

    if (
      chceckName(name) &&
      checkEmail(email) &&
      chceckStreet(streetNbr) &&
      checkNumber(number) &&
      checkPostCode(postCode) &&
      checkSurname(surname)
    ) {
      try {
        db.collection('notices').add({
          bookId: idFromIsbn,
          userId: user.uid,
          status: 'wolna',
          isbn,
          name,
          surname,
          number,
          email,
          postCode,
          streetNbr,
        })
        setDisable(true)
        addNotification(
          'Nowe ogłoszenie',
          'ogłoszenie dodane pomyślnie',
          'success'
        )
        clearForm()
        setTimeout(() => {
          history.push('/')
        }, 1000)
      } catch (err) {
        console.log(err)
      }
    } else return
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
                />
              </div>
              <div className='input'>
                <p>Nazwisko:</p>
                <input
                  type='text'
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <div className='input'>
                <p>email:</p>
                <input
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  />
                </div>
                <div className='input'>
                  <p>Ulica:</p>
                  <input
                    type='text'
                    value={streetNbr}
                    onChange={(e) => setStreetNbr(e.target.value)}
                  />
                </div>
                <div className='input'>
                  <p>Numer domu:</p>
                  <input
                    type='text'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <button disabled={disable} type='submit' className='btn'>
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
