import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import defaultImg from '../images/defaultImg.jpg'

const Book = ({ matchingBook, notice }) => {
  const { title, author, id } = matchingBook

  if (notice.status === 'wolna') {
    return (
      <Wrapper>
        <div className='container'>
          <Link
            className='link'
            to={{
              pathname: `/books/${id}`,
              state: {
                userId: notice.userId,
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
  margin-top: 5rem;
  .container {
    position: relative;
    background: white;
    box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.25);
    margin: 0 2rem 0 2rem;
  }

  .container :hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }

  p {
    padding: 0.1rem 0;
    margin-left: 1rem;
  }

  .text {
    font-size: 1rem;
    margin-top: 0.5rem;
    min-height: 70px;
    display: flex;
    width: 247px;
    flex-direction: column;

    align-items: center;
  }

  .link {
    min-width: 300px;
  }

  @media (min-width: 540px) {
    margin-top: 0rem;
  }
`
export default Book
