import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMap } from '../actions/map'
import Filter from '../components/Filter'

import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet'

export default function Map () {
  const parks = useSelector(globalState => globalState.map).filter(park => park.approved === 1)
  const filter = useSelector(globalState => globalState.filter)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchMap(dispatch)
  }, [])

  function filterFunc (park) {
    if (filter.length === 0) return true
    let fBool = 0
    filter.forEach(item => {
      if (park[item]) fBool++
    })
    return fBool === filter.length
  }

  const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/kahikatea-2021/parks/frontend/server/public/icons/mapMarker.png?token=ASUCVDHBZ65YNYB4YCVPJ6LAUCGKQ',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [40, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })

  return (<div >
    <Filter />
    <MapContainer className="mt-5 relative z-10" style={{ width: '100vw', height: 'calc(100vh - 172px)' }}
    // <MapContainer className="mt-5" style={{ width: 'calc(100vh+100vh)', height: 'calc(100vh - 275px)' }}
      center={[-36.8826700, 174.7666700]}
      zoom={13}
      scrollWheelZoom={true}>
      <TileLayer
        url='https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbC1yIiwiYSI6ImNrZXM1Zm9iaDJiNmYycW1za2dobDZ4d3gifQ.a5mK2DxNqWhlzvoa8Zxb2Q' />
      {parks.filter(filterFunc).map(park =>
        <Marker key={park.id} icon={greenIcon} position={[park.lat, park.lon]}>
          <Popup>
            <div><Link to={`/park-details/${park.id}`}>{park.name}</Link></div>
            <div>{park.address}</div>
            <img src={park.image}></img>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  </div>
  )
}
