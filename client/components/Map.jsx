import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setMap, fetchMap } from '../actions/map'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map ({ ids, addresses, coordinates, names, images }) {
  const dispatch = useDispatch()
  const parks = useSelector(globalState => globalState.map)
  console.log(parks)
  useEffect(() => {
    dispatch(fetchMap())
  }, [])

  return (
    <MapContainer className="mt-5" style={{ width: '100vw', height: 'calc(100vh - 172px)' }}
      center={[-36.8826700, 174.7666700]}
      zoom={13}
      scrollWheelZoom={true}>
      <TileLayer
        url='https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbC1yIiwiYSI6ImNrZXM1Zm9iaDJiNmYycW1za2dobDZ4d3gifQ.a5mK2DxNqWhlzvoa8Zxb2Q' />
      {parks.map(park =>
        <Marker key={park.id} position={[park.lat, park.lon]}>
          <Popup>
            <div><Link to={`/park-details/${park.id}`}>{park.name}</Link></div>
            <div>{park.address}</div>
            <img src={park.image}></img>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  )
}
