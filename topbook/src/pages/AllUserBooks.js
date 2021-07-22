import React, { useState, useEffect, useContext } from 'react'
import { Navbar } from '../components'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import { db } from '../firebase'
import { Load } from '../components'
import { BooksContext } from '../context/BooksContext'
import { AuthContext } from '../context/AuthContext'
import { Book } from '../components'
import { login } from '../utils/constans'

const AllUserBooks = () => {
  const userId = useParams()
  const { allBooks, notices, loading, setLoading } = useContext(BooksContext)
  const { load, setLoad } = useContext(AuthContext)

  console.log(notices)
  console.log(allBooks)

  const correct = notices.filter((notice) => notice.userId === userId.noticeId)

  console.log(correct)

  // const allUserBooks = async () => {
  //   db.collection('notices')
  //     .where('userId', '==', userId.noticeId)
  //     .onSnapshot((snapshot) => {
  //       const postData = []
  //       snapshot.forEach((doc) => postData.push(doc.data()))
  //       //setNotices(postData)
  //       setLoading(false)
  //     })
  // }

  // useEffect(() => {
  //   allUserBooks()
  // }, [])

  if (loading) {
    return <Load />
  }

  return (
    <Wrapper>
      <Navbar />
      <div className='section section-center'>
        <div className='content'>
          {correct.map((notice) => {
            const matchingBook = allBooks.filter(
              (book) => book.id === notice.bookId
            )

            return (
              <Book
                key={notice.id}
                notice={notice}
                matchingBook={matchingBook[0]}
              />
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
  }

  img {
    width: 247px;
    height: 330px;
  }

  @media (min-width: 540px) {
    .content {
      display: flex;
    }

    img {
      width: 307px;
      height: 410px;
    }
  }

  @media (min-width: 800px) {
    .content {
      display: grid;
      grid-template-columns: auto auto;
    }
    img {
      width: 267px;
      height: 320px;
    }
  }

  @media (min-width: 1170px) {
    .content {
      grid-template-columns: auto auto auto;
      gap: 2rem;
    }

    img {
      width: 247px;
      height: 307px;
    }
  }
`

export default AllUserBooks
