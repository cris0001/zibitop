import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/constans'

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
        <nav className='links'>
          <ul>
            {links.map((link) => {
              const { id, text, icon, url } = link
              return (
                <li key={id} className='flex'>
                  <Link to={url}>
                    <div className='icon'>{icon}</div>
                    <div className='text'>{text}</div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
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
    padding: 2.8rem 2.5rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  svg {
    font-size: 2rem;
  }

  ul {
    text-decoration: none;
    list-style: none;
    text-align: center;
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

  .logo {
    font-size: 1.2rem;
  }
  h2 {
    color: white;
  }
  .text {
    font-size: 1.5rem;
    margin-bottom: 2rem;
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
