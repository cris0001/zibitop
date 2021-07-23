import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { Load } from '.'
import Modal from './Modal'
import { BooksContext } from '../context/BooksContext'

const UserReqAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { user } = useContext(AuthContext)
  const { loading, allBooks, addBookStatus } = useContext(BooksContext)
  const [userReqToAdmin, setUsersReqToAdmin] = useState([])

  console.log(allBooks)
  console.log(addBookStatus)

  console.log(user.uid)

  const closeModal = () => {
    setIsModalOpen(false)
    console.log('close')
  }

  const searchUsersToAdmin = () => {
    db.collection('requestAdmin')
      .where('userID', '==', user.uid)
      .onSnapshot((snapshot) => {
        const postData = []
        snapshot.forEach((doc) => postData.push(doc.data()))
        console.log(postData)
        setUsersReqToAdmin(postData)
      })
  }

  useEffect(() => {
    searchUsersToAdmin()
  }, [])

  if (loading) {
    return <Load />
  }

  return (
    <Wrapper className='section section-center'>
      <h1>Propozycje książek</h1>
      <Modal closeModal={closeModal} isModalOpen={isModalOpen} />
      <div>
        {userReqToAdmin.map((item, index) => {
          const { isbn, status } = item
          console.log(item)
          return (
            <div key={index}>
              <div className='item'>
                <div className='info'>
                  <p>ISBN: {isbn}</p>
                </div>
                <div>
                  <p className={status === 'dodana' ? 'text accept' : 'text'}>
                    {status}
                  </p>
                </div>
                <br />
              </div>
              <hr></hr>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: 100vh;

  h1 {
    text-align: center;
    margin-bottom: 5rem;
  }

  .map {
    background: transparent;
    color: var(--main);
  }

  .status {
    font-weight: bold;
  }
  button {
    border: none;
    border: 5px;
    padding: 0.1rem 0.5rem;
    font-size: 1rem;
  }
  .accept {
    color: #52e361;
    font-weight: bold;
  }
  .decline {
    background: #ee2727;
  }

  .item {
    display: grid;
    grid-template-columns: auto auto;
    text-align: center;
    margin-top: 4rem;
  }

  .icons {
    font-size: 1.5rem;
  }

  .item div:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
    margin-top: 0.5rem;
  }

  @media (min-width: 500px) {
    .item {
      display: grid;
      grid-template-columns: 1fr 1fr;

      margin-top: 2rem;
      justify-content: space-between;
    }

    .item div:nth-child(3) {
      grid-column: 3;
      grid-row: 1;
    }

    .icons {
      font-size: 1.5rem;
    }

    p:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    .text {
      font-size: 1rem;
      text-align: right;
    }
    .info {
      font-size: 1rem;
      text-align: left;
    }
    .status {
      text-align: right;
    }
  }

  @media (min-width: 500px) {
    .text {
      font-size: 1.24rem;
    }
    .info {
      font-size: 1.24rem;
    }
    .icons {
      font-size: 1.75rem;
    }
  }

  @media (min-width: 600px) {
    button {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 905px) {
    .item {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 2rem;
      justify-content: space-between;
    }
    .status {
      font-weight: bold;
      font-size: 1.5rem;
    }

    .icons {
      font-size: 2rem;
    }

    p:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    .text {
      font-size: 1.5rem;
    }
    .info {
      font-size: 1.5rem;
      text-align: left;
    }
  }
`

export default UserReqAdmin
