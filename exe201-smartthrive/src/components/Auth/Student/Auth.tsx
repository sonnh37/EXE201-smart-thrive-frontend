import React from 'react'

const Auth = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
    <div className="text-4xl font-bold mb-8">NOREM</div>
    <div className="text-lg font-medium mb-6">Who's watching?</div>
    <div className="flex space-x-4">
      <div className="w-24 h-24 bg-red-500 rounded-md flex flex-col items-center justify-center">
        <div className="text-sm font-medium">Name</div>
      </div>
      <div className="w-24 h-24 bg-red-500 rounded-md flex flex-col items-center justify-center">
        <div className="text-sm font-medium">Name</div>
      </div>
      <div className="w-24 h-24 bg-red-500 rounded-md flex flex-col items-center justify-center">
        <div className="text-sm font-medium">Name</div>
      </div>
    </div>
    <button className="mt-6 bg-gray-800 px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
      Manage Profiles
    </button>
  </div>
  )
}

export default Auth
