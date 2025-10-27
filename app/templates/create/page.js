'use client';

import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@/components/ui/shadcn-io/dropzone';
import { useState } from 'react';
import { 
  FiMenu,
  FiUser,
  FiArrowUp,
  FiChevronDown,
  FiSave,
  FiSend,
  FiPlus,
  FiMinus
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
    footer: '',
    // Call To Action fields
    ctaTitle: '',
    ctaLink: '',
    // Quick Reply fields
    quickReplyTitle: '',
    quickReplyNumber: ''
  });
  const [files, setFiles] = useState(null);
  const [callToAction,setCallToAcction] = useState(false)
  const [quickReplay,setQuickReplly] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleDrop = (files) => {
    setFiles(files);
  };
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <div className='fixed inset-y-0 left-0 z-50 '>
        <Sidebar activeItem="Templates" />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4 flex-1 justify-center lg:justify-start">
              <span className="px-3 sm:px-3 py-1 bg-[#3FB863] text-white text-xs sm:text-sm font-medium rounded-full">
                API Status: Pending
              </span>
              <span className="px-3 sm:px-3 py-1 bg-[#3FB863] text-white text-xs sm:text-sm font-medium rounded-full">
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
                    className="w-full text-gray-700 px-3 py-2 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Template Type */}
                <div>
                  <label className="block text-sm font-medium  text-gray-700 mb-2">Template Type</label>
                  <div className="relative">
                    <select
                      value={formData.templateType}
                      onChange={(e) => handleInputChange('templateType', e.target.value)}
                      className="w-full px-3 py-2 border border-green-600 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none cursor-pointer"
                    >
                      <option value="Text">Text</option>
                      <option value="Image">Image</option>
                    </select>
                    <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                {
                  (formData.templateType === 'Image' ) && (
                  <div className='w-full'>
                    <Dropzone
                      maxFiles={1}
                      onDrop={handleDrop}
                      onError={console.error}
                      src={files}
                      
                    >
                      <DropzoneEmptyState />
                      <DropzoneContent />
                    </Dropzone>
                  </div>
                  )
                }

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <div className="relative">
                    <select
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full px-3 py-2 border text-gray-700 border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none cursor-pointer"
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
                      className="w-full px-3 text-gray-700 py-2 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none cursor-pointer"
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
                    className="w-full text-gray-700 px-3 py-2 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
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
                    className="w-full px-3 py-2 text-gray-700 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Add Buttons */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Add Buttons</label>
                  <div className="flex gap-2">
                    <button onClick={()=>{
                      setCallToAcction(!callToAction)
                      setQuickReplly(false)
                    }
                    } className={`${callToAction && 'bg-green-800' } flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors cursor-pointer`}>
                      {!callToAction ? <FiPlus className="text-sm" /> : <FiMinus className="text-sm" />}
                      Call To Action
                    </button>
                    <button onClick={()=>{
                      setQuickReplly(!quickReplay)
                      setCallToAcction(false)
                    }} className={`${quickReplay && 'bg-green-800' } flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors cursor-pointer`}>
                      {!quickReplay ? <FiPlus className="text-sm" /> : <FiMinus className="text-sm" />}
                      Quick Reply
                    </button>
                  </div>
                </div>
              </div>
            {/* callToAction & Quick Reply */}
            {
              callToAction && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Button Title</label>
                  <input
                    type="text"
                    placeholder="Shop Now"
                    value={formData.ctaTitle}
                    onChange={(e) => handleInputChange('ctaTitle', e.target.value)}
                    className="w-full text-gray-700 px-3 py-2 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />

                  <label className="block text-sm font-medium text-gray-700 mb-2 mt-3">Link</label>
                  <input
                    type="text"
                    placeholder="www.grower.in"
                    value={formData.ctaLink}
                    onChange={(e) => handleInputChange('ctaLink', e.target.value)}
                    className="w-full text-gray-700 px-3 py-2 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              )
            }
            {
              quickReplay && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Button Title</label>
                  <input
                    type="text"
                    placeholder="Call Us"
                    value={formData.quickReplyTitle}
                    onChange={(e) => handleInputChange('quickReplyTitle', e.target.value)}
                    className="w-full text-gray-700 px-3 py-2 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />

                  <label className="block text-sm font-medium text-gray-700 mb-2 mt-3">Contact Number</label>
                  <input
                    type="text"
                    placeholder="+919000000000"
                    value={formData.quickReplyNumber}
                    onChange={(e) => handleInputChange('quickReplyNumber', e.target.value)}
                    className="w-full text-gray-700 px-3 py-2 border border-green-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              )
            }
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
                  <div className="bg-[#E7F3EF] px-4 py-3 flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#5F9D72] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">G</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Growora</h3>
                      <p className="text-sm text-gray-600">Business Account</p>
                    </div>
                  </div>
                  
                  {/* Preview Content */}
                  <div className="p-4 min-h-96 bg-gray-50 relative">
                    <div className="rounded-lg p-4 shadow-sm bg-[#E7F3EF] relative z-2">
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

                      {/* CTA / Quick Reply preview (uses form data) */}
                      {(formData.ctaTitle || formData.quickReplyTitle) && (
                        <div className="mt-4  rounded-lg p-4">
                          <div className="max-w-md mx-auto">
                            {formData.ctaTitle && (
                              <button
                                type="button"
                                className="w-full mb-3 px-4 py-2 border-1 border-green-600 text-black rounded-full font-medium hover:bg-green-50 transition-colors"
                              >
                                {formData.ctaTitle}
                              </button>
                            )}

                            {formData.quickReplyTitle && (
                              <a href={formData.quickReplyNumber ? `tel:${formData.quickReplyNumber}` : '#'}>
                                <button
                                  type="button"
                                  className="w-full px-4 py-2 border-1 border-green-600 text-black rounded-full font-medium hover:bg-green-50 transition-colors"
                                >
                                  {formData.quickReplyTitle}
                                </button>
                              </a>
                            )}

                            <div className="text-right text-xs text-gray-400 mt-2">5:00 pm</div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Background Pattern (same style as chat) */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage: "url('/assets/ChatBackground.svg')",
                        backgroundRepeat: 'repeat',
                        backgroundPosition: 'center',
                        opacity: 0.4
                      }}
                    />
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
