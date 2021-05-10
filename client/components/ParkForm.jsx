import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { validate, rules } from './ValidationForm'
import ParkFormFacilityItem from './ParkFormFacilityItem'

export default function ParkForm (props) {
  const isAdmin = useSelector(globalState => globalState.user.isAdmin)

  const [invalid, setInvalid] = useState({})
  const [form, setForm] = useState(props.formData || {
    name: '',
    address: '',
    lat: -36.858961086253935,
    lon: 174.77547498145518,
    url: '',
    description: '',
    image: '',
    playground: 0,
    toilets: 0,
    picnicSite: 0,
    sportsField: 0,
    tramp: 0,
    dogWalking: 0,
    approved: 0
  })
  // Validation for required fields
  const validationRules = {
    name: [rules.isRequired],
    address: [rules.isRequired],
    url: [rules.isRequired],
    description: [rules.isRequired]
  }

  // onChange for text inputs
  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }
  // onChange for checkbox inputs
  function handleInputChange (event) {
    const target = event.target
    const name = target.name

    setForm({
      ...form,
      [name]: target.checked
    })
  }

  // Submit
  function handleSubmit (e) {
    const results = validate(form, validationRules, invalid)
    e.preventDefault()

    if (results.isValid) {
      props.submitPark(form)
    } else {
      setInvalid(results.details)
    }
  }

  const { name, address, lat, lon, url, description, image, playground, toilets, picnicSite, sportsField, tramp, dogWalking, approved } = form

  return (
    <div className='md:flex md:justify-between mt-8 mx-14 items-start' >
      <div>
        <div className='pr-20'>
          <div className='text-black font-bold mb-1 md:mb-0 pr-4'>Add a Park</div>
          <form className='w-full max-w-sm'>
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  htmlFor='name'
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Park Name
                </label>
              </div>
              <div className= 'md:w-2/3'>
                <input
                  data-validation='isRequired'
                  id='name'
                  name='name'
                  className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
                  type='text'
                  placeholder='Park Awesome'

                  value={name}
                  onChange={handleChange}
                />
                {invalid.name &&
        <div >{invalid.name}</div>}
              </div>
            </div>
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  htmlFor='address'
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Address
                </label>
              </div>
              <div className= 'md:w-2/3'>
                <input
                  id='address'
                  name='address'
                  className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
                  placeholder= '12 Morgan Street'
                  type='text'
                  value={address}
                  onChange={handleChange}
                />
                {invalid.address &&
                <div >{invalid.address}</div>}
              </div>
            </div>
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  htmlFor='lat'
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Latitude
                </label>
              </div>
              <div className= 'md:w-2/3'>
                <input
                  id='lat'
                  name='lat'
                  className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
                  placeholder= '-36.858961086253935'
                  type='text'
                  value={lat}
                  onChange={handleChange}
                />
                {invalid.lat &&
                <div >{invalid.lat}</div>}
              </div>
            </div>
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  htmlFor='lon'
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Longitude
                </label>
              </div>
              <div className= 'md:w-2/3'>
                <input
                  id='lon'
                  name='lon'
                  className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
                  placeholder= '174.77547498145518'
                  type='text'
                  value={lon}
                  onChange={handleChange}
                />
                {invalid.lon &&
                <div >{invalid.lon}</div>}
              </div>
            </div>
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  htmlFor='url'
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                >Website (url)</label>
              </div>
              <div className= 'md:w-2/3'>
                <input
                  id='url'
                  name='url'
                  className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
                  placeholder="https://www.example.com"
                  pattern="https://.*" size="30"
                  type='url'
                  value={url}
                  onChange={handleChange}
                />
                {invalid.url &&
                <div >{invalid.url}</div>}
              </div>
            </div>
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  htmlFor='description'
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Description
                </label>
              </div>
              <div className= 'md:w-2/3'>
                <textarea
                  id='description'
                  name='description'
                  className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
                  placeholder= 'How awesome is this park!'
                  maxLength="200"
                  type='text'
                  value={description}
                  onChange={handleChange}
                />
                {invalid.description &&
                <div >{invalid.description}</div>}
              </div>
            </div>
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  htmlFor='image'
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                >Image</label>
              </div>
              <div className= 'md:w-2/3'>
                <input
                  id='image'
                  name='image'
                  className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
                  placeholder= 'jpg,png,svg'
                  type='text'
                  value={image}
                  onChange={handleChange}
                />
              </div>
            </div>
            < ParkFormFacilityItem facilityName = {'Playground'} facilityValue = {'playground'} checkValue = {playground} onChangeFunc={handleInputChange}/>
            < ParkFormFacilityItem facilityName = {'Toilets'} facilityValue = {'toilets'} checkValue = {toilets} onChangeFunc={handleInputChange}/>
            < ParkFormFacilityItem facilityName = {'Picnic Site'} facilityValue = {'picnicSite'} checkValue = {picnicSite} onChangeFunc={handleInputChange}/>
            < ParkFormFacilityItem facilityName = {'Sports Field'} facilityValue = {'sportsField'} checkValue = {sportsField} onChangeFunc={handleInputChange}/>        
            < ParkFormFacilityItem facilityName = {'Tramping'} facilityValue = {'tramp'} checkValue = {tramp} onChangeFunc={handleInputChange}/>
            < ParkFormFacilityItem facilityName = {'Dog Walking Allowed'} facilityValue = {'dogWalking'} checkValue = {dogWalking} onChangeFunc={handleInputChange}/>
            { isAdmin &&
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  htmlFor='approved'
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                >Park Approved</label>
              </div>
              <div className= 'md:w-2/3'>
                <input
                  id='approved'
                  name='approved'
                  className='bg-gray-200 border-2 border-gray-200green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
                  type='checkbox'
                  checked={!!approved}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            }
            <div>
              <div className="md:w-1/3"></div>
              <div className='md:w-2/3'>
                <button
                  className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  onClick={handleSubmit}
                >{props.action}</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className='md:flex md:justify-between mt-8 mx-14 items-start mb-4 lg:mb-0 lg:w-1/2'>
        <div>
          <h2 className='text-black font-bold mb-1 md:mb-0 pr-4'>Preview</h2>
          <div>
            {name
              ? <h2>{name}</h2>
              : <h2 className='bg-gray-200 md:w-2/3 py-2 px-4 w-full max-w-sm'>Park Name</h2>
            }
            {address
              ? <p>{address}</p>
              : <p className='bg-gray-200 md:w-2/3 py-2 px-4 w-full max-w-sm'>Address</p>
            }
            {url
              ? <p>{url}</p>
              : <p className='bg-gray-200 md:w-2/3 py-2 px-4 w-full max-w-sm'>Website</p>
            }
            {image
              ? <p>{image}</p>
              : <p className='bg-gray-200 md:w-1/3 py-2 px-4 w-full max-w-sm'>Image</p>
            }
            <div className='flex'>
              {!!playground && <img className='mr-3' src='/icons/playground.png' alt="playground icon" width="35" height="35"/>}
              {!!toilets && <img className='mr-3' src='/icons/toilets.png' alt="toilet icon" width="35" height="35"/>}
              {!!picnicSite && <img className='mr-3' src='/icons/picnicSite.png' alt="picnic icon" width="35" height="35"/> }
              {!!sportsField && <img className='mr-3' src='/icons/sportsField.png' alt="sports icon" width="35" height="35"/> }
              {!!tramp && <img className='mr-3' src='/icons/tramp.png' alt="tramp walking icon" width="35" height="35"/>}
              {!!dogWalking && <img className='mr-3' src='/icons/dogWalking.png' alt="dog walking icon" width="35" height="35"/>}
            </div>
            {isAdmin && <div>
              { approved
                ? <p className='bg-gray-200 md:w-2/3 py-2 px-4 w-full max-w-sm'>Park Approved: Yes</p>
                : <p className='bg-gray-200 md:w-2/3 py-2 px-4 w-full max-w-sm'>Park Approved: No</p>
              }
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}
