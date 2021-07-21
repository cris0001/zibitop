import React, { useState } from 'react'
import styled from 'styled-components'
import { UserSidebar, UserIncMenu } from '../components'
import { Link } from 'react-router-dom'
import { FaBars, FaHome } from 'react-icons/fa'

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
      <Link className='nav' to='/'>
        {' '}
        <FaHome />
      </Link>
      <UserSidebar openS={openS} closeS={closeS} open={open} />
      {open ? null : (
        <button className='sidebar-toggle' onClick={openS}>
          <FaBars />
        </button>
      )}
      <UserIncMenu />
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
    position: fixed;
    top: 2rem;
    right: 3rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
  }
`
export default User
