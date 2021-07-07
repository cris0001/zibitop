import React, { useState } from 'react'
import styled from 'styled-components'
import {
  AdminMenu,
  NewBook,
  Sidebar,
  AdminAddBook,
  AdminRequest,
  AdminBooksList,
} from '../components'
import { FaBars } from 'react-icons/fa'

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <Wrapper>
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
export default AdminSidebar
