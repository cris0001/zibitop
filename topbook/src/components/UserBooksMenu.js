import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'

import Modal from './Modal'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'
import { BooksContext } from '../context/BooksContext'
import { Load } from '.'

const UserBooksMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { user, currentUser } = useContext(AuthContext)
  const [usersBooks, setUsersBooks] = useState([])
  const { loading, allBooks } = useContext(BooksContext)
  const [title, setTitle] = useState('')
  const [isbn, setIsbn] = useState('')

  //console.log(user.uid)

  const openModal = () => {
    setIsModalOpen(true)
    console.log('open')
  }
  const closeModal = () => {
    setIsModalOpen(false)
    console.log('close')
  }

  const searchBooksByUser = async (id) => {
    db.collection('notices')
      .where('userId', '==', id)
      .onSnapshot((snapshot) => {
        console.log(snapshot)
        const postData = []
        snapshot.forEach((doc) => postData.push(doc.data()))
        setUsersBooks(postData)
      })

    //data = snapshot.val()
  }

  const getTitle = async () => {
    const booksRef = db.collection('books')
    const snapshot = await booksRef.where('isbn', '==', isbn).get()
    if (snapshot.empty) {
      return null
    }

    snapshot.forEach((doc) => {
      setTitle(doc.data().title)
      console.log(doc.data().title)
    })
  }

  useEffect(() => {
    searchBooksByUser(user.uid)
    console.log(usersBooks)
    getTitle()
  }, [])

  if (loading) {
    return <Load />
  }

  return (
    <Wrapper className='section section-center'>
      <h1>Moje ogłoszenia</h1>
      {usersBooks.map((item, index) => {
        const matchingBook = allBooks.filter((book) => book.isbn === item.isbn)
        console.log(matchingBook)
        return (
          <div key={index} className='content'>
            <div className='grid'>
              <h2>ISBN: {item.isbn}</h2>
              <h2>{matchingBook[0].title}</h2>
            </div>
            <hr />
          </div>
        )
      })}
      <Modal closeModal={closeModal} isModalOpen={isModalOpen} />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: 80vh;
  h1 {
    text-align: center;
  }

  .grid {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: auto;
    justify-content: space-between;
  }
  .icon {
    font-size: 0.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  .open-btn {
    font-size: 1.75rem;
    background: transparent;
    border-color: transparent;
    color: black;
    cursor: pointer;
  }

  @media (min-width: 700px) {
    .icon {
      font-size: 1.5rem;
    }

    .grid {
      margin-top: 5rem;
      display: grid;
      grid-template-columns: auto auto;
      justify-content: space-between;
    }

    .icon {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    hr {
      width: 100%;
    }
  }
`

export default UserBooksMenu
