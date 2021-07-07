import React, { useState } from 'react'
import styled from 'styled-components'
import { list } from '../utils/constans'
import { FaEye } from 'react-icons/fa'
import Modal from './Modal'

const UserBooksMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    console.log('open')
  }
  const closeModal = () => {
    setIsModalOpen(false)
    console.log('close')
  }

  return (
    <Wrapper className='section section-center'>
      {list.map((item) => {
        return (
          <div key={item.id} className='content'>
            <div className='grid'>
              <h2>ISBN: {item.isbn}</h2>
              <h2>Data: {item.date}</h2>
              <div className='icon'>
                <button className='open-btn' onClick={openModal}>
                  <FaEye />
                </button>
              </div>
            </div>
            <hr />
          </div>
        )
      })}
      <Modal closeModal={closeModal} isModalOpen={isModalOpen} />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: 80vh;

  .grid {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
  }
  .icon {
    font-size: 0.5rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  .open-btn {
    font-size: 1.75rem;
    background: transparent;
    border-color: transparent;
    color: black;
    cursor: pointer;
  }

  @media (min-width: 500px) {
    .icon {
      font-size: 1.5rem;
    }

    .icon {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    hr {
      width: 100%;
    }
  }
`

export default UserBooksMenu
