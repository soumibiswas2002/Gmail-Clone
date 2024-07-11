import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; // Import Firestore functions
import { db } from "../firebase"; // Adjust the path to your Firebase config file

const SendMail = () => {
  const [formData, setFormData] = useState({
    recipients: "",
    subject: "",
    message: "",
  });

  const dispatch = useDispatch();
  const open = useSelector((store) => store.appSlice.open);

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "emails"), {
      to: formData.recipients,
      subject: formData.subject,
      message: formData.message,
      createdAt: serverTimestamp(),
    })
    dispatch(setOpen(false));
    setFormData({
      recipients: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } bg-white max-w-6xl rounded-t-md shadow-xl shadow-slate-600`}
    >
      <div className="flex px-3 py-2 justify-between bg-[#F2F6Fc] rounded-t-md">
        <h1>New Message</h1>
        <div
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
          onClick={() => dispatch(setOpen(false))}
        >
          <RxCross2 size={10} />
        </div>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col p-3 gap-2">
        <input
          value={formData.recipients}
          onChange={changeHandler}
          type="text"
          placeholder="Recipients"
          name="recipients"
          className="outline-none py-1"
        />
        <input
          value={formData.subject}
          onChange={changeHandler}
          type="text"
          placeholder="Subject"
          name="subject"
          className="outline-none py-1"
        />
        <textarea
          value={formData.message}
          onChange={changeHandler}
          name="message"
          cols="30"
          rows="10"
          className="outline-none py-1"
        ></textarea>
        <button
          type="submit"
          className="bg-[#0B57D0] rounded-full w-fit px-4 text-white font-medium"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default SendMail;
