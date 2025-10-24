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

export default function TemplateCard({ template, isAISuggestion = false }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Draft':
        return 'bg-gray-100 text-gray-800';
      case 'Needed Review':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'Pending Review':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getBackgroundStyle = (type) => {
    switch (type) {
      case 'green':
        return {
          background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)
          `
        };
      case 'blue':
        return {
          background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
          `
        };
      case 'beige':
        return {
          background: 'linear-gradient(135deg, #fefce8 0%, #fef3c7 100%)',
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)
          `
        };
      default:
        return {
          background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(107, 114, 128, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(107, 114, 128, 0.1) 0%, transparent 50%)
          `
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
        className="relative rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
        style={getBackgroundStyle(template.backgroundType)}
      >
        {/* Top left icon */}
        <div className="absolute top-3 left-3 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
          <FiStar className="text-green-600 text-sm" />
        </div>

        {/* Top right icon */}
        <div className={`absolute top-3 right-3 ${getIconColor(template.iconType)}`}>
          {getIcon(template.iconType)}
        </div>

        {/* Template title */}
        <h3 className="font-bold text-lg mb-1 pr-8 text-gray-900 mt-2">{template.title}</h3>

        {/* Template subtitle */}
        <p className="text-sm text-gray-600 mb-3">{template.subtitle}</p>

        {/* Content */}
        <div className="mb-4">
          <p className="text-sm text-gray-700 leading-relaxed">{template.content}</p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-1.5 bg-green-500 text-white text-xs rounded-full hover:bg-green-600 transition-colors cursor-pointer">
            <FiCheck className="text-xs" />
            <span>✓ Edit & Accept</span>
          </button>
          <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-500 text-white text-xs rounded-full hover:bg-gray-600 transition-colors cursor-pointer">
            <FiX className="text-xs" />
            <span>X Discard</span>
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
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
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
      <div className="flex gap-2">
        <button className="flex items-center gap-1 px-3 py-1.5 bg-green-500 text-white text-xs rounded-full hover:bg-green-600 transition-colors cursor-pointer">
          <FiEye className="text-xs" />
          <span>Preview</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-1.5 bg-green-500 text-white text-xs rounded-full hover:bg-green-600 transition-colors cursor-pointer">
          <FiEdit className="text-xs" />
          <span>Edit</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-1.5 bg-green-500 text-white text-xs rounded-full hover:bg-green-600 transition-colors cursor-pointer">
          <FiTrash2 className="text-xs" />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}
