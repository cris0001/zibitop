import React, { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'

const Modal = ({ closeModal, isModalOpen, selected }) => {
  console.log(selected)

  return (
    <Wrapper>
      <div
        className={`${
          isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
      >
        <div className='modal-container'>
          {selected ? (
            <>
              <h3>{selected.author}</h3>
              <h3>{selected.title}</h3>
              <h3>{selected.id}</h3>
            </>
          ) : null}
          <button className='close-modal-btn' onClick={closeModal}>
            <FaTimes></FaTimes>
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;

    visibility: hidden;
    z-index: -1;
  }

  .show-modal {
    visibility: visible;
    z-index: 10;
  }
  .modal-container {
    background: white;
    border-radius: 10px;
    width: 90vw;
    height: 30vh;
    max-width: 700px;
    text-align: center;
    display: grid;
    place-items: center;
    position: relative;
  }
  .close-modal-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: black;
    cursor: pointer;
  }
`

export default Modal
