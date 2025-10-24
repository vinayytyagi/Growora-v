'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function NichePage() {
  const router = useRouter();
  const [targetNiche, setTargetNiche] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const niches = [
    "Small Business Owners",
    "Entrepreneurs",
    "E-commerce Sellers",
    "SaaS Users",
    "Marketing Professionals",
    "Healthcare Providers",
    "Educators & Teachers",
    "Real Estate Agents",
    "Financial Advisors",
    "Restaurant Owners",
    "Tech Startups",
    "Retail Store Owners",
    "Manufacturing Companies",
    "Consultants",
    "Travel Agencies",
    "Content Creators",
    "Freelancers",
    "Non-profit Organizations",
    "Students",
    "General Consumers"
  ];

  const handleNicheSelect = (niche) => {
    setTargetNiche(niche);
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (targetNiche.trim()) {
      console.log('Target niche:', targetNiche);
      router.push('/whatsapp');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-800 relative overflow-hidden pt-8">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-600 rounded-full opacity-20 blur-sm"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-green-500 rounded-full opacity-30 blur-sm"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-green-700 rounded-full opacity-15 blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-600 rounded-full opacity-25 blur-sm"></div>
        <div className="absolute top-60 left-1/2 w-20 h-20 bg-green-500 rounded-full opacity-20 blur-sm"></div>
        <div className="absolute top-80 right-1/4 w-16 h-16 bg-green-400 rounded-full opacity-25 blur-sm"></div>
        <div className="absolute bottom-60 left-1/3 w-24 h-24 bg-green-600 rounded-full opacity-20 blur-sm"></div>
      </div>

      <div className="flex flex-col">
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20">
          <div className="flex flex-col space-y-1 sm:space-y-2">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-6 sm:w-8 lg:w-10 h-1 sm:h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="w-full h-full bg-white rounded-full"></div>
              </div>
              <div className="w-6 sm:w-8 lg:w-10 h-1 sm:h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="w-full h-full bg-white rounded-full"></div>
              </div>
              <div className="w-6 sm:w-8 lg:w-10 h-1 sm:h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="w-full h-full bg-white rounded-full"></div>
              </div>
              <div className="w-6 sm:w-8 lg:w-10 h-1 sm:h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="w-full h-full bg-white rounded-full"></div>
              </div>
              <div className="w-6 sm:w-8 lg:w-10 h-1 sm:h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="w-full h-full bg-white rounded-full"></div>
              </div>
              <div className="w-6 sm:w-8 lg:w-10 h-1 sm:h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="w-full h-full bg-white rounded-full"></div>
              </div>
              <div className="w-10 h-2 bg-white/20 rounded-full"></div>
            </div>
            <div className="">
              <span className="text-white text-xs font-medium">Step 6 out of 7</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-4 sm:px-8 pt-16 sm:pt-8 relative z-10">
          <div className="w-full text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Who is your target audience?
            </h1>
            
            <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
              Select your primary target niche or customer segment.
            </p>

            <form onSubmit={handleSubmit} className="">
              <div className="mb-4 sm:mb-6 flex justify-center">
                <div className="relative w-full max-w-md" ref={dropdownRef}>
                  <input
                    type="text"
                    value={targetNiche}
                    onChange={(e) => setTargetNiche(e.target.value)}
                    onFocus={() => setIsDropdownOpen(true)}
                    placeholder="eg. Small Business Owners, Entrepreneurs, E-commerce Sellers..."
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-0 rounded-xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 shadow-lg pr-10 sm:pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 max-h-48 sm:max-h-60 overflow-y-auto z-50">
                      {niches.map((niche, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleNicheSelect(niche)}
                          className="w-full px-4 sm:px-6 py-2 sm:py-3 text-left text-gray-800 hover:bg-green-50 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl cursor-pointer text-sm sm:text-base"
                        >
                          {niche}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                    className="w-full max-w-sm mx-auto bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer text-sm sm:text-base"
              >
                Continue
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-center relative">
          <div className="">
            <Image
              src="/assets/Green3.png"
              alt="Green Cartoon Character"
              width={300}
              height={300}
              className="w-[600px] h-[400px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
