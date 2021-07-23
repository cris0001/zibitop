import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { db } from '../firebase'

import { addNotification } from '../notification'

export const BooksContext = React.createContext()

export const BooksProvider = ({ children }) => {
  const [allBooks, setAllBooks] = useState([])
  const [isbnNewRequest, setIsbnNewRequest] = useState('')
  const [searchStatus, setSearchStatus] = useState('')
  const [idFromIsbn, setIdFromIsbn] = useState('')
  const [notices, setNotices] = useState([])
  const [noticeUserIdTo, setNoticeUserIdTo] = useState()
  const [msg, setMsg] = useState('')
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })
  const [alert2, setAlert2] = useState({ show: false, msg: '', type: '' })
  const [loading, setLoading] = useState(false)
  const [addBookStatus, setAddBookStatus] = useState('d')

  const fetchBook = async (url, isbn) => {
    setLoading(true)

    console.log('start')
    setLoading(true)

    let xd = `${url}${isbn}`
    console.log(xd)

    if (isbn.length !== 13 && isbn.length !== 10) {
      addNotification(
        'Dodawanie ksiązki',
        'podany ISBN jest niepoprawny',
        'danger'
      )

      setLoading(false)
      return null
    } else {
      try {
        const response = await axios.get(xd)
        const item = response.data
        console.log(item.totalItems)

        if (item.totalItems === 1) {
          let types = ''

          if (isbn.length === 13) {
            types = item.items[0].volumeInfo.industryIdentifiers.filter(
              (item) => item.type === 'ISBN_13'
            )
          }

          if (isbn.length === 10) {
            types = item.items[0].volumeInfo.industryIdentifiers.filter(
              (item) => item.type === 'ISBN_10'
            )
          }

          const notRef = db.collection('books')
          const snapshot2 = await notRef.where('isbn', '==', isbn).get()
          if (!snapshot2.empty) {
            addNotification(
              'Dodawanie ksiązki',
              'książka znajduje się już w bazie',
              'info'
            )
            setLoading(false)
            return null
          } else {
            const isbn = types[0].identifier
            const title = item.items[0].volumeInfo.title
            const author = item.items[0].volumeInfo.authors
            const publisher = item.items[0].volumeInfo.publisher || null
            const img = item.items[0].volumeInfo.imageLinks || null
            const publishedDate = item.items[0].volumeInfo.publishedDate || null

            const book = {
              isbn,
              title,
              author,
              publisher,
              img,
              publishedDate,
            }

            db.collection('books').add(book)
            addNotification(
              'Dodawanie ksiązki',
              'dodano pomyślnie do bazy',
              'success'
            )
            setAddBookStatus('dodano')
            setLoading(false)
            return 1
          }
        } else {
          addNotification('Dodawanie ksiązki', 'brak podanej książki', 'info')
          setAddBookStatus('brak podanej książki')
          return null
        }
      } catch (err) {
        setLoading(false)
        addNotification(
          'Dodawanie ksiązki',
          'błąd podczas dodawania książki',
          'danger'
        )
        console.log(err)
        return null
      }
    }
  }

  useEffect(() => {
    const getAllBooks = () => {
      setLoading(true)
      try {
        db.collection('books').onSnapshot((snapshot) => {
          const booskData = []
          snapshot.forEach((doc) =>
            booskData.push({ ...doc.data(), id: doc.id })
          )
          setAllBooks(booskData)
          setLoading(false)
        })
      } catch (err) {
        console.log(err)
        setLoading(false)
      }
    }
    getAllBooks()
  }, [])

  useEffect(() => {
    try {
      setLoading(true)
      db.collection('notices').onSnapshot((snapshot) => {
        const postData = []
        snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }))
        setNotices(postData)
        setLoading(false)
      })
    } catch (err) {
      console.log(err)
      addNotification(
        'Pobierane listy ogłoszeń',
        'Błąd w trakcie pobierania listy ogłoszeń',
        'danger'
      )
      setLoading(false)
    }
  }, [])

  const searchByIsbn = async (isbn) => {
    if (isbn.length !== 13 && isbn.length !== 10) {
      setAlert({ show: true, msg: 'podaj poprawny isbn', type: 'danger' })
      return null
    }

    const citiesRef = db.collection('books')
    const snapshot = await citiesRef.where('isbn', '==', isbn).get()
    if (snapshot.empty) {
      console.log('No matching documents.')
      addNotification(
        'Wyszukiwanie książki',
        'Brak ksiażki o podanym numerze ISBN',
        'danger'
      )
    }

    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data())
      setSearchStatus(true)
      addNotification(
        'Wyszukiwanie książki',
        'Książka odnaleziona, możesz przejść dalej',
        'success'
      )
    })
  }

  const getIDbyISBN = async (isbn) => {
    const citiesRef = db.collection('books')
    const snapshot = await citiesRef.where('isbn', '==', isbn).get()
    if (snapshot.empty) {
      return null
    }

    snapshot.forEach((doc) => {
      setIdFromIsbn(doc.id)
    })
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }
  const showAlert2 = (show = false, type = '', msg = '') => {
    setAlert2({ show, type, msg })
  }

  return (
    <BooksContext.Provider
      value={{
        fetchBook,
        msg,
        allBooks,
        loading,
        setLoading,
        isbnNewRequest,
        setIsbnNewRequest,
        loading,
        searchByIsbn,
        searchStatus,
        setSearchStatus,
        showAlert2,
        getIDbyISBN,
        idFromIsbn,
        notices,
        noticeUserIdTo,
        setNoticeUserIdTo,
        setMsg,
        alert,
        setAlert,
        showAlert,
        alert2,
        setAlert2,
        setLoading,
        addBookStatus,
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}
