import React, { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'

const ContactInfo = ({ closeModal, isModalOpen, info }) => {
  console.log(info)
  return (
    <Wrapper>
      <div
        className={`${
          isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
      >
        <div className='modal-container'>
          {info ? (
            <>
              <div className='contact-info'>
                <span>adres: </span>
                <h3>{`${info.streetNbr}, ${info.number}, ${info.postCode}`}</h3>
              </div>
              <div className='contact-info'>
                <span>kontakt: </span>
                <h3>{`${info.email}, ${info.phone}`}</h3>
              </div>
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
  .contact-info {
    color: var(--main);
  }
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

  .flex {
    display: grid;
    grid-template-columns: auto auto;
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

export default ContactInfo
