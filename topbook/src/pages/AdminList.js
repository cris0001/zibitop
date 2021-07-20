import React, { useState } from 'react'
import styled from 'styled-components'
import { Sidebar, AdminBooksList } from '../components'
import { Link } from 'react-router-dom'
import { FaBars, FaArrowLeft, FaHome } from 'react-icons/fa'

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
      <AdminBooksList />
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
export default Admin
