import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMap } from '../actions/map'
import { fetchFavParks } from '../actions/favParks'
import { fetchToVisit } from '../actions/toVisit'
import Filter from '../components/Filter'
import FavButton from './FavButton'
import ToVisitButton from './ToVisitButton'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map () {
  const id = useSelector((globalState) => globalState.user.id)
  const parks = useSelector((globalState) => globalState.map).filter(
    (park) => park.approved === 1
  )
  const favParks = useSelector((globalState) => globalState.favParks)
  const toVisit = useSelector((globalState) => globalState.toVisit)
  const filter = useSelector((globalState) => globalState.filter)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchMap(dispatch)
    fetchFavParks(dispatch, id)
    fetchToVisit(dispatch, id)
  }, [])

  function filterFunc (park) {
    if (filter.length === 0) return true
    let fBool = 0
    filter.forEach((item) => {
      if (park[item]) fBool++
    })
    return fBool === filter.length
  }

  const greenIcon = new L.Icon({
    iconUrl:
      'https://raw.githubusercontent.com/kahikatea-2021/parks/frontend/server/public/icons/mapMarker.png?token=ASUCVDFJPTDDETP2PWK63Q3AUHJS2',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [40, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [60, 40]
  })

  return (
    <div>
      <Filter />
      <MapContainer
        className='mt-5 relative z-10'
        style={{ width: '100vw', height: 'calc(100vh - 155px)' }}
        // <MapContainer className="mt-5" style={{ width: 'calc(100vh+100vh)', height: 'calc(100vh - 275px)' }}
        center={[-36.88267, 174.76667]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer url='https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWljaGFlbC1yIiwiYSI6ImNrZXM1Zm9iaDJiNmYycW1za2dobDZ4d3gifQ.a5mK2DxNqWhlzvoa8Zxb2Q' />
        {parks.filter(filterFunc).map((park) => (
          <Marker
            key={park.id}
            icon={greenIcon}
            position={[park.lat, park.lon]}
          >
            <Popup>
              <img className='mb-2' src={park.image}></img>
              <Link to={`/park-details/${park.id}`}>{park.name}</Link>
              <div>{park.address}</div>
              <div className='mt-2'>
                {favParks.filter((favPark) => favPark.parkId === park.id)
                  .length ? (
                    <FavButton
                      parkId={park.id}
                      heart={true}
                      favParkId={
                        favParks.filter(
                          (favPark) => favPark.parkId === park.id
                        )[0].id
                      }
                    />
                  ) : (
                    <FavButton parkId={park.id} heart={false} />
                  )}
              </div>
              <div className='mt-2'>
                {toVisit.filter((toVisitPark) => toVisitPark.parkId === park.id)
                  .length ? (
                    <ToVisitButton
                      parkId={park.id}
                      toVisit={true}
                      toVisitParkId={
                        toVisit.filter(
                          (toVisitPark) => toVisitPark.parkId === park.id
                        )[0].id
                      }
                    />
                  ) : (
                    <ToVisitButton parkId={park.id} toVisit={false} />
                  )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
