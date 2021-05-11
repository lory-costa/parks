import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { validate, rules } from './ValidationForm'
import ParkFormFacilityItem from './ParkFormFacilityItem'

export default function ParkForm (props) {
  const isAdmin = useSelector((globalState) => globalState.user.isAdmin)

  const [invalid, setInvalid] = useState({})
  const [form, setForm] = useState(
    props.formData || {
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
    }
  )
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

  const {
    name,
    address,
    lat,
    lon,
    url,
    description,
    imageUrl,
    playground,
    toilets,
    picnicSite,
    sportsField,
    tramp,
    dogWalking,
    approved
  } = form

  const checkUploadResult = (resultEvent) => {
    if (resultEvent.event === 'success') {
      const imageUrl = resultEvent.info.secure_url
      setForm({
        ...form,
        imageUrl: imageUrl
      })
      console.log(resultEvent.info.secure_url)
      return imageUrl
    }
  }

  function showWidget (event, widget) {
    event.preventDefault()
    widget.open()
  }

  const widget = window.cloudinary.createUploadWidget({
    cloudName: 'dvsikj1gh',
    uploadPreset: 'guboz3wj'
  },
  (error, result) => { checkUploadResult(result) })

  return (
    <div className='flex flex-col mt-8 mx-14'>
      <h1 className='text-green-700 text-3xl mb-4'>Add a Park</h1>
      <form className='flex flex-col md:flex-row'>
        <div className='w-1/3 mr-16'>
          <label htmlFor='name' className='text-lg'>
            Park Name
          </label>
          <input
            data-validation='isRequired'
            id='name'
            name='name'
            className='bg-gray-200 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500 mb-4'
            type='text'
            placeholder='Park Awesome'
            value={name}
            onChange={handleChange}
          />
          {invalid.name && <div>{invalid.name}</div>}
          <label htmlFor='address' className='text-lg'>
            Address
          </label>
          <input
            id='address'
            name='address'
            className='bg-gray-200 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500 mb-4'
            placeholder='12 Morgan Street'
            type='text'
            value={address}
            onChange={handleChange}
          />
          {invalid.address && <div>{invalid.address}</div>}
          <label htmlFor='lat' className='text-lg'>
            Latitude
          </label>
          <input
            id='lat'
            name='lat'
            className='bg-gray-200 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500 mb-4'
            placeholder='-36.858961086253935'
            type='text'
            value={lat}
            onChange={handleChange}
          />
          {invalid.lat && <div>{invalid.lat}</div>}
          <label htmlFor='lon' className='text-lg'>
            Longitude
          </label>
          <input
            id='lon'
            name='lon'
            className='bg-gray-200 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500 mb-4'
            placeholder='174.77547498145518'
            type='text'
            value={lon}
            onChange={handleChange}
          />
          {invalid.lon && <div>{invalid.lon}</div>}
          <label htmlFor='url' className='text-lg'>
            Website (url)
          </label>
          <input
            id='url'
            name='url'
            className='bg-gray-200 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500 mb-4'
            placeholder='https://www.example.com'
            pattern='https://.*'
            size='30'
            type='url'
            value={url}
            onChange={handleChange}
          />
          {invalid.url && <div>{invalid.url}</div>}
          <label htmlFor='description' className='text-lg'>
            Description
          </label>
          <textarea
            id='description'
            name='description'
            className='bg-gray-200 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500 mb-4'
            placeholder='How awesome is this park!'
            maxLength='200'
            type='text'
            value={description}
            onChange={handleChange}
          />
          {invalid.description && <div>{invalid.description}</div>}
          <label htmlFor='image' className='text-lg'>
            Image
          </label>
          <div id='photo-form-container'>
            <button onClick={(event) => { showWidget(event, widget) }}>Upload Photo</button>
          </div>
          <input
            id='image'
            name='image'
            className='bg-gray-200 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500 mb-4'
            placeholder='https://www.example.com'
            pattern='https://.*'
            size='30'
            type='url'
            value={imageUrl}
            onChange={handleChange}
          />
          {/* <input
            id='image'
            name='image'
            className='bg-gray-200 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500 mb-4'
            placeholder='jpg,png,svg'
            type='text'
            value={image}
            onChange={handleChange}
          /> */}
        </div>
        <div>
          <ParkFormFacilityItem
            facilityName={'Playground'}
            facilityValue={'playground'}
            checkValue={playground}
            onChangeFunc={handleInputChange}
          />
          <ParkFormFacilityItem
            facilityName={'Toilets'}
            facilityValue={'toilets'}
            checkValue={toilets}
            onChangeFunc={handleInputChange}
          />
          <ParkFormFacilityItem
            facilityName={'Picnic Site'}
            facilityValue={'picnicSite'}
            checkValue={picnicSite}
            onChangeFunc={handleInputChange}
          />
          <ParkFormFacilityItem
            facilityName={'Sports Field'}
            facilityValue={'sportsField'}
            checkValue={sportsField}
            onChangeFunc={handleInputChange}
          />
          <ParkFormFacilityItem
            facilityName={'Tramping'}
            facilityValue={'tramp'}
            checkValue={tramp}
            onChangeFunc={handleInputChange}
          />
          <ParkFormFacilityItem
            facilityName={'Dog Walking Allowed'}
            facilityValue={'dogWalking'}
            checkValue={dogWalking}
            onChangeFunc={handleInputChange}
          />
        </div>
        {isAdmin && (
          <div className='md:flex md:items-center mb-6'>
            <input
              id='approved'
              name='approved'
              className='bg-gray-200 border-2 border-gray-200green-300 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
              type='checkbox'
              checked={!!approved}
              onChange={handleInputChange}
            />
            {approved ? <img src='/icons/activeMarker.gif' alt="Active Park" width='25' />
              : <img src='/icons/dormantMarker.png' alt="Dormant Park" width='25' />}
            <label htmlFor='approved' className='text-lg'>
                Park Approved
            </label>
            <div className='md:w-1/3'>
            </div>
            <div className='md:w-2/3'>

            </div>
          </div>
        )}
      </form>
      <div>
        <div className='md:w-1/3'></div>
        <div className='md:w-2/3'>
          <button
            className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={handleSubmit}
          >
            {props.action}
          </button>
        </div>
      </div>

      {/* <div className='md:flex md:justify-between mt-8 mx-14 items-start mb-4 lg:mb-0 lg:w-1/2'>
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
              {!!playground && <img className='mr-3' src='/icons/playground.png' alt='playground icon' width='35' height='35'/>}
              {!!toilets && <img className='mr-3' src='/icons/toilets.png' alt='toilet icon' width='35' height='35'/>}
              {!!picnicSite && <img className='mr-3' src='/icons/picnicSite.png' alt='picnic icon' width='35' height='35'/> }
              {!!sportsField && <img className='mr-3' src='/icons/sportsField.png' alt='sports icon' width='35' height='35'/> }
              {!!tramp && <img className='mr-3' src='/icons/tramp.png' alt='tramp walking icon' width='35' height='35'/>}
              {!!dogWalking && <img className='mr-3' src='/icons/dogWalking.png' alt='dog walking icon' width='35' height='35'/>}
            </div>
            {isAdmin && <div>
              { approved
                ? <p className='bg-gray-200 md:w-2/3 py-2 px-4 w-full max-w-sm'>Park Approved: Yes</p>
                : <p className='bg-gray-200 md:w-2/3 py-2 px-4 w-full max-w-sm'>Park Approved: No</p>
              }
            </div>}
          </div>
        </div>
      </div> */}
    </div>
  )
}
