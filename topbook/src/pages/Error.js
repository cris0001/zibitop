import React, { useContext } from 'react'
import firebase from '../firebase'
import { db } from '../firebase'
import { BooksContext } from '../context/BooksContext'

const Error = () => {
  const { fetchBook, loading, book, xd } = useContext(BooksContext)
  const url = 'https://www.googleapis.com/books/v1/volumes/y8KkDwAAQBAJ'
  const url2 = 'https://www.googleapis.com/books/v1/volumes/dTESjwEACAAJ'

  return (
    <div>
      <button onClick={() => fetchBook(url)}>xddd</button>
      <button onClick={() => fetchBook(url2)}>2222222222</button>

      {loading ? <h1>ladowanie</h1> : null}
    </div>
  )
}

export default Error
