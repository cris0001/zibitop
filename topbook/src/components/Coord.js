import React from 'react'

const Coord = () => {
  import Geocode from 'react-geocode'
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
  return <div></div>
}

export default Coord
