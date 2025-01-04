import React from 'react'

function Navbar() {
    return (
        <nav className='flex flex-col lg:flex-row py-3 justify-between mx-6'>
            <div>
                <h3 className='text-xl font-bold'>
                    {new Date().toUTCString().slice(0, 16)}
                </h3>

                <h1 className='text-2xl font-bold'> Flavro Foods </h1>
            </div>
            <div>
                <input
                    type="search"
                    name='search'
                    placeholder='Search-Here'
                    autoComplete='off'
                    className='text-black p-2 border border-blue-400 rounded-lg outline-none w-full lg:w-[25vw]' />
            </div>
        </nav>
    )
}

export default Navbar
