import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'

const MapWithAMarker = withScriptjs(
  withGoogleMap(({ lat, lng }) => (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat, lng }}>
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  ))
)

const Map = ({ lat, lng }) => {
  return (
    <MapWithAMarker
      googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCnT_oyJjvQLDmRokFP62CuAe7i_btZT6M&v=3.exp&libraries=geometry,drawing,places'
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `500px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      lat={lat}
      lng={lng}
    />
  )
}

export default Map
