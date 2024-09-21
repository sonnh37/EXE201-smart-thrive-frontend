"use client";
import { useState } from 'react';
import React from "react";
export default function Profile() {
  const [username, setUsername] = useState('Username');
  const [firstName, setFirstName] = useState('Username');
  const [lastName, setLastName] = useState('Username');
  const [email, setEmail] = useState('hiring@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('000000000000');
  const [country, setCountry] = useState('Vietnam');

  const handleSave = () => {
    // TODO: Send profile data to the server to be saved
    console.log('Saving profile data:', {
      username,
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
    });
  };

  return (
    //   <div className="flex-1 p-6">
    //     <div className="bg-white rounded-lg shadow-md p-6">
    //       <div className="flex items-center justify-between mb-6">
    //         <h2 className="text-2xl font-bold">About</h2>
    //         <p className="text-gray-500">Edit profile</p>
    //       </div>
    //       <div className="grid grid-cols-2 gap-6">
    //         <div>
    //           <label htmlFor="username" className="block text-sm font-medium text-gray-700">
    //             Username
    //           </label>
    //           <input
    //             type="text"
    //             id="username"
    //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    //             value={username}
    //             onChange={(e) => setUsername(e.target.value)}
    //           />
    //         </div>
    //         {/* ... other input fields ... */}
    //       </div>
    //       <div className="flex justify-end mt-6">
    //         <button
    //           type="button"
    //           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-3"
    //         >
    //           Cancel
    //         </button>
    //         <button
    //           type="button"
    //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //           onClick={handleSave}
    //         >
    //           Save
    //         </button>
    //       </div>
    //     </div>
    //   </div>
   
      <div className="w-full lg:w-11/12  mx-auto ">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-t">
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                User Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Username
                    </label>
                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="lucky.jesse" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Email address
                    </label>
                    <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="jesse@example.com" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      First Name
                    </label>
                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Lucky" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Last Name
                    </label>
                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Jesse" />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Address
                    </label>
                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      City
                    </label>
                    <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="New York" />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Country
                    </label>
                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="United States" />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      Postal Code
                    </label>
                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value="Postal Code" />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                About Me
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      About me
                    </label>
                    <textarea className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows={4} >
                         A beautiful UI Kit and Admin for JavaScript &amp; Tailwind CSS. It is Freeand Open Source.</textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
     

  );
}