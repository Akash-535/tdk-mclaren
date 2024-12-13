import React from 'react'
import { useNavigate } from 'react-router-dom'

const Gallery = () => {
    const navigate = useNavigate()
    const toggleNavigation = () => {
        navigate('/')
    }
    return (
        <>
            <div className='min-h-screen flex items-center justify-center flex-col gap-5'>
                <p className='text-2xl font-bold text-red-600'>Coming soon</p>
                <button onClick={toggleNavigation} className='py-3 px-5 bg-red-500 text-white font-bold text-xl rounded-lg'>Go back</button>
            </div>
        </>
    )
}

export default Gallery