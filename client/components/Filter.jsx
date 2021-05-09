import React from 'react'
import { addFilter, removeFilter } from '../actions/filter'
import { useDispatch } from 'react-redux'

export default function Filter () {
  const dispatch = useDispatch()

  function handleChange (e) {
    (e.target.checked)
      ? dispatch(addFilter(e.target.value))
      : dispatch(removeFilter(e.target.value))
  }

  return (<>
    <label>Playground</label>
    <input
      id='playground'
      name='playground'
      value='playground'
      className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
      type='checkbox'
      onChange={(e) => handleChange(e)}
    />
    <label>Toilets</label>
    <input
      id='toilets'
      name='toilets'
      value='toilets'
      className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
      type='checkbox'
      onChange={(e) => handleChange(e)}
    />
    <label>Picnic Site</label>
    <input
      id='picnic_site'
      name='picnic_site'
      value='picnic_site'
      className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
      type='checkbox'
      onChange={(e) => handleChange(e)}
    />
    <label>Sports Field</label>
    <input
      id='sports_field'
      name='sports_field'
      value='sports_field'
      className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
      type='checkbox'
      onChange={(e) => handleChange(e)}
    />
    <label>Tramp</label>
    <input
      id='tramp'
      name='tramp'
      value='tramp'
      className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
      type='checkbox'
      onChange={(e) => handleChange(e)}
    />
    <label>Dog Walking</label>
    <input
      id='dog_walking'
      name='dog_walking'
      value='dog_walking'
      className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
      type='checkbox'
      onChange={(e) => handleChange(e)}
    />
  </>
  )
}
