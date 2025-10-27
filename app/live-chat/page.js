'use client'
import { useState } from "react";
import ChatIdCard from "../components/ChatIdCard"
import Sidebar from "../components/Sidebar"
import { BiSearchAlt } from "react-icons/bi";
import { FiArrowUp, FiUser } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { BsCalendarMonth } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { PiImageLight } from "react-icons/pi";

const page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChat, setSelectedChat] = useState(0);
  const [text, setText] = useState('');

  // Helper: calculate number of months since a date string (expected format dd/mm/yyyy)
  const getMonthsSince = (dateStr) => {
    if (!dateStr || typeof dateStr !== 'string') return null;
    const parts = dateStr.split('/');
    if (parts.length !== 3) return null;
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // zero-based month
    const year = parseInt(parts[2], 10);

    const joined = new Date(year, month, day);
    const now = new Date();

    let months = (now.getFullYear() - joined.getFullYear()) * 12 + (now.getMonth() - joined.getMonth());
    // adjust if current day is before join day
    if (now.getDate() < joined.getDate()) months -= 1;
    return months >= 0 ? months : 0;
  };

  const userData = [{
    image:'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    name:'Karan',
    quate:"I am a developer",
    userId:1,
    special:"loved",
    messagesIds:[1],
    contactDetails:{
      email:'karan@gmail.com',
      phone:'+91 1234567890',
      adress:"Maratha collage Madhya pradesh, India",
      joinDate:"12/12/2022"
    }
  },{
    image:'https://plus.unsplash.com/premium_photo-1689533448099-2dc408030f0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    name:'Jone doe',
    quate:"I am a Graphic designer",
    userId:2,
    special:"favroite",
    messagesIds:[1],
    contactDetails:{
      email:'john@gmail.com',
      phone:'+91 0987654321',
      adress:"Borivali Mumbai, India",
      joinDate:"12/12/2024"
    }
  },{
    image:'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx',
    name:"binod",
    quate:"I am a developer",
    userId:3,
    special:"cool",
    messagesIds:[1],
    contactDetails:{
      email:'binod@gmail.com',
      phone:'+91 1234567890',
      adress:"Maratha collage Madhya pradesh, India",
      joinDate:"12/12/2022"
    }
  },{
    image:'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx',
    name:"Ram krishna",
    quate:"I am a Editor",
    userId:4,
    messagesIds:[1],
    contactDetails:{
      email:'binod@gmail.com',
      phone:'+91 1234567890',
      adress:"Maratha collage Madhya pradesh, India",
      joinDate:"12/12/2022"
    }
  }]

  const messagesData = [{
    id:1,
    user1:{
      id:1,
      message:"Hello how are you?",
    },
    user2:{
      id:2,
      message:"I am fine",
    }
  },{
    id:2,
    user1:{
      id:1,
      message:"Whats your name?",
    },
    user2:{
      id:2,
      message:"I am John.",
    }
  }]


  return (
    <div className="flex min-h-screen bg-gray-50">
          {/* Sidebar */}
          <div className='fixed inset-y-0 left-0 z-50 '>
            <Sidebar activeItem="Live Chat" />
          </div>
    
          {/* Main Content */}
          <div className="flex-1 lg:ml-64  ">
            {/* Header */}
                    <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
                      <div className="flex items-center justify-between flex-wrap">
                        <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-center lg:justify-start">
                          <span className="px-2 sm:px-3 py-1 bg-[#5F9D72] text-white text-xs sm:text-sm font-medium rounded-full">
                            API Status: Pending
                          </span>
                          <span className="px-2 sm:px-3 py-1 bg-[#5F9D72] text-white text-xs sm:text-sm font-medium rounded-full">
                            Current Plan: Free Forever
                          </span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-4">
                          <button className="flex items-center gap-1 px-3 sm:px-4 py-2 bg-green-500 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-green-600 transition-colors cursor-pointer">
                            <FiArrowUp className="text-sm" />
                            <span className="hidden sm:inline">Upgrade Plan</span>
                          </button>
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
                            <FiUser className="text-sm text-gray-600" />
                          </div>
                        </div>
                      </div>
                    </div>

            <div className="flex w-full h-[91vh] overflow-hidden">
              <div className="w-1/4 bg-white h-[92vh]">
                {/* Search Template */}
                  <div className="relative flex-1 max-w-md w-5/6 mx-auto my-2 ">
                  <input
                      type="text"
                      placeholder="Search Template"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className=" pl-10 pr-4 w-full text-black py-3 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-[#E7F3EF]"
                  />
                  <BiSearchAlt className="text-xl absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                  </div>
                  <div className="flex flex-col overflow-y-auto scrollbar-hide">
                    { userData.map((user)=>(
                        <ChatIdCard selectedChat={selectedChat} setChat={setSelectedChat} data={user}/>
                      ))}
                  </div>
              </div>
                {/* Chat */}
              <div className="w-2/4 bg-gray-100 h-[92vh] flex flex-col relative pb-[5%]">
                      <div style={{ backgroundImage: "url('/assets/ChatBackground.svg')" }} className="messages flex flex-col gap-4 p-4 flex-1 overflow-y-auto">
                        {
                          messagesData.map((message)=>{
                            const user1 = userData.find((user)=>user.userId === message.user1.id);
                            const user2 = userData.find((user)=>user.userId === message.user2.id);

                            return <>
                               <div className="flex justify-end gap-2 relative mt-2" key={message.id}>
                                  <p className="bg-green-500 text-white rounded-lg rounded-tr-none px-4 py-2 max-w-[70%] break-words shadow-sm">
                                    {message.user1.message}
                                  </p>
                                  <p className="absolute z-9 -top-6 text-xs text-[#618A7D] right-16">{user1.name}</p>
                                  <img className="w-12 h-12 rounded-full object-cover relative right-0 top-5" src={user1.image} />
                                </div>
                                <div className="flex justify-start relative gap-2 mt-2" key={message.id} >
                                  <p className="absolute z-9 -top-6 text-xs text-[#618A7D]  left-16">{user2.name}</p>
                                  <img className="w-12 h-12 rounded-full object-cover relative right-left top-5" src={user2.image} />
                                  <p className="bg-white text-black rounded-lg rounded-tl-none px-4 py-2 max-w-[70%] break-words shadow-sm">
                                    {message.user2.message}
                                  </p>
                                </div>
                            </>
                          })
                        }
                        <div className="input-field absolute gap-2 bottom-[8%] w-[90%] flex  items-center ">
                         <img className="w-10 h-10 rounded-full object-cover relative" src={userData[0].image}/>
                        <input
                          type="text"
                          placeholder="Enter message here..."
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                          className=" pl-6 pr-4 w-full text-black py-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                        />
                        <div
                          className="pl-2 pr-4 py-3 rounded-r-lg flex items-center-justify-between gap-2 h-full w-1/8 absolute right-0 top-1 "
                        >
                          <PiImageLight />
                          <MdOutlineEmojiEmotions />
                        </div>
                      </div>
                      </div>
                      
              </div>
               {/* user Details */}
              <div className="w-1/4 flex flex-col gap-3 h-[92vh]">
                    <h2 className="text-xl font-bold ml-4 mt-2">Customer Details</h2>

                    <div className="flex flex-col bg-white w-[80%] mx-auto p-4 rounded-lg gap-3">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 bg-[#E8F2F0] flex items-center justify-center rounded-lg ">
                          <TfiEmail className="text-2xl" />
                        </div>
                        <div>
                          <h3>{userData[0].name}</h3>
                          <p className="text-sm text-[#618A7D]">{userData[0].contactDetails.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col bg-white w-[80%] mx-auto p-4 rounded-lg gap-3">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 bg-[#E8F2F0] flex items-center justify-center rounded-lg ">
                          <FaPhoneAlt className="text-2xl" />
                        </div>
                        <div>
                          <h3>Phone</h3>
                          <p className="text-sm text-[#618A7D]">{userData[0].contactDetails.phone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col bg-white w-[80%] mx-auto p-4 rounded-lg gap-3">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 bg-[#E8F2F0] flex items-center justify-center rounded-lg ">
                          <CiLocationOn className="text-2xl" />
                        </div>
                        <div>
                          <h3>Adress</h3>
                          <p className="text-xs text-[#618A7D]">{userData[0].contactDetails.adress}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col bg-white w-[80%] mx-auto p-4 rounded-lg gap-3">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 bg-[#E8F2F0] flex items-center justify-center rounded-lg ">
                          <BsCalendarMonth className="text-2xl" />
                        </div>
                        <div>
                          <h3>Member Since</h3>
                          <p className="text-sm text-[#618A7D]">
                            {(() => {
                              const months = getMonthsSince(userData[0].contactDetails.joinDate);
                              if (months === null) return userData[0].contactDetails.joinDate;
                              if (months === 0) return 'Less than a month ago';
                              return `Joined ${months} month${months > 1 ? 's' : ''} ago`;
                            })()}
                          </p>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default page