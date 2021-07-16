import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { user, login } from '../utils/constans'
import app from '../firebase'

const UserSidebar = ({ closeS, open }) => {
  return (
    <Wrapper>
      <aside className={`${open ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
          <button className='close-btn' onClick={closeS}>
            <FaTimes />
          </button>
        </div>

        <div>
          {user.map((item) => {
            const { id, url, text, icon } = item

            return (
              <div key={id} className='links'>
                <Link onClick={closeS} className='item' to={url}>
                  <div className='icon'>{icon}</div>
                  <div className='text'>{text}</div>
                </Link>
              </div>
            )
          })}
        </div>

        <div className='login-links login'>
          <button>
            <Link className='login-item' to='/'>
              Strona Główna
            </Link>
          </button>
          <button onClick={() => app.auth().signOut()}>
            <Link className='login-item' to='/'>
              Wyloguj
            </Link>
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
    padding: 1.2rem 3.3rem;
  }
  button {
    background: transparent;
    border: none;
  }

  .login-links {
    display: flex;
    flex-direction: column;
  }

  .links {
    margin-top: 5rem;
  }
  .item {
    display: grid;
    grid-template-columns: auto 1fr;
    margin-left: 1rem;
    gap: 2rem;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .login-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1rem;
    gap: 2rem;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .login-icon {
    font-size: 1.5rem;
    text-align: center;
  }

  .item svg {
    font-size: 2rem;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 350px;
    height: 100%;
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
    position: absolute;
    font-size: 2rem;
    top: 5px;
    right: 20px;
    background: transparent;
    border-color: transparent;
    color: white;
    cursor: pointer;
    text-align: right;
    margin-top: 0.8rem;
  }
`

export default UserSidebar
