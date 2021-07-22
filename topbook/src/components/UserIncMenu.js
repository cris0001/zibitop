import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { BooksContext } from '../context/BooksContext'
import { Load } from '.'
import { addNotification } from '../notification'

const UserIncMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { user, load } = useContext(AuthContext)
  const { loading, setLoading } = useContext(BooksContext)
  const [requestsToUser, setRequestsToUser] = useState([])
  const [idToChange, setIdToChange] = useState('')
  console.log(idToChange)

  console.log(user)

  const closeModal = () => {
    setIsModalOpen(false)
    console.log('close')
  }

  const searchUsersRequests = async (id) => {
    console.log(id)
    setLoading(true)
    db.collection('requestsUser')
      .where('userIdTo', '==', id)
      .onSnapshot((snapshot) => {
        const postData = []
        //snapshot.forEach((doc) => postData.push(doc.data()))
        snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }))

        console.log(postData)
        setRequestsToUser(postData)
        setLoading(false)
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

  if (loading || load) {
    return <Load />
  }

  return (
    <Wrapper className='section section-center'>
      <h1>Prośby od użytkowników</h1>
      <Modal closeModal={closeModal} isModalOpen={isModalOpen} />
      <div>
        {requestsToUser.map((item, index) => {
          const { isbn, title, id, status, noticeId } = item
          return (
            <div key={index}>
              <div className={status === 'odrzucona' ? 'hide' : 'item'}>
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
                      addNotification(
                        'Prośba do książkę',
                        'prośba została pomyślnie zatwierdzona',
                        'success'
                      )
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
                      addNotification(
                        'Prośba do książkę',
                        'prośba została odrzucona',
                        'success'
                      )
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

  .hide {
    display: none;
  }

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
    color: #008000;
    background: transparent;
    font-weight: bold;
  }
  .decline {
    font-weight: bold;
    color: #ee2727;
    background: transparent;
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
      text-align: left;
    }

    .buttons {
      text-align: right;
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
      text-align: center;
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
      grid-template-columns: 1fr 1fr 1fr;
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
