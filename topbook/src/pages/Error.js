import React, { useContext, useRef, useEffect } from 'react'
import firebase from '../firebase'
import { db } from '../firebase'
import { BooksContext } from '../context/BooksContext'
import { Spiner } from '../components'
import Map from '../components/Map'
import Geocode from 'react-geocode'
import { Load } from '../components'
import { ReactComponent as Book } from '../images/book.svg'
import styled from 'styled-components'
import gsap from 'gsap'

const Error = () => {
  const wrapper = useRef(null)

  useEffect(() => {
    const [elements] = wrapper.current.children

    const red = elements.getElementById('red')
    const yellow = elements.getElementById('yellow')
    const green = elements.getElementById('green')
    const blue = elements.getElementById('blue')
    const blue2 = elements.getElementById('blue2')
    gsap.set([red, yellow, green, blue], { autoAlpha: 0 })

    const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power3.inOut' } })

    tl.fromTo(
      blue2,
      { x: '+=350' },
      { duration: 0.3, x: '-=350', autoAlpha: 1 }
    )
      .fromTo(
        green,
        { x: '-=350' },
        { duration: 0.3, x: '+=350', autoAlpha: 1 }
      )
      .fromTo(blue, { x: '+=350' }, { duration: 0.3, x: '-=350', autoAlpha: 1 })
      .fromTo(
        yellow,
        { x: '-=350' },
        { duration: 0.3, x: '+=350', autoAlpha: 1 }
      )
      .fromTo(red, { x: '+=350' }, { duration: 0.3, x: '-=350', autoAlpha: 1 })
  })

  return (
    <Wrapper>
      <div ref={wrapper} className='app'>
        <Book />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .app {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    align-items: center;
  }
`

export default Error
