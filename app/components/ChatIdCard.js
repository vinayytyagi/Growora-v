
const ChatIdCard = ({data,setChat,selectedChat}) => {
  const {image,name,quate,userId} = data;

  const handleSelect = (userId)=>{
    setChat(userId)
  }
  const getSpecialLogo = (user) => {
    if(user.special === "loved"){
      return "/red-flame.svg"
    } else if(user.special === "favroite"){
      return "/yellow-flame.svg"
    } else if(user.special === "cool"){
      return "/blue-flame.svg"
    } else {
      ''
    }
  }
  let isSpecialLogo = getSpecialLogo(data);
  return (
    <div onClick={()=>handleSelect(userId)} className={`${userId === selectedChat ? "bg-green-500 text-white" : 'bg-white'} flex gap-2  items-center p-2 border-b-1 border-gray-200 relative cursor-pointer`}>
      <img src={image} alt="user" className='w-14 h-14 rounded-full object-cover'/>
      <div className='flex flex-col gap-1'>
        <h1 className='text-lg font-semibold'>{name}</h1>
        <p className={`${userId === selectedChat && "text-white"}text-gray-500`}>{quate}</p>
      </div>
      {
        isSpecialLogo &&
        <img src={isSpecialLogo} className="absolute right-3 top-4" />
      }
      
    </div>
  )
}

export default ChatIdCard