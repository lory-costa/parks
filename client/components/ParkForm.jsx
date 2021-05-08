import React, { useState } from 'react'
import { validate, rules } from './ValidationForm'

export default function ParkForm (props) {
  const [invalid, setInvalid] = useState({})
  const [form, setForm] = useState(props.formData || {
    name: '',
    address: '',
    lat: 0,
    lon: 0,
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

  const { name, address, url, description, image, playground, toilets, picnicSite, sportsField, tramp, dogWalking, approved } = form

  return (
    <>
      <div>
        <div>
          <div className='block text-black font-bold mb-1 md:mb-0 pr-4'>Add a Park</div>
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
                <input
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
            <div className='md:flex md:items-stretch mb-6'>
              <div className='md:w-1/3'>
                <label
                  htmlFor='playground'
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                >Playground</label>
              </div>
              <div className= 'md:w-2/3'>
                <input
                  id='playground'
                  name='playground'
                  className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
                  type='checkbox'
                  checked={!!playground}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  htmlFor='toilets'
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                >Toilets</label>
              </div>
              <div className= 'md:w-2/3'>
                <input
                  id='toilets'
                  name='toilets'
                  className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
                  type='checkbox'
                  checked={!!toilets}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  htmlFor='picnicSite'
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                >Picnic Site</label>
              </div>
              <div className= 'md:w-2/3'>
                <input
                  id='picnicSite'
                  name='picnicSite'
                  className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:bg-white focus:border-green-500'
                  type='checkbox'
                  checked={!!picnicSite}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  htmlFor='sportsField'
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                >Sports Field</label>
              </div>
              <div className= 'md:w-2/3'>
                <input
                  id='sportsField'
                  name='sportsField'
                  className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
                  type='checkbox'
                  checked={!!sportsField}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  htmlFor='tramp'
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                >Tramp</label>
              </div>
              <div className= 'md:w-2/3'>
                <input
                  id='tramp'
                  name='tramp'
                  className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
                  type='checkbox'
                  checked={!!tramp}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='md:flex md:items-center mb-6'>
              <div className='md:w-1/3'>
                <label
                  htmlFor='dogWalking'
                  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
                >Dog Walking Allowed</label>
              </div>
              <div className= 'md:w-2/3'>
                <input
                  id='dogWalking'
                  name='dogWalking'
                  className='bg-gray-200 border-2 border-green-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500'
                  type='checkbox'
                  checked={!!dogWalking}
                  onChange={handleInputChange}
                />
              </div>
            </div>
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

      {/* //preview of the park in realtime - functionaility in place for name, address, url and image text
      <div className='block text-black font-bold mb-1 md:mb-0 pr-4'>
        <h2 className='w-full max-w-sm'>Park Preview</h2>
        <div >
          {name
            ? <h2>{name}</h2>
            : <h2 className='bg-gray-200 py-2 px-4 w-full max-w-sm'>Park Name here</h2>
          }
          {address
            ? <p>{address}</p>
            : <p>Park Address here</p>
          }
          {url
            ? <p>{url}</p>
            : <p>website URL here</p>
          }
          {image
            ? <p>{image}</p>
            : <p>Park Image here</p>
          }
          {playground
            ? <p>{playground}</p>
            : <>Playground here?</>
          }
          {toilets
            ? <p>{toilets}</p>
            : <p>Toilets here?</p>
          }
          {picnicSite
            ? <p>{picnicSite}</p>
            : <p>Picnic-Site here?</p>
          }
          {sportsField
            ? <p>{sportsField}</p>
            : <p>Sports-field here?</p>
          }
          {tramp
            ? <p>{tramp}</p>
            : <p>Tramp/Bush walk here?</p>
          }
          {dogWalking
            ? <p>{dogWalking}</p>
            : <p>Dog Walking allowed?</p>
          }
          {approved
            ? <p>{approved}</p>
            : <p>Park Approved?</p>
          }
        </div>
      </div> */}
    </>
  )
}
