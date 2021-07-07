import React, { useState } from 'react'
import styled from 'styled-components'
import { list } from '../utils/constans'

import Modal from './Modal'

const UserIncMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => {
    setIsModalOpen(false)
    console.log('close')
  }

  return (
    <Wrapper className='section section-center'>
      <Modal closeModal={closeModal} isModalOpen={isModalOpen} />
      <div>
        {list.map((item) => {
          const { isbn, title, author, id, date } = item
          return (
            <div key={id}>
              <div className='item' key={id}>
                <div className='info'>
                  <p>ISBN:</p>
                  <p>Tytuł:</p>
                  <p>Autor:</p>
                  <p>Data:</p>
                </div>
                <div className='text'>
                  <p>{isbn}</p>
                  <p>{title}</p>
                  <p>{author}</p>
                  <p>{date}</p>
                </div>

                <div className='buttons'>
                  <button className='accept'>akceptuj</button>
                  <button className='decline'>odrzuć</button>
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

  button {
    border: none;
    border: 5px;
    padding: 0.1rem 0.5rem;
    font-size: 1rem;
  }
  .accept {
    background: #52e361;
  }
  .decline {
    background: #ee2727;
  }

  .item {
    display: grid;
    grid-template-columns: auto auto;
    text-align: center;
    margin-top: 4rem;
  }

  .green {
    color: green;
  }
  .red {
    color: red;
  }
  .icons {
    font-size: 1.5rem;
  }

  .item div:nth-child(3) {
    grid-column: 2;
    grid-row: 2;
    margin-top: 0.5rem;
  }

  @media (min-width: 500px) {
    .item {
      display: grid;
      grid-template-columns: auto auto auto;
      margin-top: 2rem;
      justify-content: space-between;
    }

    .item div:nth-child(3) {
      grid-column: 3;
      grid-row: 1;
    }

    .icons {
      font-size: 1.5rem;
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

  @media (min-width: 600px) {
    button {
      font-size: 1.5rem;
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

    p:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    .text {
      font-size: 1.5rem;
    }
    .info {
      font-size: 1.5rem;
    }
  }
`

export default UserIncMenu
