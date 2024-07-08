import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

const SendMail = () => {
    const open = useSelector(store=>store.appSlice.open);
    // const open = false;
  return (
    <div className={`${open ? 'block' : 'hidden' }bg-white max-w-6xl rounded-t-md shadow-xl shadow-slate-600`}>
      <div className="flex px-3 py-2 justify-between bg-[#F2F6Fc] rounded-t-md">
        <h1>New Message</h1>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <RxCross2 size={10} />
        </div>
      </div>
      <form action="" className="flex flex-col p-3 gap-2">
        <input type="text" placeholder="To" className="outline-none py-1"/>
        <input type="text" placeholder="Subject" className="outline-none py-1"/>
        <textarea name="message" cols={30} rows={10} className="outline-none py-1"></textarea>
        <button type="submit" className="bg-[#0B57D0] rounded-full w-fit px-4 text-white font-medium">Send</button>
      </form>
    </div>
  );
};

export default SendMail;
