import React from 'react'
import styled from 'styled-components'
import { list } from '../utils/constans'
import { FaTrash, FaPlusCircle } from 'react-icons/fa'

const AdminBooksList = () => {
  return (
    <Wrapper className='section section-center'>
      <div>
        {list.map((item) => {
          const { isbn, title, author, id } = item
          return (
            <div>
              <div className='item' key={id}>
                <div className='info'>
                  <p>ISBN:</p>
                  <p>Tytuł:</p>
                  <p>Autor:</p>
                </div>
                <div className='text'>
                  <p>{isbn}</p>
                  <p>{title}</p>
                  <p>{author}</p>
                </div>

                <div className='icons'>
                  <FaTrash className='red' />
                  <FaPlusCircle className='green' />
                </div>
                <br />
              </div>
              <hr></hr>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: 100vh;

  .item {
    display: grid;
    grid-template-columns: auto auto;
  }
  @media (min-width: 500px) {
    .item {
      display: grid;
      grid-template-columns: auto auto auto;
      margin-top: 2rem;
      justify-content: space-between;
    }

    .icons {
      font-size: 1.5rem;
    }
    .red {
      color: red;
    }

    p:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    .text {
      font-size: 1rem;
    }
    .info {
      font-size: 1rem;
    }
    .green {
      color: green;
    }
  }

  @media (min-width: 500px) {
    .text {
      font-size: 1.24rem;
    }
    .info {
      font-size: 1.24rem;
    }
    .icons {
      font-size: 1.75rem;
    }
  }
  @media (min-width: 905px) {
    .item {
      display: grid;
      grid-template-columns: auto auto auto;
      margin-top: 2rem;
      justify-content: space-between;
    }

    .icons {
      font-size: 2rem;
    }
    .red {
      color: red;
    }

    p:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    .text {
      font-size: 1.5rem;
    }
    .info {
      font-size: 1.5rem;
    }
    .green {
      color: green;
    }
  }
`

export default AdminBooksList
