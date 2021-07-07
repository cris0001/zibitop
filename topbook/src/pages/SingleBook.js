import React from 'react'

import styled from 'styled-components'
import { Navbar, Footer } from '../components'
import singleBook from '../images/singleBook.jpg'
import top from '../images/top.jpg'

const SingleBook = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className='section section-center'>
        <div className='content'>
          <div>
            <div className='img'>
              <img src={singleBook} alt='' className='img' />
            </div>
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
            </div>
            <button className='btn btn2'>Poproś o odbiór</button>
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
