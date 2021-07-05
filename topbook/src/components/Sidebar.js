import React, { useState } from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

const Sidebar = ({ closeSidebar, isSidebarOpen }) => {
  console.log(isSidebarOpen)

  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <button className='close-btn' onClick={closeSidebar}>
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
    width: 30%;
    height: 100%;
    background: #0a1d37;
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 1rem;
    box-shadow: var(--clr-red-dark);
    transition: var(--transition);
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

export default Sidebar