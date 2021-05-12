import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

function About () {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='mt-20 flex flex-col mx-14 page-content'>
        <h3 className='text-3xl text-center text-green-700 mb-4'>The Team</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 mb-20' >
          <div className='flex flex-col items-center' >
            <img src="/images/pictures/sina.jpg" alt="group picture" className=' border-gray-200 border-2 rounded-full object-cover h-48 w-48 mb-2'/>
            <p className='text-xl text-green-700' >Sina</p>
            <p className='text-gray-500'>Backend Dev</p>
          </div>
          <div className='flex flex-col items-center' >
            <img src="/images/pictures/sarah.jpg" alt="group picture" className=' border-gray-200 border-2 rounded-full object-cover h-48 w-48 mb-2'/>
            <p className='text-xl text-green-700' >Sarah</p>
            <p className='text-gray-500'>Frontend Dev</p>
          </div>
          <div className='flex flex-col items-center' >
            <img src="/images/pictures/johann.jpg" alt="group picture" className=' border-gray-200 border-2 rounded-full object-cover h-48 w-48 mb-2'/>
            <p className='text-xl text-green-700' >Johann</p>
            <p className='text-gray-500'>Dev Lead</p>
          </div>
          <div className='flex flex-col items-center' >
            <img src="/images/pictures/jonathan.jpg" alt="group picture" className=' border-gray-200 border-2 rounded-full object-cover h-48 w-48 mb-2'/>
            <p className='text-xl text-green-700' >Jonathan</p>
            <p className='text-gray-500'>Backend Dev</p>
          </div>
          <div className='flex flex-col items-center' >
            <img src="/images/pictures/lory.jpg" alt="group picture" className=' border-gray-200 border-2 rounded-full object-cover h-48 w-48 mb-2'/>
            <p className='text-xl text-green-700' >Lory</p>
            <p className='text-gray-500'>Frontend Lead</p>
          </div>
        </div>
        <h3 className='text-3xl text-center text-green-700 mb-4'>The Project</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4 mt-8 mb-8' >
          <div className='bg-gray-100 border-gray-200 border-2 rounded-lg mb-6'>
            <p className='py-2 ml-2'>The Plan</p>
            <img src="/images/pictures/board.jpg" alt="group picture" className='object-cover w-full rounded-b-lg'/>
          </div>
          <div className='bg-gray-100 border-gray-200 border-2 rounded-lg mb-6'>
            <p className='py-2 ml-2'>Day 1</p>
            <img src="/images/pictures/plan.jpg" alt="group picture" className='object-cover w-full rounded-b-lg'/>
          </div>
          <div className='bg-gray-100 border-gray-200 border-2 rounded-lg mb-6'>
            <p className='py-2 ml-2'>Day 1</p>
            <img src="/images/pictures/day1.jpg" alt="group picture" className='object-cover w-full rounded-b-lg'/>
          </div>
          <div className='bg-gray-100 border-gray-200 border-2 rounded-lg mb-6'>
            <p className='py-2 ml-2'>Day 2</p>
            <img src="/images/pictures/day2.jpg" alt="group picture" className='object-cover w-full rounded-b-lg'/>
          </div>
          <div className='bg-gray-100 border-gray-200 border-2 rounded-lg mb-6'>
            <p className='py-2 ml-2'>Day 3</p>
            <img src="/images/pictures/day3.jpg" alt="group picture" className='object-cover w-full rounded-b-lg'/>
          </div>
          <div className='bg-gray-100 border-gray-200 border-2 rounded-lg mb-6'>
            <p className='py-2 ml-2'>Day 4</p>
            <img src="/images/pictures/day4.jpg" alt="group picture" className='object-cover w-full rounded-b-lg'/>
          </div>
          <div className='bg-gray-100 border-gray-200 border-2 rounded-lg mb-6'>
            <p className='py-2 ml-2'>Day 5</p>
            <img src="/images/pictures/day5.jpg" alt="group picture" className='object-cover w-full rounded-b-lg'/>
          </div>
          <div className='bg-gray-100 border-gray-200 border-2 rounded-lg mb-4'>
            <p className='py-2 ml-2'>Day 6</p>
            <img src="/images/pictures/day6.jpg" alt="group picture" className='object-cover w-full rounded-b-lg'/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
