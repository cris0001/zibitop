import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { list } from '../utils/constans'
import Modal from './Modal'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const UserIncMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { user } = useContext(AuthContext)
  const [requestsToUser, setRequestsToUser] = useState([])
  const [idToChange, setIdToChange] = useState('')
  console.log(idToChange)

  const closeModal = () => {
    setIsModalOpen(false)
    console.log('close')
  }

  const searchUsersRequests = async (id) => {
    db.collection('requestsUser')
      .where('userIdTo', '==', user)
      .onSnapshot((snapshot) => {
        const postData = []
        //snapshot.forEach((doc) => postData.push(doc.data()))
        snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }))

        console.log(postData)
        setRequestsToUser(postData)
      })

    //data = snapshot.val()
  }

  useEffect(() => {
    searchUsersRequests(user.uid)
  }, [])

  useEffect(() => {
    console.log(requestsToUser)
  }, [requestsToUser])

  const acceptNoticeStatus = async (noticeId) => {
    const reqRef = db.collection('notices').doc(noticeId)
    const res = await reqRef.update({ status: 'potwierdzone' })
  }

  const declineNoticeStatus = async (noticeId) => {
    const reqRef = db.collection('notices').doc(noticeId)
    const res = await reqRef.update({ status: 'wolna' })
  }

  const acceptRequest = async (id) => {
    const reqRef = db.collection('requestsUser').doc(id)

    const res = await reqRef.update({ status: 'potwierdzona' })
  }

  const refuseRequest = async (id) => {
    const reqRef = db.collection('requestsUser').doc(id)

    const res = await reqRef.update({ status: 'odrzucona' })
  }

  return (
    <Wrapper className='section section-center'>
      <Modal closeModal={closeModal} isModalOpen={isModalOpen} />
      <div>
        {requestsToUser.map((item, index) => {
          const { isbn, title, id, status, noticeId } = item
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

                <div className='buttons'>
                  <button
                    onClick={() => {
                      acceptRequest(id)
                      acceptNoticeStatus(noticeId)
                    }}
                    className={
                      status === 'odrzucona' ? 'accept hide-accept' : 'accept'
                    }
                  >
                    {status === 'potwierdzona' ? 'potwierdzona' : 'potwierdź'}
                  </button>
                  <button
                    onClick={() => {
                      refuseRequest(id)
                      declineNoticeStatus(noticeId)
                    }}
                    className={
                      status === 'potwierdzona'
                        ? 'decline hide-accept'
                        : 'decline'
                    }
                  >
                    {status === 'odrzucona' ? 'odrzucona' : 'odrzuć'}
                  </button>
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

  .hide-accept {
    display: none;
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
      grid-template-columns: auto 1fr auto;
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
      grid-template-columns: auto 1fr auto;
      margin-top: 2rem;
      justify-content: space-between;
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

export default UserIncMenu
