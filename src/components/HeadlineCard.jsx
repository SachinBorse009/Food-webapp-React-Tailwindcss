import React from 'react'

const HeadlineCard = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid sm:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='relative rounded-xl '>
            {/* overlay */}
            <div  className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
                <p className=' font-bold text-xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[250px] h-[300px] w-full object-cover rounded-xl'  src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>

        <div className='relative rounded-xl'>
            {/* overlay */}
            <div  className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
                <p className=' font-bold text-xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[250px] h-[300px] w-full object-cover rounded-xl'  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>

        <div className='relative rounded-xl'>
            {/* overlay */}
            <div  className='absolute w-full h-full bg-black/30 rounded-xl text-white'>
                <p className=' font-bold text-xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[250px] h-[300px] w-full object-cover rounded-xl'  src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" />
        </div>
    </div>
  )
}

export default HeadlineCard