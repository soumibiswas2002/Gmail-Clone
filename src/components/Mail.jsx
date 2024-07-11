import React from "react";
import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Mail = () => {
  const navigate = useNavigate();
  const {selectedEmail} = useSelector((store)=>store.appSlice);
  
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div onClick={()=>{navigate("/")}} className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdArrowBack size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <BiArchiveIn size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineReport size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdDeleteOutline size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineMarkEmailUnread size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineWatchLater size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineAddTask size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineDriveFileMove size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={20} />
          </div>
        </div>
        <div className="flex items-center gap-2">
            <p className="text-gray-500 text-sm">1-50 of 1584</p>
            <button className="hover:rounded-full hover:bg-gray-100">
              <MdKeyboardArrowLeft size={24} />
            </button>
            <button className="hover:rounded-full hover:bg-gray-100">
              <MdKeyboardArrowRight size={24} />
            </button>
          </div>
      </div>
      <div className="h-[90vh] overflow-y-auto p-4">
        <div className="flex items-center justify-between bg-white gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-sans">{selectedEmail?.subject}</h1>
            <span className="bg-gray-200 text-gray-500 px-2 rounded-md text-sm">Inbox x</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>{new Date(selectedEmail?.createdAt?.seconds*1000).toUTCString()}</p>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <h1>{selectedEmail?.to}</h1>
          <span>to me</span>
        </div>
        <div className="my-10">
          <p>{selectedEmail?.message}</p>
        </div>

      </div>
    </div>
  );
};

export default Mail;
