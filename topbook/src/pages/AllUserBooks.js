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
  const { allBooks, notices } = useContext(BooksContext)
  const { loading, setLoading } = useContext(AuthContext)

  const correct = notices.filter((notice) => notice.userId === userId.noticeId)

  // const allUserBooks = async () => {
  //   db.collection('notices')
  //     .where('userId', '==', userId.noticeId)
  //     .onSnapshot((snapshot) => {
  //       const postData = []
  //       snapshot.forEach((doc) => postData.push(doc.data()))
  //       setNotices(postData)
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
      <div>
        {correct.map((notice, index) => {
          const matchingBook = allBooks.filter(
            (book) => book.id === notice.bookId
          )

          return

          // <Book
          //       key={notice.id}
          //       notice={notice}
          //       matchingBook={matchingBook[0]}
          //     />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default AllUserBooks
