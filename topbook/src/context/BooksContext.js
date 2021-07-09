import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { db } from '../firebase'

export const BooksContext = React.createContext()

export const BooksProvider = ({ children }) => {
  // const url = 'https://www.googleapis.com/books/v1/volumes?q=y8KkDwAAQBAJ'

  const [book, setBook] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [allBooks, setAllBooks] = useState([])

  const fetchBook = async (url) => {
    console.log('start')
    setLoading(true)

    try {
      const response = await axios.get(url)
      const item = response.data

      setLoading(false)

      let types = item.volumeInfo.industryIdentifiers.filter(
        (item) => item.type !== 'ISBN_10'
      )
      const isbn = types[0].identifier
      const title = item.volumeInfo.title
      const author = item.volumeInfo.authors
      const description = item.volumeInfo.description
      const publisher = item.volumeInfo.publisher
      const img = item.volumeInfo.imageLinks
      const publishedDate = item.volumeInfo.publishedDate

      console.log(isbn)
      console.log(title)
      console.log(author)
      console.log(description)
      console.log(publisher)
      console.log(img)
      console.log(publishedDate)

      db.collection('books').add({
        isbn,
        title,
        author,
        description,
        publisher,
        img,
        publishedDate,
      })
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
    if (!doc.exists) {
      console.log('No such document!')
    } else {
      console.log('Document data:', doc.data())
    }
  }

  return (
    <BooksContext.Provider
      value={{
        fetchSingleBook,
        fetchBook,
        loading,
        book,
        allBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}
