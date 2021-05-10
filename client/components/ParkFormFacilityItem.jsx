import React from "react";

export default function ParkFormFacilityItem({
  facilityName,
  facilityValue,
  checkValue,
  onChangeFunc,
}) {
  return (
    <div className='mt-6 mb-4'>
      <input
        id={facilityValue}
        name={facilityValue}
        type='checkbox'
        checked={!!checkValue}
        onChange={onChangeFunc}
      />
      <img
        src={`icons/${facilityValue}.png`}
        alt={`${facilityName} icon`}
        width='30'
        height='30'
      />
      <label htmlFor={facilityValue}>{facilityName}</label>
    </div>
  );
}
