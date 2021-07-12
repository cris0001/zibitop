import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { db } from '../firebase'
import { AuthContext } from './AuthContext'

export const BooksContext = React.createContext()

export const BooksProvider = ({ children }) => {
  // const url = 'https://www.googleapis.com/books/v1/volumes?q=y8KkDwAAQBAJ'

  const [book, setBook] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [allBooks, setAllBooks] = useState([])
  const [singleBook, setSingleBook] = useState()
  const [isbnNewRequest, setIsbnNewRequest] = useState('')
  const [searchStatus, setSearchStatus] = useState('')
  const [idFromIsbn, setIdFromIsbn] = useState('')

  const { currentUser } = useContext(AuthContext)

  const fetchBook = async (url) => {
    console.log('start')
    setLoading(true)

    try {
      const response = await axios.get(url)
      const item = response.data

      setLoading(false)

      let types = item.items[0].volumeInfo.industryIdentifiers.filter(
        (item) => item.type === 'ISBN_13'
      )
      const isbn = types[0].identifier
      const title = item.items[0].volumeInfo.title
      const author = item.items[0].volumeInfo.authors
      const description = item.items[0].volumeInfo.description || null
      const publisher = item.items[0].volumeInfo.publisher || null
      const img = item.items[0].volumeInfo.imageLinks || null
      const publishedDate = item.items[0].volumeInfo.publishedDate || null

      const book = {
        isbn,
        title,
        author,
        description,
        publisher,
        img,
        publishedDate,
      }

      //console.log(book)

      // console.log(isbn)
      // console.log(title)
      // console.log(author)
      // console.log(description)
      // console.log(publisher)
      // console.log(img)
      // console.log(publishedDate)

      db.collection('books').add(book)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    return db.collection('books').onSnapshot((snapshot) => {
      const postData = []
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }))
      setAllBooks(postData)
    })
  }, [])

  const fetchSingleBook = async (id) => {
    const booksRef = db.collection('books').doc(id)
    const doc = await booksRef.get()

    let data = {}
    if (!doc.exists) {
      console.log('No such document!')
    } else {
      data = doc.data()
      //console.log('Document data:', doc.data())
      setSingleBook(data)
    }
  }

  useEffect(() => {
    console.log(singleBook)
  }, [singleBook])

  const newIsbnRequest = (isbn) => {
    db.collection('requestAdmin').add({
      isbn,
      status: 'do zatwierdzenia',
      userID: currentUser.uid,
    })
  }

  const searchByIsbn = async (isbn) => {
    const citiesRef = db.collection('books')
    const snapshot = await citiesRef.where('isbn', '==', isbn).get()
    if (snapshot.empty) {
      console.log('No matching documents.')
      setSearchStatus(null)
    }

    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data())
      setSearchStatus(true)
    })
  }

  const getIDbyISBN = async (isbn) => {
    const citiesRef = db.collection('books')
    const snapshot = await citiesRef.where('isbn', '==', isbn).get()
    if (snapshot.empty) {
      return null
    }

    snapshot.forEach((doc) => {
      console.log('jjjjjjjjjjjjjjjjjjddddddddddddddd')
      setIdFromIsbn(doc.id)
    })
  }

  return (
    <BooksContext.Provider
      value={{
        fetchSingleBook,
        fetchBook,
        loading,
        book,
        allBooks,
        singleBook,
        isbnNewRequest,
        setIsbnNewRequest,
        newIsbnRequest,
        searchByIsbn,
        searchStatus,
        setSearchStatus,
        getIDbyISBN,
        idFromIsbn,
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}
