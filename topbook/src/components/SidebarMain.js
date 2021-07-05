import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

const SidebarMain = ({ isOpen, closePanel }) => {
  return (
    <Wrapper>
      <aside className={`${isOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
          <div className='logo'>
            <h2>TopBook</h2>
          </div>
          <button className='close-btn' onClick={closePanel}>
            <FaTimes />
          </button>
        </div>
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: white;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: #0a1d37;
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
    transform: translate(-100%);
  }
  .show-sidebar {
    transform: translate(0);
  }

  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: white;
    cursor: pointer;

    margin-top: 0.8rem;
  }
`

export default SidebarMain
