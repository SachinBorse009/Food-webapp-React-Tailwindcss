import React from 'react';
import { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose, AiTwotoneHeart, AiFillTags} from 'react-icons/ai'
import {BiSearchAlt } from 'react-icons/bi'
import {BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import {TbTruckDelivery } from 'react-icons/tb'
import {FaWallet, FaUserFriends } from 'react-icons/fa'
import {MdHelp } from 'react-icons/md'



const Navbar = () => {

    const  [nav, setNav] = useState(false);

    
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* Left side */}
            <div className='flex items-center '>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30}/>
                </div>
                <h1 className='text-2xl sm:text-3xl md:text-rxl px-2'>
                    Best<span className='font-bold text-orange-600'>Eats</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black rounded-full text-white p-2'>Deleviery</p>
                    <p className='px-2 text-bold'>Pickup</p>
                </div>
            </div>

            {/* serach input */}
            <div className='flex bg-gray-200 items-center p-1 rounded-full w-[200px] sm:w-[400px] lg:w[500px]'>
                <BiSearchAlt size={25}/>
                <input className='bg-transparent  px-1 w-full focus:outline-none' type="text" placeholder='Search foods...' />
            </div>

            {/* cart button */}
            <div >
                <button className='bg-black text-white md:flex items-center rounded-full flex ml-2'>
                    <BsFillCartFill size={15}/> Cart
                </button>
            </div>

            {/* mobile menu */}
            {/* Overlay */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10  top-0 left-0 '></div> : "" }
            
            
            {/* side drawer menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen z-10 bg-white duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen z-10 bg-white duration-300'}>
                <AiOutlineClose onClick={() =>setNav(!nav) } size={20} className='absolute right-4 top-6 cursor-pointer'  />
                <h2 className='text-2xl p-4'>Best <span className='font-bold text-orange-600'>Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='flex py-4 text-xl'><TbTruckDelivery size={30} className='mr-4' />Order</li>
                        <li className='flex py-4 text-xl'><AiTwotoneHeart size={30} className='mr-4' />Favorites</li>
                        <li className='flex py-4 text-xl'><FaWallet size={30} className='mr-4' />Wallet</li>
                        <li className='flex py-4 text-xl'><MdHelp size={30} className='mr-4' />Help</li>
                        <li className='flex py-4 text-xl'><AiFillTags size={30} className='mr-4' />Promotions</li>
                        <li className='flex py-4 text-xl'><BsFillSaveFill size={30} className='mr-4' />Best One</li>
                        <li className='flex py-4 text-xl'><FaUserFriends size={30} className='mr-4' />Invite Friends</li>
                    </ul>
                </nav>

            </div>
        </div>
    );
}

export default Navbar;
