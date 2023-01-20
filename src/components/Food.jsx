import React from 'react'
import { useState } from 'react';
import {categories, data} from '../data/data.js'

function Food() {


    const [foods, setFoods] = useState(data);

    //Filter types
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }



    //Filter by price
    const filterPrice =(price) => {
        setFoods( 
            data.filter((penny) => {
                return penny.price === price;
            })
        )
    }


  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center '>Top Rated Menu Items</h1>

        {/* Fliter Row */}
        <div className='flex flex-col lg:flex-row justify-between mb-4'>

            {/* Filter type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=> setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={() => filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={() => filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salad</button>
                    <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>
        {/* FilterPrice */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filterPrice('₹ ')} className='m-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>₹</button>
                    <button onClick={() => filterPrice('₹ ₹ ')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>₹₹</button>
                    <button onClick={() => filterPrice('₹ ₹ ₹ ')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>₹₹₹</button>
                    <button onClick={() => filterPrice('₹ ₹ ₹ ₹ ')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>₹₹₹₹</button>
                </div>
            </div>
         </div>


         {/* Display food grid */}
         <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
            {foods.map((item, index) => (
                <div key = {index} className=" shadow-lg rounded-lg hover:scale-105 duration-300 rounded-t-lg overflow-hidden ">
                    <img src={item.image} alt={item.name}  className='w-full h-[200px] object-cover ' />
                    <div className='md:flex  md:justify-between px-4 py-4'>
                        <p className='font-bold mb-2'>{item.name}</p>
                        <p>
                            <span className='bg-orange-500 text-white p-2 rounded-lg '>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
         </div>
    </div>


  )
}

export default Food
