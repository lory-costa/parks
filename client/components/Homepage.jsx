import React from 'react'

function Homepage() {
    return (
        <div className='flex flex-col items-center justify-center bg-park-image bg-cover h-screen' >
            <h1 className='text-white text-9xl'>PARKS</h1>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded mt-10">
                Explore
            </button>
        </div>
    )
}

export default Homepage