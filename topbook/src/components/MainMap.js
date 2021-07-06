import React from 'react'
import styled from 'styled-components'
import map from '../images/map.jpg'

const MainMap = () => {
  return (
    <Wrapper className='section'>
      <div className='section-center grid'>
        <div className='info'>
          <h2>
            Dodaj swoją książkę <br /> i wskaż miejsce odbioru
          </h2>
          <button className='btn'>Dodaj książkę</button>
        </div>
        <div className='photo'>
          <img src={map} alt='' />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 50vh;
  margin-top: 3rem;
  .grid {
    display: grid;
    grid-template-columns: 1fr auto;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 300;
    text-align: center;
  }

  .photo {
    display: none;
  }

  .info {
    padding: 2rem 0;
  }
  .btn {
    margin-top: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 100%;
    background: #0a1d37;
    color: white;
    border-radius: 7px;
    align-items: center;
    font-size: 1.5rem;
    border: none;
    padding: 0.25rem 3rem;
  }

  .section-center {
  }

  @media (min-width: 675px) {
    img {
      width: 320px;
      height: 200px;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr auto;
    }
    .photo {
      display: grid;
    }

    .btn {
      margin-top: 1rem;
    }
    button {
      width: 80%;
      background: #0a1d37;
      color: white;
      border-radius: 7px;
      align-items: center;
      font-size: 1rem;
      border: none;
      padding: 0.25rem 3rem;
    }

    .info {
      justify-self: left;
    }

    h2 {
      font-size: 1.6rem;
      font-weight: 300;
      text-align: left;
    }
  }

  @media (min-width: 800px) {
    img {
      width: 390px;
      height: 220px;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr auto;
    }
    .photo {
      display: grid;
    }

    h2 {
      font-size: 1.95rem;
      font-weight: 300;
    }

    .btn {
      margin-top: 2rem;
    }
    button {
      width: 10 0%;
      background: #0a1d37;
      color: white;
      border-radius: 7px;
      align-items: center;
      font-size: 1rem;
      border: none;
      padding: 0.25rem 3rem;
    }
  }

  @media (min-width: 992px) {
    .grid {
      display: grid;
      grid-template-columns: 1fr auto;
    }
    .photo {
      display: grid;
    }
    .info {
      justify-self: left;
      align-self: center;
      padding: 2rem 0;
      text-align: left;
    }

    button {
      width: 100%;
      background: #0a1d37;
      color: white;
      border-radius: 7px;
      align-items: center;
      font-size: 1.25rem;
      border: none;
      padding: 0.2rem 2.75rem;
    }
    h2 {
      font-size: 2.4rem;
      font-weight: 300;
    }

    .btn {
      margin-top: 3rem;
    }

    img {
      width: 480px;
      height: 300px;
    }
  }

  @media (min-width: 1170px) {
    .grid {
      display: grid;
      grid-template-columns: 1fr auto;
    }
    .photo {
      display: grid;
    }
    .info {
      justify-self: left;
      padding: 2rem 0;
      text-align: left;
    }

    button {
      width: 100%;
      background: #0a1d37;
      color: white;
      border-radius: 7px;
      align-items: center;
      font-size: 1.5rem;
      border: none;
      padding: 0.25rem 3rem;
    }

    .btn {
      margin-top: 3rem;
    }

    h2 {
      font-size: 2.43rem;
      font-weight: 300;
    }

    img {
      width: 555px;
      height: 360px;
    }
  }
`

export default MainMap
