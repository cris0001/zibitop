import React, { useState } from 'react'
import styled from 'styled-components'
import { UserSidebar, UserReqMenu } from '../components'
import { FaBars } from 'react-icons/fa'

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
      <UserSidebar openS={openS} closeS={closeS} open={open} />
      {open ? null : (
        <button className='sidebar-toggle' onClick={openS}>
          <FaBars />
        </button>
      )}
      <UserReqMenu />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .sidebar-toggle {
    position: fixed;
    top: 2rem;
    left: 3rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
  }
`
export default User
