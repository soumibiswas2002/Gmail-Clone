import React from 'react'
import { Menu, Search, CircleHelp, Settings, Grip } from 'lucide-react';
import Avatar from 'react-avatar';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-3 h-16'>
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <Menu size={20}/>
                </div>
                <img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="gmail-logo" className='w-8'/>
                <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
            </div>
        </div>
        <div className='md:block hidden w-[50%] mr-60'>
            <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full gap-2'>
                <Search size={"24px"} className='text-gray-700'/>
                
                <input type="text" placeholder='Search Mail' className='rounded-full bg-transparent outline-none w-full px-1'/>
            </div>
        </div>
        <div className='md:block hidden'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                <CircleHelp size={25} className='text-gray-600'/>
                </div>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                <Settings size={25} className='text-gray-600'/>
                </div>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                <Grip size={25} className='text-gray-600'/>
                </div>
                <div className='border-2 border-black rounded-full cursor-pointer'>
                    <Avatar src='https://www.shutterstock.com/image-vector/black-woman-smiling-portrait-vector-600nw-2281497689.jpg' size={40} round={true}/>
            </div>
            </div>
            

        </div>
        
    </div>
  )
}

export default Navbar