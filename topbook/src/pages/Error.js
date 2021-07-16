import React, { useContext } from 'react'
import firebase from '../firebase'
import { db } from '../firebase'
import { BooksContext } from '../context/BooksContext'
import { Spiner } from '../components'
import Map from '../components/Map'
import Geocode from 'react-geocode'


const Error = () => {
  const { fetchBook, book, x } = useContext(BooksContext)
  const url = 'https://www.googleapis.com/books/v1/volumes/y8KkDwAAQBAJ'
  const url2 = 'https://www.googleapis.com/books/v1/volumes/dTESjwEACAAJ'

  const loading = true
  const isbnUrl =
    'https://www.googleapis.com/books/v1/volumes?q=isbn:9788377915370'

  const usbnUrl2 =
    'https://www.googleapis.com/books/v1/volumes?q=isbn:9788381161756'

  // if (x) {
  //   return <Spiner />
  // }

  Geocode.setApiKey('AIzaSyCnT_oyJjvQLDmRokFP62CuAe7i_btZT6M')

  Geocode.fromAddress('Pawlokoma 60, 36-065').then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location
      console.log(lat, lng)
    },
    (error) => {
      console.error(error)
    }
  )

  return (
    <div>
      <button onClick={() => fetchBook(isbnUrl)}>xddd</button>

      <div className='xd'>
        <Map />
       
      </div>
      <button onClick={() => fetchBook(usbnUrl2)}>2222222222</button>
    </div>
  )
}

export default Error
