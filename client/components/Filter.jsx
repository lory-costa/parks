import React from 'react'
import FilterItem from './FilterItem'

export default function Filter () {
  // function handleChange (e) {
  //   (e.target.checked)
  //     ? dispatch(addFilter(e.target.value))
  //     : dispatch(removeFilter(e.target.value))
  // }

  return (<>
    <h1>Apply a Filter</h1>
    <FilterItem facilityName={'Playground'} facilityValue={'playground'} />
    <FilterItem facilityName={'Toilets'} facilityValue={'playground'} />
    <FilterItem facilityName={'Picnic Site'} facilityValue={'picnic_site'} />
    <FilterItem facilityName={'Sports Field'} facilityValue={'sports_field'} />
    <FilterItem facilityName={'Tramping'} facilityValue={'tramping'} />
    <FilterItem facilityName={'Dog Walking'} facilityValue={'dog_walking'} />
  </>
  )
}
