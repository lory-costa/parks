import React from 'react'
import FilterItem from './FilterItem'

export default function Filter () {
  return <>
    <h1>Apply a Filter</h1>
    <div className='flex'>
      <FilterItem facilityName={'Playground'} facilityValue={'playground'} />
      <FilterItem facilityName={'Toilets'} facilityValue={'playground'} />
      <FilterItem facilityName={'Picnic Site'} facilityValue={'picnic_site'} />
      <FilterItem facilityName={'Sports Field'} facilityValue={'sports_field'} />
      <FilterItem facilityName={'Tramping'} facilityValue={'tramping'} />
      <FilterItem facilityName={'Dog Walking'} facilityValue={'dog_walking'} />
    </div>
  </>
}
