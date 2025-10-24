'use client';

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PlansPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (planType) => {
    setSelectedPlan(planType);
    console.log('Selected plan:', planType);
    router.push('/business');
  };

  const features = [
    "Access to All Business Templates",
    "Unlimited WhatsApp Campaigns", 
    "AI Message Personalization",
    "Customer Segmentation Dashboard",
    "Automated Follow-ups & Reminders",
    "Smart lead segmentation (Hot, Warm, Cold)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-600 rounded-full opacity-20 blur-sm"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-green-500 rounded-full opacity-30 blur-sm"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-green-700 rounded-full opacity-15 blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-600 rounded-full opacity-25 blur-sm"></div>
        <div className="absolute top-60 left-1/2 w-20 h-20 bg-green-500 rounded-full opacity-20 blur-sm"></div>
        <div className="absolute top-80 right-1/4 w-16 h-16 bg-green-400 rounded-full opacity-25 blur-sm"></div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-20">
          <button
            onClick={() => router.push('/business')}
            className="bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-6 py-1 sm:py-2 text-white text-xs sm:text-sm font-medium hover:bg-white/20 transition-colors duration-200 cursor-pointer"
          >
            Skip
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center p-4 lg:p-8 pt-16 sm:pt-8 relative order-2 lg:order-1">
          <div className="max-w-xs sm:max-w-sm lg:max-w-md">
            <Image
              src="/assets/Green2.png"
              alt="Green Cartoon Character"
              width={300}
              height={300}
              className="w-[600px] h-[320px]"
              priority
            />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-4 lg:p-8 relative order-1 lg:order-2">
          <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-4xl">
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                  Choose your plan
                </h1>
                <p className="text-gray-600 text-base sm:text-lg">
                  Find the perfect plan that fits your business needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="text-center mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-4">Plus</h3>
                    
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <div className="text-2xl sm:text-3xl font-bold text-black">₹2,599</div>
                      <div className="text-gray-500 text-sm sm:text-base">/month</div>
                    </div>

                    <button
                      onClick={() => handlePlanSelect('monthly')}
                      className="w-full bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-200 transform hover:scale-105 cursor-pointer text-sm sm:text-base"
                    >
                      Choose Monthly
                    </button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="text-center mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-black mb-4">Plus</h3>
                    
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <div className="text-2xl sm:text-3xl font-bold text-black">₹30,000</div>
                      <div className="text-gray-500 text-sm sm:text-base">/yearly</div>
                    </div>

                    <button
                      onClick={() => handlePlanSelect('yearly')}
                      className="w-full bg-gradient-to-b from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-200 transform hover:scale-105 cursor-pointer text-sm sm:text-base"
                    >
                      Choose Yearly
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center mt-6">
                <button
                  onClick={() => router.push('/business')}
                  className="bg-green-200/50 backdrop-blur-sm rounded-full px-6 py-2 text-green-800 font-medium text-sm hover:bg-green-100/80 transition-colors duration-200 cursor-pointer"
                >
                  Skip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
