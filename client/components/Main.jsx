import React from 'react'
import Header from './Header'
import Map from './Map'

function Main() {
    return (
        <div className='flex flex-col'>
            <Header />
        <div className='mt-20 flex justify-center' >
            <p className='text-xl' >Select a park for details</p>
        </div>
            <Map />
        </div>
    )
}

export default Main