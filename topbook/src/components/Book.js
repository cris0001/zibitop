import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BooksContext } from '../context/BooksContext'
import { FaSearch } from 'react-icons/fa'

const Book = ({
  isbn,
  title,
  author,
  description,
  publisher,
  img,
  publishedDate,
  id,
}) => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={img.medium} alt='' />
        <Link className='link' to={`books/${id}`}>
          <FaSearch />
        </Link>
        <div className='text'>
          <p>{title}</p>
          <p>{author}</p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .container {
    position: relative;
    background: white;
    box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.25);
  }

  p {
    padding: 0.1rem 0;
    text-align: center;
  }

  .text {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  img {
    width: 200px;
    display: block;
    object-fit: cover;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    opacity: 0;
    cursor: pointer;
  }
`
export default Book
