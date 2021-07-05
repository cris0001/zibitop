import React from 'react'
import styled from 'styled-components'
import hero from '../images/hero.svg'

const Hero = () => {
  return (
    <Wrapper className='section'>
      <div className='section-center flex '>
        <div className='img'>
          <img src={hero} alt='' />
        </div>
        <div className='text'>
          <h1>TopBook</h1>
          <h2>
            Masz niepotrzebną książkę?
            <br />
            podziel się nią z innymi
          </h2>
          <button className='btn'>Dodaj książkę</button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--bcgLight);
  min-height: 40vh;
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

  @media (min-width: 800px) {
    h1 {
      font-size: 2.24rem;
    }

    h2 {
      font-weight: 300;
      margin-top: 1rem;
      font-size: 1.5rem;
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
      width: 200px;
    }

    img {
      height: 425px;
      width: 425px;
    }
    .text {
      padding: 6rem 0 2rem 0;
      text-align: right;
    }

    .flex {
    }
  }

  @media (min-width: 992px) {
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
    }

    .text {
      padding: 6rem 0 12rem 0;
      color: var(--main);
      text-align: right;
    }
    img {
      height: 522px;
      width: 515px;
    }
  }
`

export default Hero
