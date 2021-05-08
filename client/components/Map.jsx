import React from 'react'
import { Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map ({ ids, parkName, addresses, coordinates }) {
  return (
    <MapContainer className="mt-5" style={{ width: '100vw', height: 'calc(100vh - 172px)' }}
      center={[-36.8826700, 174.7666700]}
      zoom={13}
      scrollWheelZoom={true}>
      <TileLayer
        url='https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbC1yIiwiYSI6ImNrZXM1Zm9iaDJiNmYycW1za2dobDZ4d3gifQ.a5mK2DxNqWhlzvoa8Zxb2Q' />
      {coordinates.map((location, i) => {
        return <Marker key={i}
          position={[location.lat, location.lon]}
        >
          <Popup>
            <Link to={`/park-details/${ids[i]}`}>{addresses[i]}</Link>
            <Link to={`/park-details/${ids[i]}`}>{parkName[i]}</Link>
          </Popup>
        </Marker>
      })}
    </MapContainer>
  )
}
