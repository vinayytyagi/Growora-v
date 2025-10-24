'use client';

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BusinessPage() {
  const router = useRouter();
  const [businessName, setBusinessName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (businessName.trim()) {
      console.log('Business name:', businessName);
      router.push('/industry');
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
              <div className="w-10 h-2 bg-white/20 rounded-full"></div>
              <div className="w-10 h-2 bg-white/20 rounded-full"></div>
              <div className="w-10 h-2 bg-white/20 rounded-full"></div>
              <div className="w-10 h-2 bg-white/20 rounded-full"></div>
            </div>
            <div className="">
              <span className="text-white text-xs font-medium">Step 3 out of 7</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-4 sm:px-8 pt-16 sm:pt-8 relative z-10">
          <div className="w-full text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Let us know your business
            </h1>
            
            <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
              Power up your automation — start by naming your business.
            </p>

            <form onSubmit={handleSubmit} className="">
              <div className="mb-4 sm:mb-6">
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Enter your business name"
                  className="w-full max-w-md mx-auto px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-0 rounded-xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 shadow-lg"
                />
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
