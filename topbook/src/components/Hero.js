import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { ReactComponent as Book } from '../images/mainbook.svg'
import gsap from 'gsap'

const Hero = () => {
  const wrapper = useRef(null)
  const wrapper2 = useRef(null)

  useEffect(() => {
    const [elements] = wrapper.current.children
    const book = elements.getElementById('book')

    gsap.set([book], { autoAlpha: 0 })
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
    tl.fromTo(book, { y: '-=650' }, { duration: 1.5, y: '+=650', autoAlpha: 1 })
  }, [])

  useEffect(() => {
    const button = wrapper2.current.children
    console.log(button)

    gsap.set([button], { autoAlpha: 0 })

    const tl = gsap.timeline({ defaults: { ease: 'power4.inOut' } })
    tl.fromTo(
      button,
      { x: '+=150' },
      { duration: 0.5, x: '-=150', autoAlpha: 1 }
    )
  }, [])

  return (
    <Wrapper className='section'>
      <div className='section-center flex '>
        <div className='img' ref={wrapper}>
          <Book />
        </div>
        <div className='text'>
          <h1>TopBook</h1>
          <h2>
            Masz niepotrzebną książkę?
            <br />
            podziel się nią z innymi
          </h2>
          <div ref={wrapper2}>
            <button className='btn'>
              <Link to='/searchbook'>Dodaj książkę</Link>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--bcgLight);
  min-height: 30vh;
  color: var(--main);

  .text {
    text-align: center;
    margin-top: 3rem;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 300;
  }

  h2 {
    font-size: 2rem;
    font-weight: 300;
  }

  .img {
    display: none;
  }

  .btn {
    margin-top: 2em;
    width: 300px;
    background: #0a1d37;
    color: white;
    border-radius: 14px;
    align-items: center;
    font-size: 1rem;
    border: none;
    padding: 0.25rem 0;
  }

  @media (max-width: 440px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    .btn {
      width: 100%;
    }
    img {
      height: 300px;
      width: 300px;
    }
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 2.4rem;
    }

    h2 {
      font-weight: 300;
      margin-top: 1rem;
      font-size: 1.75rem;
    }
    .flex {
      display: grid;
      gap: 0px;
      grid-template-columns: auto auto;
    }
    .img {
      display: flex;
    }

    .btn {
      margin: 0;
      padding: 0.3rem;
      font-size: 1rem;
      margin-top: 0.7rem;
      width: 270px;
    }

    img {
      height: 300px;
      width: 300px;
    }
    .text {
      padding: 3rem 0 0 0;
      text-align: right;
    }

    .flex {
    }
  }

  @media (min-width: 900px) {
    .flex {
      display: grid;
      grid-template-columns: 40% auto;
      place-items: right;
      gap: 100px;
    }
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-weight: 300;
      margin-top: 2rem;
      font-size: 2rem;
    }

    .img {
      display: flex;
    }

    .btn {
      margin: 0;
      padding: 0.3rem;
      font-size: 1.25rem;
      margin-top: 1rem;
      width: 68%;
    }

    .text {
      padding: 2rem 0 0 0;
      color: var(--main);
      text-align: right;
    }
    img {
      height: 444px;
      width: 444px;
    }
  }
`

export default Hero
