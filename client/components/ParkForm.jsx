import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { validate, rules } from './ValidationForm'
import ParkFormFacilityItem from './ParkFormFacilityItem'

export default function ParkForm (props) {
  const isAdmin = useSelector((globalState) => globalState.user.isAdmin)
  const [widget, setWidget] = useState({})

  // state for image upload button
  const [color, setColor] = useState('bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded focus:outline-green-500')
  const [upload, setUpload] = useState('Upload Photo')
  const [image, setImage] = useState((props.formData && props.formData.image) || '')
  const [invalid, setInvalid] = useState({})
  const [form, setForm] = useState(
    props.formData || {
      name: 'Albert Park',
      address: '33-43 Princes Street',
      lat: -36.85069409130585,
      lon: 174.76748040205254,
      url: 'https://www.aucklandcouncil.govt.nz/parks-recreation/Pages/park-details.aspx?Location=169',
      description: 'Albert Park is one of Auckland’s most important parks. Its central location in the heart of the CBD, together with its long history and distinctive character, have earned it a special place in the hearts of Aucklanders and made it an important destination for visitors.',
      playGround: 0,
      toilets: 1,
      picnicSite: 1,
      sportsField: 1,
      tramp: 1,
      dogWalking: 1,
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
      const park = { ...form, image }
      props.submitPark(park)
    } else {
      console.log('something went wrong')
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
    playGround,
    toilets,
    picnicSite,
    sportsField,
    tramp,
    dogWalking,
    approved
  } = form

  function changeButtonColor () {
    setColor('bg-green-700 text-white py-2 px-4 rounded focus:outline-none')
  }

  // Cloudinary functions
  // check upload was successful then pull the sescure_url off the response
  // NOTE: image is secure_url
  const checkUploadResult = (resultEvent) => {
    if (resultEvent.event === 'success') {
      changeButtonColor()
      setUpload('Image uploaded')
      setImage(resultEvent.info.secure_url)
      console.log(resultEvent.info.secure_url)
    }
  }
  // pop up widget shows for image upload
  function showWidget (event, widget) {
    event.preventDefault()
    widget.open()
  }
  // Accessing cloudinary account in widget pop-up
  useEffect(() => {
    setWidget(window.cloudinary.createUploadWidget({
      cloudName: 'dvsikj1gh',
      uploadPreset: 'guboz3wj'
    },
    (error, result) => {
      if (error) {
        // TODO: Let the user know something is wrong
        return
      }
      checkUploadResult(result)
    }))
  }, [])

  return (
    <>
      <form className='flex flex-col md:flex-row'>
        <div className='sm:w-full lg:w-1/3 lg:mr-16'>
          <div className='mt-4'>
            <label htmlFor='name' className='text-lg mt-4'>
              Park Name*
            </label>
            <input
              autoFocus
              data-validation='isRequired'
              id='name'
              name='name'
              className='bg-gray-200 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
              type='text'
              placeholder='Albert Park'
              value={name}
              onChange={handleChange}
            />
            {invalid.name && <div className='text-red-500'>{invalid.name}</div>}
          </div>

          <div className='mt-4'>
            <label htmlFor='address' className='text-lg mt-4'>
              Address*
            </label>
            <input
              id='address'
              name='address'
              className='bg-gray-200 border-2 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
              placeholder='12 Morgan Street, Newmarket'
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
              Website (url)*
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
            <label htmlFor='description' className='text-lg mt-4'>
              Description*
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

          <div className='mt-4'>
            <label htmlFor='image' className='text-lg'>
            Image
            </label>
            <div id='photo-form-container'>
              <button className={color} onClick={(event) => { showWidget(event, widget) }}>{upload}</button>
            </div>
          </div>

        </div>

        <div className='mt-4'>
          <ParkFormFacilityItem
            facilityName={'Playground'}
            facilityValue={'playGround'}
            checkValue={playGround}
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
      </form>

      <div className='flex flex-col md:flex-row justify-between lg:w-1/3 mt-8 mb-8' >
        <button
          className='bg-green-700 hover:bg-green-500 text-white py-2 px-4 rounded focus:outline-none'
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
