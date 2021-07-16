import styled from 'styled-components'
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaUserAlt } from 'react-icons/fa'
import SidebarMain from './SidebarMain'
import LoginButton from './LoginButton'
import { links } from '../utils/constans'
import { AuthContext } from '../context/AuthContext'
import app from '../firebase'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useContext(AuthContext)

  const openPanel = () => {
    setIsOpen(true)
    console.log(isOpen)
  }

  const closePanel = () => {
    setIsOpen(false)
  }

  return (
    <Wrapper>
      <SidebarMain isOpen={isOpen} closePanel={closePanel} />
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='logo'>
            <Link to='/'>
              <h1>TopBook</h1>
            </Link>
          </div>

          <button onClick={openPanel} className='nav-toggle' type='button'>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id} className='nav'>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
        <div className='login'>
          {user ? (
            <div className='bb'>
              <button>
                <Link to='/user'>profil</Link>
              </button>
              <button onClick={() => app.auth().signOut()}>wyloguj</button>
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f5f6;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1113px;
  }
  a {
    text-decoration: none;
  }

  .bb {
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
  }
  button {
    background: var(--main);
    color: white;
    border-radius: 10px;
    align-items: center;
    font-size: 1.1rem;
    border: none;
    padding: 0.3rem 0.5rem;
  }

  .login {
    display: none;
  }

  .logo {
    text-decoration: none;
  }

  h1 {
    font-size: 2.5rem;
    color: var(--main);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .login {
      display: flex;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;

      ul {
      }

      li {
        list-style: none;
      }
      li {
        margin-right: 5rem;
      }

      a {
        font-size: 1.4rem;
        text-decoration: none;
        color: var(--main);
      }
      a:hover {
        border-bottom: 1px solid black;
      }
    }
  }
`

export default Navbar
