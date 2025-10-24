'use client';

import { useState } from 'react';
import { 
  FiMenu,
  FiUser,
  FiArrowUp,
  FiChevronDown,
  FiSave,
  FiSend,
  FiPlus
} from 'react-icons/fi';
import Sidebar from '../../components/Sidebar';

export default function CreateTemplatePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    templateName: '',
    templateType: 'Text',
    category: '',
    language: '',
    messageBody: '',
    footer: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 lg:relative lg:translate-x-0 transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <Sidebar activeItem="Templates" />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 cursor-pointer"
            >
              <FiMenu className="text-xl" />
            </button>

            <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-center lg:justify-start">
              <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-800 text-xs sm:text-sm font-medium rounded-full">
                API Status: Pending
              </span>
              <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-800 text-xs sm:text-sm font-medium rounded-full">
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

        {/* Content Area */}
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Template Creation Form */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Create New Template</h1>
                <p className="text-gray-600">Enter template details ......</p>
              </div>

              <div className="space-y-4">
                {/* Template Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Template Name</label>
                  <input
                    type="text"
                    placeholder="Enter Template Name"
                    value={formData.templateName}
                    onChange={(e) => handleInputChange('templateName', e.target.value)}
                    className="w-full px-3 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Template Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Template Type</label>
                  <div className="relative">
                    <select
                      value={formData.templateType}
                      onChange={(e) => handleInputChange('templateType', e.target.value)}
                      className="w-full px-3 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none cursor-pointer"
                    >
                      <option value="Text">Text</option>
                      <option value="Image">Image</option>
                      <option value="Video">Video</option>
                      <option value="Document">Document</option>
                    </select>
                    <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <div className="relative">
                    <select
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full px-3 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none cursor-pointer"
                    >
                      <option value="">Select Category</option>
                      <option value="Welcome">Welcome</option>
                      <option value="Promotion">Promotion</option>
                      <option value="Reminder">Reminder</option>
                      <option value="Order Update">Order Update</option>
                    </select>
                    <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Language */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                  <div className="relative">
                    <select
                      value={formData.language}
                      onChange={(e) => handleInputChange('language', e.target.value)}
                      className="w-full px-3 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none cursor-pointer"
                    >
                      <option value="">Select Language</option>
                      <option value="English">English</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                    </select>
                    <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Message Body */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message Body</label>
                  <textarea
                    placeholder="Enter your message. Use {{name}} for placeholders"
                    value={formData.messageBody}
                    onChange={(e) => handleInputChange('messageBody', e.target.value)}
                    rows={6}
                    className="w-full px-3 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  />
                  <p className="text-sm text-gray-500 mt-1">Use placeholders like {'{{name}}'}, {'{{order_id}}'} etc.</p>
                </div>

                {/* Footer */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Footer(optional)</label>
                  <input
                    type="text"
                    placeholder="Enter footer text"
                    value={formData.footer}
                    onChange={(e) => handleInputChange('footer', e.target.value)}
                    className="w-full px-3 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Add Buttons */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Add Buttons</label>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors cursor-pointer">
                      <FiPlus className="text-sm" />
                      Call To Action
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors cursor-pointer">
                      <FiPlus className="text-sm" />
                      Quick Reply
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button className="flex items-center gap-2 px-6 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors cursor-pointer">
                  <FiSave className="text-sm" />
                  Save Draft
                </button>
                <button className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                  <FiSend className="text-sm" />
                  Submit
                </button>
              </div>
            </div>

            {/* Right Column - Template Preview */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Template Preview</h2>
                
                {/* Preview Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  {/* Header */}
                  <div className="bg-green-100 px-4 py-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">G</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Growora</h3>
                      <p className="text-sm text-gray-600">Business Account</p>
                    </div>
                  </div>
                  
                  {/* Preview Content */}
                  <div className="p-4 min-h-96 bg-gray-50 relative">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      {formData.messageBody ? (
                        <div className="text-gray-800 whitespace-pre-wrap">
                          {formData.messageBody}
                        </div>
                      ) : (
                        <div className="text-gray-400 italic">
                          Your message preview will appear here...
                        </div>
                      )}
                      {formData.footer && (
                        <div className="mt-3 pt-3 border-t border-gray-200 text-sm text-gray-600">
                          {formData.footer}
                        </div>
                      )}
                    </div>
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                      <div className="grid grid-cols-8 gap-2 h-full">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div key={i} className="text-gray-400 text-xs flex items-center justify-center">
                            💬
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
