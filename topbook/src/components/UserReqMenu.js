import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { list } from '../utils/constans'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { Spiner } from '.'
import ContactInfo from './ContactInfo'
import Modal from './Modal'
import { BooksContext } from '../context/BooksContext'
import { addNotification } from '../notification'
const UserReqMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { user } = useContext(AuthContext)
  const { loading } = useContext(BooksContext)
  const [usersRequests, setUsersRequests] = useState([])
  const [info, setInfo] = useState()
  const closeModal = () => {
    setIsModalOpen(false)
    console.log('close')
  }

  const openModal = () => {
    setIsModalOpen(true)
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

  useEffect(() => {
    searchUsersRequests(user.uid)
  }, [])

  if (loading) {
    return <Spiner />
  }

  const getAdress = async (id) => {
    const noticeRef = db.collection('notices').doc(id)
    const doc = await noticeRef.get()
    if (!doc.exists) {
      console.log('No such document!')
    } else {
      console.log('Document data:', doc.data())
      setInfo(doc.data())
    }
  }

  return (
    <Wrapper className='section section-center'>
      <h1>Moje prośby</h1>
      <Modal closeModal={closeModal} isModalOpen={isModalOpen} />
      <div>
        {usersRequests.map((item, index) => {
          const {
            title,
            isbn,
            id,
            status,
            streetNbr,
            number,
            postCode,
            phone,
          } = item
          console.log(item)
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
                  {status === 'potwierdzona' && (
                    <div className='iconn'>
                      <button
                        onClick={() => {
                          getAdress(item.noticeId)
                          console.log(item.noticeId)

                          openModal()
                        }}
                        className='map'
                      >
                        <FaMapMarkedAlt />
                      </button>
                      <ContactInfo
                        info={info}
                        closeModal={closeModal}
                        isModalOpen={isModalOpen}
                      />
                    </div>
                  )}
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
      grid-template-columns: 1fr 1fr 1fr;

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
      grid-template-columns: 1fr 1fr 1fr;
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

export default UserReqMenu
