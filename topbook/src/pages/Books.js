import React, { useEffect } from 'react'
import { Navbar, BooksList } from '../components'

const Books = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Navbar />
      <BooksList />
      {/* <Footer /> */}
    </div>
  )
}

export default Books
