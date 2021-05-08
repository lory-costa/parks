import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setMap, fetchMap, filterMap, removeFilter } from '../actions/map'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map ({ ids, addresses, coordinates, names, images }) {
  const dispatch = useDispatch()
  const parks = useSelector(globalState => globalState.map)

  useEffect(() => {
    dispatch(fetchMap())
  }, [])

  const [filterItem] = useSelector(globalState => globalState.filter)

  // function handleChange (e) {
  //   dispatch(filterMap((document.getElementById('parkFilter').value)))
  // }

  function handleChange (e) {
    (e.target.checked)
      ? dispatch(filterMap(e.target.name))
      : dispatch(removeFilter(e.target.name))
  }

  return (<>
    {/* <select id='parkFilter' onChange={() => handleChange()}>
      <option value='playground'>playground</option>
      <option value='toilets'>toilets</option>
      <option value='picnic_site'>picnic site</option>
      <option value='sports_field'> sports field</option>
      <option value='tramp'> tramp</option>
      <option value='dog_walking'> dog walking</option>
    </select> */}
    <label>Playground</label>
    <input
      id='playground'
      name='playground'
      className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
      type='checkbox'
      onChange={(e) => handleChange(e)}
    />

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
  </>
  )
}
