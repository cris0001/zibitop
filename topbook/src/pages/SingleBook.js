import React, { useContext, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Navbar, Footer, Load } from '../components'
import defaultImg from '../images/defaultImg.jpg'
import { BooksContext } from '../context/BooksContext'
import { AuthContext } from '../context/AuthContext'
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

  const userIdTo = history.location.state.userIdTo
  const noticeId = history.location.state.noticeId
  const noticeStreet = history.location.state.noticeStreet
  const noticeCode = history.location.state.noticeCode
  const noticeNumber = history.location.state.noticeNumber
  const userId = history.location.state.userId

  const adres = `${noticeStreet} ${noticeNumber}, ${noticeCode}`

  Geocode.setApiKey(process.env.REACT_APP_GOOGLEMAPS_KEY)

  Geocode.fromAddress(adres).then(
    (response) => {
      setLat(response.results[0].geometry.location.lat)
      setLng(response.results[0].geometry.location.lng)
    },
    (error) => {}
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
    return <Load />
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
              {/* <div className='item'>
                <p>{singleBook.publishedDate ? 'Data wydania:' : null}</p>
                <h2>{singleBook.publishedDate}</h2>
              </div> */}
              {/* <div className='item'>
                <p>{singleBook.publisher ? 'Wydawnictwo:' : null}</p>
                <h2>{singleBook.publisher}</h2>
              </div> */}
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
            <div className='btns'>
              {showMap ? null : (
                <button className='btn2 btn' onClick={() => setShowMap(true)}>
                  pokaż mapę
                </button>
              )}
            </div>
            <Link
              className='all-books-link'
              to={{
                pathname: `/userbooks/${userId}`,
                // state: {
                //   userIdTo: notice.userId,
                //   noticeId: notice.id,
                //   noticeStreet: notice.streetNbr,
                //   noticeCode: notice.postCode,
                //   noticeNumber: notice.number,
                // },
              }}
            >
              Zobacz inne książki tego użytkownika
            </Link>
          </div>
        </div>

        {showMap ? (
          <div className='location'>
            {adres}
            <Map lat={lat} lng={lng} />
          </div>
        ) : null}
      </div>
      <div className='pag'></div>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;

  .all-books-link {
    color: var(--main);
    font-size: 1.1rem;
    margin-top: 30px;
    text-decoration: underline;
  }
  .btn2 {
    margin-bottom: 1rem;
  }

  img {
    display: flex;
    justify-content: center;
  }

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
    margin-bottom: 4rem;
  }
  .content {
    margin-bottom: 5rem;
    margin-top: 5rem;
  }
  .btn {
    // margin-top: 2rem;
    width: 100%;
    background: #0a1d37;
    color: white;
    border-radius: 10px;
    align-items: center;
    font-size: 1.1rem;
    border: none;
    padding: 0.2rem 0;
  }

  .info {
    text-align: center;
    margin-top: 1rem;
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
      margin-bottom: 1rem;
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

    .info {
    }

    .btn {
      margin-top: 1rem;
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
