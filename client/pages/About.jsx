import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

function About () {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='mt-20 flex flex-col mx-4 lg:mx-14 page-content'>
        <h3 className='text-3xl text-center text-green-700 mb-4'>The Team</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 mb-20' >
          <div className='flex flex-col items-center' >
            <img src="/images/pictures/sina.jpg" alt="group picture" className='rounded-lg object-cover h-48 w-48 mb-2'/>
            <p className='text-xl text-green-700' >Sina</p>
            <p className='text-gray-500'>Backend Lead</p>
            <a target='_blank' href="https://www.linkedin.com/in/sina-kakhki-he-him-4a3702102/"><img src="/images/pictures/linkedin.png" width='25' alt="linkedin icon"/></a>
          </div>
          <div className='flex flex-col items-center' >
            <img src="/images/pictures/sarah.jpg" alt="group picture" className='rounded-lg object-cover h-48 w-48 mb-2'/>
            <p className='text-xl text-green-700' >Sarah</p>
            <p className='text-gray-500'>Full Stack Dev</p>
            <a target='_blank' href="https://www.linkedin.com/in/sarah-s-204bb158/"><img src="/images/pictures/linkedin.png" width='25' alt="linkedin icon"/></a>
          </div>
          <div className='flex flex-col items-center' >
            <img src="/images/pictures/johann.jpg" alt="group picture" className='rounded-lg object-cover h-48 w-48 mb-2'/>
            <p className='text-xl text-green-700' >Johann</p>
            <p className='text-gray-500'>Dev Lead</p>
            <a target='_blank' href="https://www.linkedin.com/in/johann-besas-670159162/"><img src="/images/pictures/linkedin.png" width='25' alt="linkedin icon"/></a>
          </div>
          <div className='flex flex-col items-center' >
            <img src="/images/pictures/jonathan.jpg" alt="group picture" className='rounded-lg object-cover h-48 w-48 mb-2'/>
            <p className='text-xl text-green-700' >Jonathan</p>
            <p className='text-gray-500'>Backend Dev/Designer</p>
            <a target='_blank' href="https://www.linkedin.com/in/lory-costa-ab581134/"><img src="/images/pictures/linkedin.png" width='25' alt="linkedin icon"/></a>
          </div>
          <div className='flex flex-col items-center' >
            <img src="/images/pictures/lory.jpg" alt="group picture" className='rounded-lg object-cover h-48 w-48 mb-2'/>
            <p className='text-xl text-green-700' >Lory</p>
            <p className='text-gray-500'>Frontend Lead</p>
            <a target='_blank' href="https://www.linkedin.com/in/lory-costa-ab581134/"><img src="/images/pictures/linkedin.png" width='25' alt="linkedin icon"/></a>
          </div>
        </div>
        <h3 className='text-3xl text-center text-green-700 mb-4'>The Project</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-12 mt-8 mb-8' >
          <div className='mb-6'>
            <p className='text-xl mb-1'>The Plan</p>
            <p className='text-gray-500 mb-2'>Some description...</p>
            <img src="/images/pictures/plan.jpg" alt="group picture" className='object-cover w-full rounded-lg'/>
          </div>
          <div className='mb-6'>
            <p className='text-xl mb-1'>Tasks</p>
            <p className='text-gray-500 mb-2'>Some description...</p>
            <img src="/images/pictures/tickets.jpg" alt="group picture" className='object-cover w-full rounded-lg'/>
          </div>
          <div className='mb-6'>
            <p className='text-xl mb-1'>Day 1</p>
            <p className='text-gray-500 mb-2'>Some description...</p>
            <img src="/images/pictures/day1.jpg" alt="group picture" className='object-cover w-full rounded-lg'/>
          </div>
          <div className='mb-6'>
            <p className='text-xl mb-1'>Day 2</p>
            <p className='text-gray-500 mb-2'>Some description...</p>
            <img src="/images/pictures/day2.jpg" alt="group picture" className='object-cover w-full rounded-lg'/>
          </div>
          <div className='mb-6'>
            <p className='text-xl mb-1'>Day 3</p>
            <p className='text-gray-500 mb-2'>Some description...</p>
            <img src="/images/pictures/day3.jpg" alt="group picture" className='object-cover w-full rounded-lg'/>
          </div>
          <div className='mb-6'>
            <p className='text-xl mb-1'>Day 4</p>
            <p className='text-gray-500 mb-2'>Some description...</p>
            <img src="/images/pictures/day4.jpg" alt="group picture" className='object-cover w-full rounded-lg'/>
          </div>
          <div className='mb-6'>
            <p className='text-xl mb-1'>Day 5</p>
            <p className='text-gray-500 mb-2'>Some description...</p>
            <img src="/images/pictures/day5.jpg" alt="group picture" className='object-cover w-full rounded-lg'/>
          </div>
          <div className='mb-6'>
            <p className='text-xl mb-1'>Day 6</p>
            <p className='text-gray-500 mb-2'>Some description...</p>
            <img src="/images/pictures/day6.jpg" alt="group picture" className='object-cover w-full rounded-lg'/>
          </div>
          <div className='mb-6'>
            <p className='text-xl mb-1'>Day 7</p>
            <p className='text-gray-500 mb-2'>Some description...</p>
            <img src="/images/pictures/day7.jpg" alt="group picture" className='object-cover w-full rounded-lg'/>
          </div>
          <div className='mb-6'>
            <p className='text-xl mb-1'>QA</p>
            <p className='text-gray-500 mb-2'>Some description...</p>
            <img src="/images/pictures/qa.jpg" alt="group picture" className='object-cover w-full rounded-lg'/>
          </div>
          <div className='mb-6'>
            <p className='text-xl mb-1'>Day8</p>
            <p className='text-gray-500 mb-2'>Some description...</p>
            <img src="/images/pictures/day8.jpg" alt="group picture" className='object-cover w-full rounded-lg'/>
          </div>
          <div className='mb-6'>
            <p className='text-xl mb-1'>Dance</p>
            <p className='text-gray-500 mb-2'>Some description...</p>
            <img src="/images/pictures/dance.gif" alt="group picture" className='object-cover w-full rounded-lg'/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
