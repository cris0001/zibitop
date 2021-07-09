import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { books } from '../utils/constans'
import { BooksContext } from '../context/BooksContext'
import Book from './Book'

const MainBooks = () => {
  const { allBooks } = useContext(BooksContext)
  return (
    <Wrapper className='section'>
      <div className='section-center'>
        <h1>Dostępne egzemplarze</h1>
        <div className='content flex'>
          {allBooks
            .map((book) => {
              return <Book key={book.id} {...book} />
            })
            .slice(0, 4)}
        </div>
        <div className='btn'>
          <Link to='/books'>Pokaż wszystkie książki</Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 40vh;
  padding-bottom: 5rem;

  background: var(--bcgDark);
  .flex {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
  }

  .btn {
    margin-top: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    width: auto;
    background: #0a1d37;
    color: white;
    border-radius: 7px;
    align-items: center;
    font-size: 1.5rem;
    border: none;
    padding: 0.25rem 3rem;
  }

  h1 {
    font-size: 2.75rem;
    text-align: center;
    font-weight: 300;
    margin-bottom: 6rem;
  }

  .info {
    text-align: center;
    padding-bottom: 1rem;
    font-size: 1.0625rem;
    margin-top: 0.5rem;
  }

  img {
    width: 267px;
    height: 320px;
  }

  article {
    margin-bottom: 2rem;
    background: white;
    box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 540px) {
    .flex {
      display: grid;
      grid-template-columns: auto auto;
      gap: 5rem;
    }

    img {
      background-repeat: cover;
      width: 217px;
      height: 273px;
    }
  }

  @media (min-width: 800px) {
    .flex {
      grid-template-columns: auto auto;
    }
    img {
      width: 267px;
      height: 320px;
    }
  }

  @media (min-width: 1170px) {
    .flex {
      grid-template-columns: auto auto auto auto;
    }
    .content {
      margin: 0 5rem;
    }
    img {
      width: 297px;
      height: 350px;
    }

    @media (min-width: 1170px) {
      img {
        width: 217px;
        height: 257px;
      }
    }
  }
`

export default MainBooks
