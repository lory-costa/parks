import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { validate, rules } from './ValidationForm'
import ParkFormFacilityItem from './ParkFormFacilityItem'

export default function ParkForm (props) {
  const isAdmin = useSelector((globalState) => globalState.user.isAdmin)
  const [widget, setWidget] = useState({})

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

  useEffect(() => {
    console.log('hehel')
    setWidget(window.cloudinary.createUploadWidget({
      cloudName: 'dvsikj1gh',
      uploadPreset: 'guboz3wj'
    },
    (error, result) => {
      checkUploadResult(result)
    }))
  }, [])

  return (
    <>
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
          <div className='mt-4'>
            <label htmlFor='name' className='text-lg mt-4'>
              Park Name
            </label>
            <input
              data-validation='isRequired'
              id='name'
              name='name'
              className='bg-gray-200 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
              type='text'
              placeholder='Park Awesome'
              value={name}
              onChange={handleChange}
            />
            {invalid.name && <div className='text-red-500'>{invalid.name}</div>}
          </div>

          <div className='mt-4'>
            <label htmlFor='address' className='text-lg mt-4'>
              Address
            </label>
            <input
              id='address'
              name='address'
              className='bg-gray-200 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
              placeholder='12 Morgan Street'
              type='text'
              value={address}
              onChange={handleChange}
            />
            {invalid.address && <div className='text-red-500'>{invalid.address}</div>}
          </div>

          <div className='mt-4'>
            <label htmlFor='lat' className='text-lg mt-4'>
              Latitude
            </label>
            <input
              id='lat'
              name='lat'
              className='bg-gray-200 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
              placeholder='-36.858961086253935'
              type='text'
              value={lat}
              onChange={handleChange}
            />
            {invalid.lat && <div className='text-red-500'>{invalid.lat}</div>}
          </div>

          <div className='mt-4'>
            <label htmlFor='lon' className='text-lg mt-4'>
              Longitude
            </label>
            <input
              id='lon'
              name='lon'
              className='bg-gray-200 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
              placeholder='174.77547498145518'
              type='text'
              value={lon}
              onChange={handleChange}
            />
            {invalid.lon && <div className='text-red-500'>{invalid.lon}</div>}
          </div>

          <div className='mt-4'>
            <label htmlFor='url' className='text-lg mt-4'>
              Website (url)
            </label>
            <input
              id='url'
              name='url'
              className='bg-gray-200 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
              placeholder='https://www.example.com'
              pattern='https://.*'
              size='30'
              type='url'
              value={url}
              onChange={handleChange}
            />
            {invalid.url && <div className='text-red-500'>{invalid.url}</div>}
          </div>

          <div className='mt-4'>
            <label htmlFor='image' className='text-lg mt-4'>
              Image
            </label>
            <input
              id='image'
              name='image'
              className='bg-gray-200 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
              placeholder='jpg,png,svg'
              type='text'
              value={image}
              onChange={handleChange}
            />
          </div>

          <div className='mt-4'>
            <label htmlFor='description' className='text-lg mt-4'>
              Description
            </label>
            <textarea
              id='description'
              name='description'
              className='bg-gray-200 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
              placeholder='How awesome is this park!'
              maxLength='200'
              type='text'
              value={description}
              onChange={handleChange}
            />
            {invalid.description && <div className='text-red-500' >{invalid.description}</div>}
          </div>
        </div>

        <div className='mt-4'>
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

      <div className='flex flex-row justify-between w-1/3 mt-8' >
        <button
          className='bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none'
          onClick={handleSubmit}
        >
          {props.action}
        </button>
        {isAdmin && (
          <div className='flex flex-row justify-between items-center' >
            <div>
              {approved ? <img src='/icons/activeMarker.gif' alt="Active Park" width='20' />
                : <img src='/icons/dormantMarker.png' alt="Dormant Park" width='20' />}
            </div>
            <div className='mx-4'>
              <input
                id='approved'
                name='approved'
                type='checkbox'
                checked={!!approved}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='approved' className='text-lg text-green-700'>
                Approve Park
              </label>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
