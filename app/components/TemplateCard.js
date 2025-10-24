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
          background: "url(/assets/TemplateCard1.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        };
      case 'blue':
        return {
          background: "url(/assets/TemplateCard2.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        };
      case 'beige':
        return {
          background: "url(/assets/TemplateCard3.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        };
      default:
        return {
          background: "url(/assets/TemplateCard4.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
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
        return <FiZap className="text-lg" />;
      case 'star':
        return <FiStar className="text-lg" />;
      case 'droplet':
        return <FiDroplet className="text-lg" />;
      default:
        return <FiZap className="text-lg" />;
    }
  };

  if (isAISuggestion) {
    return (
      <div 
        className="relative rounded-lg px-2 py-4 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden"
        style={getBackgroundStyle(template.backgroundType)}
      >
        {/* top-left icon (absolute for consistency) */}
        <div className="absolute top-3 left-3 z-20">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-sm">
            <LuSparkles className="text-green-500 text-lg" />
          </div>
        </div>

        {/* top-right icon (absolute) */}
        <div className={`absolute top-3 right-3 z-20 ${getIconColor(template.iconType)}`}>
          {getIcon(template.iconType)}
        </div>

        {/* Title & subtitle */}
        <div className="pl-14 pr-4">
          <h2 className="font-bold text-lg mb-1 text-gray-900 truncate">{template.title}</h2>
          <p className="text-sm text-gray-600 mb-3">{template.subtitle}</p>
        </div>

        {/* Content */}
        <div className="mb-4 bg-white rounded-lg p-2 mx-3" style={{maxHeight: '5.5rem', overflow: 'hidden'}}>
          <p className="text-sm text-black leading-relaxed overflow-hidden">{template.content}</p>
        </div>

        {/* Action buttons pinned to bottom */}
        <div className="flex gap-4 bg-green-800 rounded-full text-white justify-between mx-3 mt-auto mb-3">
          <button className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-full hover:bg-green-700 transition-colors cursor-pointer">
            <FiCheck className="text-xs" />
            <span>Edit & Accept</span>
          </button>
          <button className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-full hover:bg-green-700 transition-colors cursor-pointer">
            <FiX className="text-xs" />
            <span>Discard</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
      style={getBackgroundStyle(template.backgroundType)}
    >
      {/* Top right icon */}
      <div className={`absolute top-3 right-3 ${getIconColor(template.iconType)}`}>
        {getIcon(template.iconType)}
      </div>

      {/* Template title */}
      <h3 className="font-bold text-lg mb-2 pr-8 text-gray-900">{template.title}</h3>

      {/* Template type */}
      <p className="text-sm text-gray-600 mb-2">Type: {template.type}</p>

      {/* Status */}
      <div className="mb-3 flex flex-wrap gap-2">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(template.status)}`}>
          {template.status}
        </span>
        {template.needsReview && (
          <span className="px-2 py-1 rounded-full text-xs  font-medium bg-white text-green-600 border-1 border-green-600">
            Needed Review
          </span>
        )}
      </div>

      {/* Creator and Date */}
      <div className="mb-4 space-y-1">
        <div className="text-sm text-gray-600">
          <span>Created by: {template.creator}</span>
        </div>
        <div className="text-sm text-gray-600">
          <span>{template.date}</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 bg-green-800 rounded-full text-white justify-center">
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-full hover:bg-green-600 transition-colors cursor-pointer">
          <FiEye className="text-sm" />
          <span>Preview</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-full hover:bg-green-600 transition-colors cursor-pointer">
          <FiEdit className="text-sm" />
          <span>Edit</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-full hover:bg-green-600 transition-colors cursor-pointer">
          <FiTrash2 className="text-sm" />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}
