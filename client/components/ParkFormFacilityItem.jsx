import React from 'react'

export default function ParkFormFacilityItem ({ facilityName, facilityValue, checkValue, onChangeFunc }) {
  return <div className='md:flex md:items-center mb-6'>
    <div className='md:w-1/3'>
      <label
        htmlFor={facilityValue}
        className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
      >{facilityName}</label>
    </div>
    <img src={`icons/${facilityValue}.png`} alt={`${facilityName} icon`} width='30' height='30'/>
    <div className= 'md:w-2/3'>
      <input
        id={facilityValue}
        name={facilityValue}
        className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
        type='checkbox'
        checked={!!checkValue}
        onChange={onChangeFunc}
      />
    </div>
  </div>
}
