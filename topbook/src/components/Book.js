import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BooksContext } from '../context/BooksContext'
import { FaSearch } from 'react-icons/fa'
import defaultImg from '../images/defaultImg.jpg'
import { AuthContext } from '../context/AuthContext'

const Book = ({ matchingBook, notice }) => {
  const { title, author, id } = matchingBook
  const { user } = useContext(AuthContext)

  if (notice.status === 'wolna') {
    return (
      <Wrapper>
        <div className='container'>
          {/* <p>ogloszenie: {notice.id}</p>
          <p>ksiazka: {id}</p>
          <p>kto dodal: {notice.userId}</p> */}
          <Link
            className='link'
            to={{
              pathname: `books/${id}`,
              state: {
                userIdTo: notice.userId,
                noticeId: notice.id,
                noticeStreet: notice.streetNbr,
                noticeCode: notice.postCode,
                noticeNumber: notice.number,
              },
            }}
          >
            <img
              src={
                matchingBook.img ? matchingBook.img.smallThumbnail : defaultImg
              }
              alt=''
            />
          </Link>
          <div className='text'>
            <p>{title}</p>
            <p>{author}</p>
          </div>
        </div>
      </Wrapper>
    )
  } else return null
}
const Wrapper = styled.section`
  .container {
    position: relative;
    background: white;
    box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.25);
  }

  .container :hover {
    transform: scale(1.2);
    transition: transform 0.3s ease-in-out;
  }

  p {
    padding: 0.1rem 0;
    text-align: center;
  }

  .text {
    font-size: 1rem;
    margin-top: 0.5rem;
    min-height: 70px;
    display: flex;
    flex-direction: column;

    align-items: center;
  }

  .link {
    min-width: 300px;
  }

  /* img {
    width: 100%;
    display: block;
    object-fit: cover;
  } */
  /* .link {
    position: absolute;
    top: 0;
    left: 0;
    //transform: translate(-50%, -50%);
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    opacity: 0;
    cursor: pointer;
  } */
`
export default Book
