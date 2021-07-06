import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar, Footer } from '../components'
import singleBook from '../images/singleBook.jpg'

const SingleBook = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className='section section-center'>
        <div className='content'>
          <div>
            <img src={singleBook} alt='' className='img' />
            <button className='btn btn1'>
              <Link to='/'>Powrót na stronę główną</Link>
            </button>
          </div>

          <div className='info'>
            <div className='bookInfo'>
              <div className='item'>
                <p>Tytuł:</p>
                <h2>102 metry</h2>
              </div>
              <div className='item'>
                <p>Autor:</p>
                <h2>Adam Małysz</h2>
              </div>
              <div className='item'>
                <p>Rok wydania:</p>
                <h2>1997</h2>
              </div>
              <div className='item'>
                <p>Wydawnictwo:</p>
                <h2>Sowa</h2>
              </div>

              <button className='btn btn2'>Poproś o odbiór</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  @media (min-width: 900px) {
    .content {
      display: grid;
      grid-template-columns: 40% 1fr;
      gap: 15rem;
    }

    .img {
      width: 100%;
      height: 600px;
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
      font-size: 2.375rem;
    }
    .bookInfo {
      padding: 2.9rem 0;
      text-align: center;
    }

    .item {
      margin-bottom: 2.875rem;
    }

    .btn {
      margin-top: 2em;
      width: 300px;
      background: #0a1d37;
      color: white;
      border-radius: 10px;
      align-items: center;
      font-size: 1.75rem;
      border: none;
      padding: 0.1rem 0;
    }

    .btn1 {
      width: 100%;
      margin-top: 4rem;
    }
    .btn2 {
      width: 100%;
    }
  }
`

export default SingleBook
