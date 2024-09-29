import React from 'react'

const page = () => {
  return (
 
       <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6">Course landing page</h1>
        
        {/* Course Title */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Course title</label>
          <input
            type="text"
            placeholder="Insert your course title"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Course Subtitle */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Course subtitle</label>
          <input
            type="text"
            placeholder="Insert your course subtitle"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Course Description */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Course description</label>
          <textarea
            rows={5}
            placeholder="Insert your course description"
            className="w-full border border-gray-300 p-2 rounded"
          ></textarea>
        </div>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block font-semibold mb-2">Language</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>English (US)</option>
              <option>Other Language</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">Level</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Select Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">Category</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Marketing</option>
              <option>Other Category</option>
            </select>
          </div>
        </div>

        {/* Course Image */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Course image</label>
          <div className='flex'>
          <div className="border border-gray-300 p-4 rounded flex justify-center items-center w-2/3 ">
            <p>Upload your course image</p>
            <input type="file" className="hidden" />
          </div>
          <div>áđáhjsakjdhákjdhákjhdsakjh</div>
          </div>
        </div>

        {/* Promotional Video */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Promotional video</label>
          <div className='flex'>
          <div className="border border-gray-300 p-4 rounded flex justify-center items-center">
            <p>Upload your promotional video</p>
            <input type="file" className="hidden" />
          </div>
          <div>áđáhjsakjdhákjdhákjhdsakjh</div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button className="bg-purple-600 text-white py-2 px-4 rounded-lg w-full hover:bg-purple-700 transition duration-300">
            Submit for Review
          </button>
        </div>
      </div>
    </div>

  )
}

export default page
