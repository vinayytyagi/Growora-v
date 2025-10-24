'use client';

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "john.doe@gmail.com",
    password: "growfy#0876",
    phone: "+9166545454"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    router.push('/plans');
  };

  return (
    <div className="min-h-screen bg-green-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-600 rounded-full opacity-20"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-green-500 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-green-700 rounded-full opacity-15"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-600 rounded-full opacity-25"></div>
        <div className="absolute top-60 left-1/2 w-20 h-20 bg-green-500 rounded-full opacity-20"></div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 flex items-center justify-center p-4 lg:p-8 pt-16 sm:pt-8 relative order-2 lg:order-1">
          <div className="max-w-xs sm:max-w-sm lg:max-w-md">
            <Image
              src="/assets/Green.png"
              alt="Green Cartoon Character"
              width={800}
              height={800}
              className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md"
              priority
            />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-4 lg:p-8 relative order-1 lg:order-2">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <div className="bg-green-50 rounded-2xl shadow-xl p-4 sm:p-6">
              <div className="text-center mb-8">
                <h1 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">
                  Let&apos;s get you all set up so you can access your account.
                </h1>
                <p className="text-sm sm:text-base text-green-700">
                  Enter details to get started
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-green-800 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-gray-700 placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-green-800 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-gray-700 placeholder-gray-400"
                    placeholder="Enter your password"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-green-800 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-gray-700 placeholder-gray-400"
                    placeholder="Enter your phone number"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 sm:py-3 px-4 rounded-lg transition-colors duration-200 cursor-pointer text-sm sm:text-base"
                >
                  Next
                </button>
              </form>

              <div className="text-center mt-4 sm:mt-6">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <a href="/login" className="text-green-500 hover:text-green-600 font-medium cursor-pointer">
                    Login
                  </a>
                </p>
              </div>

              <div className="relative my-3 sm:my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-green-50 text-gray-500">Or Sign up with</span>
                </div>
              </div>

              <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 sm:py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer text-sm sm:text-base">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
