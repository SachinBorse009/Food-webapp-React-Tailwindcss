import React from 'react'
import heroImage from '../imges/hero_img.jpg'


const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto items-center p-4 '>
        <div className='max-h-[500px] relative rounded-lg'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center'>
                <h1 className='px-4 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '>The <span className='text-orange-600'>Best</span></h1>
                <h1 className=' text-center px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold '>Foods <span className='text-orange-600'>Delivered</span></h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src={heroImage} alt="" />
        </div>
    </div>
  )
}

export default Hero