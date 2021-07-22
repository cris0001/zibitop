import React, { useState } from 'react'
import styled from 'styled-components'
import { Sidebar, AdminRequest } from '../components'
import { Link } from 'react-router-dom'
import { FaBars, FaHome } from 'react-icons/fa'

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <Wrapper>
      <Link className='nav' to='/'>
        {' '}
        <FaHome />
      </Link>
      <Sidebar
        openSidebar={openSidebar}
        closeSidebar={closeSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      {isSidebarOpen ? null : (
        <button className='sidebar-toggle' onClick={openSidebar}>
          <FaBars />
        </button>
      )}
      <AdminRequest />
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
export default Admin
