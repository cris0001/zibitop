import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { list } from '../utils/constans'
import { FaEye } from 'react-icons/fa'
import Modal from './Modal'
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase'
import { BooksContext } from '../context/BooksContext'
import { Spiner } from '.'

const UserBooksMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { user, currentUser } = useContext(AuthContext)
  const [usersBooks, setUsersBooks] = useState([])
  const { loading, error } = useContext(BooksContext)
  console.log(user)

  const openModal = () => {
    setIsModalOpen(true)
    console.log('open')
  }
  const closeModal = () => {
    setIsModalOpen(false)
    console.log('close')
  }

  const searchBooksByUser = async () => {
    db.collection('requestsUser')
      .where('userIdTo', '==', user.uid)
      .onSnapshot((snapshot) => {
        console.log(snapshot)
        const postData = []
        snapshot.forEach((doc) => postData.push(doc.data()))
        setUsersBooks(postData)
      })

    //data = snapshot.val()
  }

  useEffect(() => {
    searchBooksByUser()
  }, [])

  useEffect(() => {
    console.log(usersBooks)
  }, [usersBooks])

  if (loading) {
    return <Spiner />
  }

  return (
    <Wrapper className='section section-center'>
      <h1>Moje ogłoszenia</h1>
      {usersBooks.map((item, index) => {
        return (
          <div key={index} className='content'>
            <div className='grid'>
              <h2>ISBN: {item.isbn}</h2>
              <h2>{item.title}</h2>
              <div className='icon'>
                <button className='open-btn' onClick={openModal}>
                  {/* <FaEye /> */}
                </button>
              </div>
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
