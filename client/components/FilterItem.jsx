import React from 'react'
import { addFilter, removeFilter } from '../actions/filter'

import { useDispatch } from 'react-redux'

export default function FilterItem ({ facilityIcon, facilityValue }) {
  const dispatch = useDispatch()

  function handleChange (e) {
    (e.target.checked)
      ? dispatch(addFilter(e.target.value))
      : dispatch(removeFilter(e.target.value))
  }

  return <div className='px-2'>
    <label>{facilityIcon}</label>
    <input
      id={facilityValue}
      name={facilityValue}
      value={facilityValue}
      className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
      type='checkbox'
      onChange={(e) => handleChange(e)}
    />
  </div>
}
