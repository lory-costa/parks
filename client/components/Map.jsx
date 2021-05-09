import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMap } from '../actions/map'
import Filter from '../components/Filter'


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map () {
  const parks = useSelector(globalState => globalState.map)
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
    iconUrl: 'https://cdn.discordapp.com/attachments/831797837129056286/840740408531091506/ProjectIcon2.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [40, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })

  return (<>
    <Filter />
    <MapContainer className="mt-5" style={{ width: '100vw', height: 'calc(100vh - 172px)' }}
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
  </>
  )
}
