import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-6 px-10 bg-(--c1)'>
            <h2 className='font-semibold text-2xl'>ImaGiff</h2>
            <div className='flex gap-5 text-xl items-center'>
                <Link to='/'>Search</Link>
                <Link to='/collection'>Collection</Link>
            </div>
        </div>
    )
}

export default Navbar
