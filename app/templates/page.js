'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  FiPlus, 
  FiFilter, 
  FiChevronDown, 
  FiMenu,
  FiX,
  FiUser,
  FiArrowUp
} from 'react-icons/fi';
import { BiSearchAlt } from 'react-icons/bi';
import { HiOutlineViewList } from "react-icons/hi";
import { LuSparkles } from "react-icons/lu";


import Sidebar from '../components/Sidebar';
import TemplateCard from '../components/TemplateCard';

export default function TemplatesPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('All Template');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // All Template data
  const allTemplates = [
    {
      id: 1,
      title: 'Welcome Message',
      type: 'Manual',
      status: 'Approved',
      creator: 'User',
      date: '2025-05-15',
      backgroundType: 'green',
      iconType: 'flame',
      needsReview: false
    },
    {
      id: 2,
      title: 'Flash Sale Offer',
      type: 'AI',
      status: 'Approved',
      creator: 'AI',
      date: '2025-02-15',
      backgroundType: 'blue',
      iconType: 'star',
      needsReview: false
    },
    {
      id: 3,
      title: 'Order Confirmation',
      type: 'Manual',
      status: 'Approved',
      creator: 'User',
      date: '2025-03-20',
      backgroundType: 'green',
      iconType: 'flame',
      needsReview: false
    },
    {
      id: 4,
      title: 'Welcome Message',
      type: 'AI',
      status: 'Pending Review',
      creator: 'AI',
      date: '2025-03-15',
      backgroundType: 'beige',
      iconType: 'flame',
      needsReview: false
    },
    {
      id: 5,
      title: 'Welcome Message',
      type: 'Manual',
      status: 'Approved',
      creator: 'User',
      date: '2025-05-15',
      backgroundType: 'green',
      iconType: 'star',
      needsReview: false
    },
    {
      id: 6,
      title: 'Abandoned Card Reminder',
      type: 'Manual',
      status: 'Draft',
      creator: 'User',
      date: '2025-02-24',
      backgroundType: 'blue',
      iconType: 'flame',
      needsReview: true
    },
    {
      id: 7,
      title: 'Customer Feedback Request',
      type: 'AI',
      status: 'Rejected',
      creator: 'AI',
      date: '2025-07-19',
      backgroundType: 'green',
      iconType: 'star',
      needsReview: false
    },
    {
      id: 8,
      title: 'Shipping Updates',
      type: 'Manual',
      status: 'Approved',
      creator: 'User',
      date: '2025-06-28',
      backgroundType: 'beige',
      iconType: 'flame',
      needsReview: false
    }
  ];

  // AI Suggestions data with new design
  const aiSuggestions = [
    {
      id: 1,
      title: 'Weekend Flash Sale',
      subtitle: 'Discount',
      content: 'Hey [[name]] This weekend only - Get 40% OFF on all products. Use Code WEEKEND40 at checkout',
      backgroundType: 'green',
      iconType: 'flame',
      topLeftIcon: 'star'
    },
    {
      id: 2,
      title: 'Welcome Message',
      subtitle: 'Welcome',
      content: 'Welcome to Growora, [[name]]. We are excited to have you. Here is 15% of on your first order',
      backgroundType: 'blue',
      iconType: 'star',
      topLeftIcon: 'star'
    },
    {
      id: 3,
      title: 'Cart Follow Up',
      subtitle: 'Reminder',
      content: 'Hi {{name}}, your left something behind complete your order now and get free shipping',
      backgroundType: 'beige',
      iconType: 'droplet',
      topLeftIcon: 'star'
    },
    {
      id: 4,
      title: 'Order Delivery Update',
      subtitle: 'Order Update',
      content: 'Great News, {{name}}! Your order #{{order_id}} is out for delivery and will arrive today',
      backgroundType: 'beige',
      iconType: 'flame',
      topLeftIcon: 'star'
    },
    {
      id: 5,
      title: 'Weekend Flash Sale',
      subtitle: 'Discount',
      content: 'Hey [[name]] This weekend only - Get 40% OFF on all products. Use Code WEEKEND40 at checkout',
      backgroundType: 'green',
      iconType: 'flame',
      topLeftIcon: 'star'
    },
    {
      id: 6,
      title: 'Welcome Message',
      subtitle: 'Welcome',
      content: 'Welcome to Growora, [[name]]. We are excited to have you. Here is 15% of on your first order',
      backgroundType: 'blue',
      iconType: 'star',
      topLeftIcon: 'star'
    },
    {
      id: 7,
      title: 'Cart Follow Up',
      subtitle: 'Reminder',
      content: 'Hi {{name}}, your left something behind complete your order now and get free shipping',
      backgroundType: 'beige',
      iconType: 'droplet',
      topLeftIcon: 'star'
    },
    {
      id: 8,
      title: 'Order Delivery Update',
      subtitle: 'Order Update',
      content: 'Great News, {{name}}! Your order #{{order_id}} is out for delivery and will arrive today',
      backgroundType: 'beige',
      iconType: 'flame',
      topLeftIcon: 'star'
    }
  ];

  // Get current templates based on active tab
  const currentTemplates = activeTab === 'AI Suggestions' ? aiSuggestions : allTemplates;
  
  const filteredTemplates = currentTemplates.filter(template =>
    template.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

        {/* Content Area */}
        <div className="p-4 sm:p-6">
          {/* Search and Create Template Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-6">
              {/* Search Template */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search Template"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 text-black py-3 border-none rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-[#E7F3EF]"
                />
                <BiSearchAlt className="text-xl absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
              </div>
              
              {/* Create Template Button */}
              <button 
                onClick={() => router.push('/templates/create')}
                className="flex items-center gap-2 px-6 py-3 bg-[#5F9D72] text-white text-sm font-medium rounded-full hover:bg-green-600 transition-colors cursor-pointer ml-4"
              >
                <FiPlus className="text-lg" />
                Create Template
              </button>
            </div>
          </div>

          {/* Header with Tabs and Filters */}
          <div className="mb-6">
            {/* Tabs and Filters */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setActiveTab('All Template')}
                  className={`pb-2 border-b-2 font-medium whitespace-nowrap cursor-pointer transition-colors 
                    flex items-center gap-2 ${
                    activeTab === 'All Template'
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <HiOutlineViewList  className="text-sm" />
                  All Template
                </button>
                <button
                  onClick={() => setActiveTab('AI Suggestions')}
                  className={`pb-2 border-b-2 font-medium whitespace-nowrap cursor-pointer transition-colors 
                    flex items-center gap-2
                    ${
                    activeTab === 'AI Suggestions'
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <LuSparkles  className="text-sm" />
                  AI Suggestions
                </button>
              </div>
 
              {/* Filters */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <FiFilter className="text-sm" />
                  <span className="text-sm font-medium">Filters</span>
                </div>
                <select className="px-3 py-1 border border-gray-300 text-black rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
                  <option>All templates</option>
                  <option>Approved</option>
                  <option>Draft</option>
                  <option>Pending Review</option>
                  <option>Rejected</option>
                </select>
              </div>
            </div>
          </div>

          {/* Template Grid - 2x4 layout */}
          <div className="grid grid-cols-4 gap-6">
            {filteredTemplates.map((template) => (
              <TemplateCard 
                key={template.id} 
                template={template} 
                isAISuggestion={activeTab === 'AI Suggestions'} 
              />
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            <span>Scroll for more templates</span>
          </div>
        </div>
      </div>
    </div>
  );
}
