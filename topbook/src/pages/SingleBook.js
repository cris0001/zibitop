import React, { useContext, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar, Footer } from '../components'
import defaultImg from '../images/defaultImg.jpg'
import top from '../images/top.jpg'
import { BooksContext } from '../context/BooksContext'
import { AuthContext } from '../context/AuthContext'
import { addNotification } from '../notification'

import { db } from '../firebase'

const SingleBook = () => {
  const [singleBook, setSingleBook] = useState({})
  const {} = useContext(BooksContext)
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  const history = useHistory()
  const [disable, setDisable] = useState(false)

  const userIdTo = history.location.state.userIdTo
  const noticeId = history.location.state.noticeId

  console.log(noticeId)

  const sendBookRequest = () => {
    // console.log('xd')
    // console.log(userIdTo)
    // console.log('xd2')
    // console.log(user.uid)
    // db.collection('requestsUser').add({
    //   userIdFrom: user.id,
    //   userIdTo: userIdTo,
    //   status: 'wysłane',
    // })
    if (user.uid != userIdTo) {
      db.collection('requestsUser').add({
        id,
        noticeId,
        userIdFrom: user.uid,
        userIdTo: userIdTo,
        status: 'wysłane',
        isbn: singleBook.isbn,
        title: singleBook.title,
      })
      addNotification('wysłano zapytanie', 'success')
      changeNoticeStatus()
    } else {
      addNotification('ta książka należy do Ciebie', 'danger')
      return null
    }
  }

  const changeNoticeStatus = async () => {
    const reqRef = db.collection('notices').doc(noticeId)
    const res = await reqRef.update({ status: 'oczekuje' })
  }

  useEffect(() => {
    const fetchSingleBook = async (id) => {
      const booksRef = db.collection('books').doc(id)
      const doc = await booksRef.get()
      let data = {}
      if (!doc.exists) {
        console.log('No such document!')
      } else {
        data = doc.data()
        setSingleBook(data)

        //console.log('Document data:', doc.data())
      }
    }

    fetchSingleBook(id)

    console.log('single book')
  }, [id])

  useEffect(() => {
    console.log(singleBook)
  }, [singleBook])

  return (
    <Wrapper>
      <Navbar />
      <div className='section section-center'>
        <div className='content'>
          <div>
            <img
              src={singleBook.img ? singleBook.img.smallThumbnail : defaultImg}
              alt=''
              className='img'
            />
          </div>

          <div className='info'>
            <div className='bookInfo'>
              <div className='item'>
                <p>Tytuł:</p>
                <h2>{singleBook.title}</h2>
              </div>
              <div className='item'>
                <p>Autor:</p>
                <h2>{singleBook.author}</h2>
              </div>
              <div className='item'>
                <p>{singleBook.publishedDate ? 'Data wydania:' : null}</p>
                <h2>{singleBook.publishedDate}</h2>
              </div>
              <div className='item'>
                <p>{singleBook.publisher ? 'Wydawnictwo:' : null}</p>
                <h2>{singleBook.publisher}</h2>
              </div>
            </div>
            {user && disable === false ? (
              <button
                disabled={disable}
                onClick={() => {
                  setDisable(true)
                  sendBookRequest()
                }}
                className='btn btn2'
              >
                Poproś o odbiór
              </button>
            ) : null}
          </div>
        </div>

        <div className='map'>
          <img className='localization' src={top} alt='' />
        </div>
      </div>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;

  .map {
    height: 100%;
    width: 350px;
    margin: auto;
  }

  .localization {
    width: 100%;
    height: 100%;
  }
  .img {
    height: 100%;
    width: 300px;
    margin: auto;
  }
  .bookInfo {
    text-align: center;
    margin-top: 2rem;
  }
  .content {
    margin-bottom: 5rem;
  }
  .btn {
    margin-top: 2rem;
    width: 200px;
    background: #0a1d37;
    color: white;
    border-radius: 10px;
    align-items: center;
    font-size: 1rem;
    border: none;
    padding: 0.1rem 0;
  }

  .info {
    text-align: center;
  }

  @media (min-width: 600px) {
    .img {
      height: 100%;
      width: 250px;
    }

    .map {
      height: 100%;
      width: 450px;
      margin: auto;
      margin-top: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .content {
      display: grid;
      grid-template-columns: 45% 1fr;
      gap: 4rem;
    }
    .bookInfo {
      margin-top: 2rem;
      text-align: center;
    }

    .btn2 {
      width: 100%;
    }
  }

  @media (min-width: 900px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10rem;
    }

    .map {
      height: 100%;
      width: 660px;
    }

    .img {
      width: 100%;
      height: 600px;
      //topmargin-top: 3rem;
    }
    a {
      text-decoration: none;
      color: white;
    }

    .info {
    }

    .item p {
      font-size: 1.56rem;
    }
    .item h2 {
      font-size: 2rem;
    }
    .bookInfo {
      padding: 2.9rem 0;
      text-align: center;
      //margin-top: 2rem;
    }

    .item {
      // margin-bottom: 2.875rem;
    }

    .btn2 {
      width: 100%;
      height: 2.5rem;
    }
  }
`

export default SingleBook
