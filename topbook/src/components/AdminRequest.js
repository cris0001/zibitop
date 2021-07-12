import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { list } from '../utils/constans'
import { FaTrash, FaPlusCircle } from 'react-icons/fa'
import { BooksContext } from '../context/BooksContext'
import { db } from '../firebase'

const AdminRequest = () => {
  const [adminRequests, setAdminRequests] = useState([])
  const { fetchBook } = useContext(BooksContext)
  const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'

  useEffect(() => {
    const showAdminRequests = () => {
      return db.collection('requestAdmin').onSnapshot((snapshot) => {
        const postData = []
        snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }))
        setAdminRequests(postData)
      })
    }
    showAdminRequests()
  }, [])

  return (
    <Wrapper className='section section-center'>
      <div>
        {adminRequests.map((item) => {
          const { isbn, title, author, id, status } = item
          return (
            <div key={id}>
              <div className='item' key={id}>
                <div className='info'>
                  <p>ISBN:</p>
                  <p>Tytuł:</p>
                  <p>Autor:</p>
                </div>
                <div className='text'>
                  <p>{isbn}</p>
                  <p>--</p>
                  <p>--</p>
                </div>

                <div className='icons'>
                  <FaTrash
                    onClick={() =>
                      db.collection('requestAdmin').doc(item.id).delete()
                    }
                    className='red'
                  />
                  <FaPlusCircle
                    onClick={() => fetchBook(`${url}${item.isbn}`)}
                    className='green'
                  />
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
  @media (min-width: 905px) {
    .item {
      display: grid;
      grid-template-columns: auto auto auto;
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

export default AdminRequest
