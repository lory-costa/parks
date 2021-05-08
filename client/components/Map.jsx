import React from 'react'
import { Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/kahikatea-2021/parks/frontend/server/public/icons/mapMarker.png?token=ASUCVDCP7BHOPHTEL2Q53YDAUBMK4',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [40, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

export default function Map ({ ids, addresses, coordinates, names, images }) {
  return (
    <MapContainer className="mt-5" style={{ width: '100vw', height: 'calc(100vh - 172px)' }}
      center={[-36.8826700, 174.7666700]}
      zoom={13}
      scrollWheelZoom={true}>
      <TileLayer
        url='https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbC1yIiwiYSI6ImNrZXM1Zm9iaDJiNmYycW1za2dobDZ4d3gifQ.a5mK2DxNqWhlzvoa8Zxb2Q' />
      {coordinates.map((location, i) => {
        return <Marker className='greenIcon' key={i}
          icon={greenIcon}
          position={[location.lat, location.lon]}
        >
          <Popup>
            <div><Link to={`/park-details/${ids[i]}`}>{names[i]}</Link></div>
            <div>{addresses[i]}</div>
            <img src={images[i]}></img>
          </Popup>
        </Marker>
      })}
    </MapContainer>
  )
}
