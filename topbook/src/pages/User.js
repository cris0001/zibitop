import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaBars, FaHome } from 'react-icons/fa'
import { UserSidebar, UserBooksMenu } from '../components'

const User = () => {
  const [open, setOpen] = useState(false)

  const openS = () => {
    setOpen(true)
  }

  const closeS = () => {
    setOpen(false)
  }

  return (
    <Wrapper>
      <div className='flex section-center'>
        <Link className='nav' to='/'>
          {' '}
          <FaHome />
        </Link>
        {open ? null : (
          <button className='sidebar-toggle' onClick={openS}>
            <FaBars />
          </button>
        )}{' '}
      </div>
      <UserSidebar openS={openS} closeS={closeS} open={open} />
      <UserBooksMenu />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .flex {
    display: flex;
    justify-content: space-between;
  }

  .nav {
    color: var(--main);
    background: transparent;
    border: none;
    position: fixed;
    top: 2rem;
    left: 3rem;
    font-size: 2rem;
  }
  .sidebar-toggle {
    position: absolute;
    top: 2rem;
    right: 3rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
  }
`
export default User
