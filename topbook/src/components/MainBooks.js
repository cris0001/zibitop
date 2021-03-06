import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BooksContext } from '../context/BooksContext'
import Book from './Book'

const MainBooks = () => {
  const { allBooks, notices } = useContext(BooksContext)

  return (
    <Wrapper className='section'>
      <div className='section-center'>
        <h1>Dostępne egzemplarze</h1>
        <div className='content flex'>
          {notices
            .map((notice) => {
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
            })
            .slice(0, 3)}
        </div>
        <div className='btn'>
          <Link className='all-books' to='/books'>
            Pokaż wszystkie
          </Link>
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
    gap: 2rem;
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

  .all-books {
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
    margin-bottom: 0;
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
      gap: 1rem;
    }

    .flex :not(:last-child) {
    }

    img {
      background-repeat: cover;
      min-width: 100px;
      height: 293px;
    }
  }
  h1 {
    margin-bottom: 6rem;
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

    @media (min-width: 1170px) {
      img {
        width: 266px;
        height: 337px;
      }

      .text {
        max-width: 260px;

        text-align: center;
      }
    }
  }
`

export default MainBooks
