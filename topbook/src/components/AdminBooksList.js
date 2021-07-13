import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'

import { FaEye } from 'react-icons/fa'
import Modal from './Modal'
import { BooksContext } from '../context/BooksContext'

const AdminBooksList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selected, setSelected] = useState()
  const { allBooks } = useContext(BooksContext)

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
      {allBooks.map((item) => {
        return (
          <div key={item.id} className='content'>
            <div className='grid'>
              <h2>ISBN:</h2>
              <h2>{item.isbn}</h2>
              <div className='icon'>
                <button
                  className='open-btn'
                  onClick={() => {
                    setSelected(item)

                    openModal()
                  }}
                >
                  <FaEye />
                </button>
              </div>
            </div>
            <hr />
          </div>
        )
      })}
      <Modal
        selected={selected}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />
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

export default AdminBooksList
