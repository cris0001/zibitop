import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { list } from '../utils/constans'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'

import Modal from './Modal'

const UserReqMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { user } = useContext(AuthContext)
  const [usersRequests, setUsersRequests] = useState([])

  const closeModal = () => {
    setIsModalOpen(false)
    console.log('close')
  }

  const searchUsersRequests = (id) => {
    db.collection('requestsUser')
      .where('userIdFrom', '==', id)
      .onSnapshot((snapshot) => {
        const postData = []
        snapshot.forEach((doc) => postData.push(doc.data()))
        setUsersRequests(postData)
      })
  }

  // const searchUsersRequests = async (id) => {
  //   const citiesRef = db.collection('requestsUser')
  //   const snapshot = await citiesRef.where('userIdFrom', '==', id).get()
  //   const postData = []
  //   snapshot.forEach((doc) => postData.push(doc.data()))
  //   setUsersRequests(postData)
  // }

  // useEffect(() => {
  //   searchUsersRequests(user.uid)
  // }, [])

  return (
    <Wrapper className='section section-center'>
      <Modal closeModal={closeModal} isModalOpen={isModalOpen} />
      <div>
        {/* <button onClick={() => searchUsersRequests(user.uid)}>sada</button> */}
        {usersRequests.map((item, index) => {
          const { title, isbn, id, status } = item
          return (
            <div key={index}>
              <div className='item'>
                <div className='info'>
                  <p>ISBN:</p>
                  <p>Tytuł:</p>
                </div>
                <div className='text'>
                  <p>{isbn}</p>
                  <p>{title}</p>
                </div>

                <div
                  className={
                    status === 'odrzucona' ? 'status red' : 'status green'
                  }
                >
                  {status}
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

  .red {
    color: red;
  }
  .green {
    color: lightgreen;
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
    background: #52e361;
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

  .green {
    color: green;
  }
  .red {
    color: red;
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
      grid-template-columns: auto auto auto;
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
    }
    .info {
      font-size: 1rem;
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
      grid-template-columns: auto auto auto;
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
    }
  }
`

export default UserReqMenu
