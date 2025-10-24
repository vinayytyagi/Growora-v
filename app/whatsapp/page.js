'use client';

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WhatsAppPage() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      setIsConnecting(true);
      console.log('Connecting WhatsApp API for:', phoneNumber);
      
      setTimeout(() => {
        setIsConnecting(false);
        console.log('WhatsApp API connected successfully!');
      }, 3000);
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
              <div className="w-6 sm:w-8 lg:w-10 h-1 sm:h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="w-full h-full bg-white rounded-full"></div>
              </div>
            </div>
            <div className="">
              <span className="text-white text-xs font-medium">Step 7 out of 7</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-4 sm:px-8 pt-16 sm:pt-8 relative z-10">
          <div className="w-full text-center">
            <div className="mb-4 sm:mb-6 flex justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Connect your WhatsApp API
            </h1>
            
            <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
              Enter your WhatsApp Business number to start sending automated messages.
            </p>

            <form onSubmit={handleSubmit} className="">
              <button
                type="submit"
                disabled={isConnecting}
                className="w-full max-w-sm mx-auto bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 disabled:from-green-300 disabled:to-green-400 text-white font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 shadow-lg flex items-center justify-center space-x-2 cursor-pointer text-sm sm:text-base"
              >
                {isConnecting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Connecting...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>Connect WhatsApp</span>
                  </>
                )}
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
