import React, { useState } from 'react'
import styled from 'styled-components'
import { UserSidebar, UsersReqAdmin } from '../components'
import { Link } from 'react-router-dom'
import { FaBars, FaHome } from 'react-icons/fa'

const UsersReqToAdmin = () => {
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
      <UsersReqAdmin />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .nav {
    color: var(--main);
    background: transparent;
    border: none;
    position: absolute;
    top: 1rem;
    left: 2rem;
    font-size: 2rem;
  }
  .sidebar-toggle {
    position: absolute;
    top: 1rem;
    right: 2rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
  }
`
export default UsersReqToAdmin
