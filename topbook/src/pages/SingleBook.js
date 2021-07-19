import React, { useContext, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar, Footer, Spiner } from '../components'
import defaultImg from '../images/defaultImg.jpg'

import { BooksContext } from '../context/BooksContext'
import { AuthContext, role } from '../context/AuthContext'
import { addNotification } from '../notification'
import { db } from '../firebase'
import Geocode from 'react-geocode'
import Map from '../components/Map'

const SingleBook = () => {
  const [singleBook, setSingleBook] = useState({})
  const [lat, setLat] = useState()
  const [lng, setLng] = useState()
  const [showMap, setShowMap] = useState(false)
  const { loading, setLoading } = useContext(BooksContext)
  const { user, role } = useContext(AuthContext)
  const { id } = useParams()
  const history = useHistory()
  const [disable, setDisable] = useState(false)
  console.log(id)

  const userIdTo = history.location.state.userIdTo
  const noticeId = history.location.state.noticeId
  const noticeStreet = history.location.state.noticeStreet
  const noticeCode = history.location.state.noticeCode
  const noticeNumber = history.location.state.noticeNumber

  const adres = `${noticeStreet} ${noticeNumber}, ${noticeCode}`

  console.log(noticeId)

  Geocode.setApiKey('AIzaSyCnT_oyJjvQLDmRokFP62CuAe7i_btZT6M')

  Geocode.fromAddress(adres).then(
    (response) => {
      // const { lat, lng } = response.results[0].geometry.location
      // console.log(response.results[0].geometry.location)
      setLat(response.results[0].geometry.location.lat)
      setLng(response.results[0].geometry.location.lng)
    },
    (error) => {
      console.error(error)
    }
  )

  const sendBookRequest = () => {
    if (user.uid !== userIdTo) {
      db.collection('requestsUser').add({
        id,
        noticeId,
        userIdFrom: user.uid,
        userIdTo: userIdTo,
        status: 'wysłane',
        isbn: singleBook.isbn,
        title: singleBook.title,
      })
      addNotification(
        'Prośba o odbiór książki',
        'zapytanie zostało wysłane',
        'success'
      )
      changeNoticeStatus()
    } else {
      addNotification(
        'Prośba o odbiór książki',
        'ta książka należy do Ciebie',
        'danger'
      )
      return null
    }
  }

  const changeNoticeStatus = async () => {
    const reqRef = db.collection('notices').doc(noticeId)
    await reqRef.update({ status: 'oczekuje' })
  }

  useEffect(() => {
    const fetchSingleBook = async (id) => {
      setLoading(true)
      const booksRef = db.collection('books').doc(id)
      const doc = await booksRef.get()
      let data = {}
      if (!doc.exists) {
        console.log('No such document!')
        setLoading(false)
      } else {
        data = doc.data()
        setSingleBook(data)
        setLoading(false)

        //console.log('Document data:', doc.data())
      }
    }
    fetchSingleBook(id)
  }, [])

  useEffect(() => {
    console.log(singleBook)
  }, [singleBook])

  if (loading) {
    return <Spiner />
  }

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
            {user && disable === false && role !== 'admin' ? (
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
            {showMap ? null : (
              <button className='btn2 btn' onClick={() => setShowMap(true)}>
                pokaż mapę
              </button>
            )}
          </div>
        </div>

        {showMap ? (
          <div className='location'>
            {adres}
            <Map lat={lat} lng={lng} />
          </div>
        ) : null}
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
