import React, { useState } from 'react'
import { Pencil, Star, Clock, File, SendHorizontal, ChevronDown } from 'lucide-react';
import { MdInbox } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/appSlice';

const sidebarItem = [
  {
    icon:<MdInbox size={20} />,
    text: "Inbox"
  },
  {
    icon:<Star size={20} />,
    text: "Starred"
  },
  {
    icon:<Clock size={20} />,
    text: "Snoozed"
  },
  {
    icon:<SendHorizontal size={20} />,
    text: "Sent"
  },
  {
    icon:<File size={20} />,
    text: "Drafts"
  },
  {
    icon:<ChevronDown size={20} />,
    text: "More"
  }
]

const Sidebar = () => {
  // const [open, setOpen] = useState(false);  
  const dispatch = useDispatch();

  return (
    <div className='w-[15%]'>
        <div className='p-3'>
            <button onClick={() => dispatch(setOpen(true))} className='bg-[#C2E7FF] flex items-center gap-2 p-5 rounded-2xl hover:shadow-md'>
                <Pencil size={20} />
                Compose
            </button>
        </div>
        <div className='text-gray-500'>
        {
        sidebarItem.map((item, index) => {
          return(<div className='flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer my-2 hover:bg-gray-200'>
            {item.icon}
            {item.text}
          </div>
            )})
            }
        </div>
    </div>
  )
}

export default Sidebar