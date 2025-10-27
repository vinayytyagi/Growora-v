import { 
  FiEye, 
  FiEdit, 
  FiTrash2, 
  FiZap, 
  FiStar,
  FiCheck,
  FiX,
  FiDroplet
} from 'react-icons/fi';
import { LuSparkles } from "react-icons/lu";

export default function TemplateCard({ template, isAISuggestion = false }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-white text-green-600 border-1 border-green-600';
      case 'Draft':
        return 'bg-white text-gray-600 border-1  border-gray-600';
      case 'Needed Review':
        return 'bg-white text-green-600 border-1 border-green-600';
      case 'Rejected':
        return 'bg-red-100 text-red-600 border-1 border-red-600';
      case 'Pending Review':
        return 'bg-yellow-100 text-yellow-600 border-1 border-yellow-600';
      default:
        return 'bg-gray-100 text-gray-600 border-1 border-gray-600';
    }
  };

  const getBackgroundStyle = (type) => {
    switch (type) {
      case 'green':
        return {
          getBackgroundImage: "/assets/TemplateCard1.svg",
          getTextColor:"#fff"
        };
        case 'blue':
          return {
            getBackgroundImage: "/assets/TemplateCard2.svg",
            getTextColor:"#252525ff"
        };
      case 'beige':
        return {
          getBackgroundImage: "/assets/TemplateCard3.svg",
          getTextColor:"#252525ff"
        };
      default:
        return {
          getBackgroundImage: "/assets/TemplateCard4.svg",
          getTextColor:"#252525ff"
        };
    }
  };

  const getIconColor = (iconType) => {
    switch (iconType) {
      case 'flame':
        return 'text-red-500';
      case 'star':
        return 'text-yellow-500';
      case 'droplet':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'flame':
        return <img src='red-flame.svg' />;
      case 'star':
        return <img src='yellow-flame.svg'/>;
      case 'droplet':
        return <img src='blue-flame.svg'/>;
      default:
        return <img src='red-flame.svg'/>;
    }
  };
  let {getTextColor,getBackgroundImage} = getBackgroundStyle(template.backgroundType);

  if (isAISuggestion) {
    return (
      <div 
        className="relative rounded-lg px-2 py-4 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden"
        style={{color: getTextColor}}
      >
        <img className='absolute w-full h-full left-0 top-0 object-cover z-1' src={getBackgroundImage} />
        {/* top-left icon (absolute for consistency) */}
        <div className="absolute top-3 left-3 z-20">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
            <LuSparkles className="text-green-500 text-lg" />
          </div>
        </div>

        {/* top-right icon (absolute) */}
        <div className={`absolute top-4 right-3 z-20 ${getIconColor(template.iconType)}`}>
          {getIcon(template.iconType)}
        </div>

        {/* Title & subtitle */}
        <div className="pl-14 pr-4 z-20 relative">
          <h2 className="font-bold text-lg mb-1 truncate">{template.title}</h2>
          <p className="text-sm mb-3">{template.subtitle}</p>
        </div>

        {/* Content */}
        <div className="mb-4 bg-white z-20 relative rounded-lg p-[4px] mx-3" style={{maxHeight: '5.8rem', overflow: 'hidden'}}>
          <p className="text-sm text-black leading-relaxed overflow-hidden">{template.content}</p>
        </div>

        {/* Action buttons pinned to bottom */}
        <div className="flex gap-4 z-20 relative bg-green-800 rounded-full text-white justify-between mx-3 mt-auto mb-3">
          <button className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-full hover:text-zinc-300 transition-colors cursor-pointer">
            <FiCheck className="text-xs" />
            <span>Edit & Accept</span>
          </button>
          <button className="flex items-center  gap-1 px-3 py-1.5 text-xs rounded-full hover:text-zinc-300 transition-colors cursor-pointer">
            <FiX className="text-xs" />
            <span>Discard</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative rounded-lg p-6 shadow-sm border  bg-cover bg-center bg-no-repeat border-gray-200 hover:shadow-md transition-all duration-200"
      style={{color: getTextColor}}
      >
        <img className='absolute w-full h-full left-0 top-0 object-cover z-1' src={getBackgroundImage} />
      {/* Top right icon */}
      <div className={`absolute top-6 right-5 z-20 ${getIconColor(template.iconType)}`}>
        {getIcon(template.iconType)}
      </div>

      {/* Template title */}
      <h3 className="font-bold text-lg mb-2 pr-8 z-20 relative   ">{template.title}</h3>

      {/* Template type */}
      <p className="text-sm mb-2 z-20 relative">Type: {template.type}</p>

      {/* Status */}
      <div className="mb-3 flex flex-wrap gap-2 z-20 relative">
        <span className={`px-2 py-1 rounded-full text-xs font-medium  ${getStatusColor(template.status)}`}>
          {template.status}
        </span>
        {template.needsReview && (
          <span className="px-2 py-1 rounded-full text-xs  font-medium bg-white text-green-600 border-1 border-green-600">
            Needed Review
          </span>
        )}
      </div>

      {/* Creator and Date */}
      <div className="mb-4 space-y-1 z-20 relative">
        <div className="text-sm">
          <span>Created by: {template.creator}</span>
        </div>
        <div className="text-sm">
          <span>{template.date}</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex z-20 relative text-xs gap-1 bg-green-800 rounded-full text-white justify-center">
        <button className="flex gap-[4px] text-xs items-center px-3 py-1.5 text-sm rounded-full hover:text-zinc-300 transition-colors cursor-pointer">
          <FiEye/>
          <span>Preview</span>
        </button>
        <button className="flex gap-[4px] text-xs items-center  px-3 py-1.5 text-sm rounded-full hover:text-zinc-300 transition-colors cursor-pointer">
          <FiEdit/>
          <span>Edit</span>
        </button>
        <button className="flex gap-[4px] text-xs items-center px-3 py-1.5 text-sm rounded-full hover:text-zinc-300 transition-colors cursor-pointer">
          <FiTrash2/>
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}
