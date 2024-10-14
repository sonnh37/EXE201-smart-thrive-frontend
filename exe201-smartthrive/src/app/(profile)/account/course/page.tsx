import React from 'react'

const page = () => {
    const posts = [
        {
            id: 1,
            title: 'Boost your conversion rate',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            category: {title: 'Marketing', href: '#'},
            author: {
                name: 'Michael Foster',
                role: 'Co-Founder / CTO',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        },
        // More posts...
    ]
    return (
        <div className='max-w-8xl w-full flex flex-col mt-5 mx-5 border border-gray-300 shadow-md p-4 rounded-lg'>
            {/* Upper Section - 1/4 height */}
            {/* <div className="h-1/4 bg-gray-200 p-4 flex items-center justify-center">
        <h1 className="text-2xl font-bold">Upper Section</h1>
      </div> */}

            {/* Lower Section - 3/4 height */}
            <div className=" h-3/4 flex flex-col">
                <div className="h-1/3 w-full flex bg-white py-16 ">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the My
                                Course</h2>
                            <p className="mt-2 text-lg leading-8 text-gray-600">
                                Learn how to grow your business with our expert advice.
                            </p>
                        </div>
                        <form className="max-w-md  mt-10">
                            <label
                                htmlFor="default-search"
                                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search Mockups, Logos..."
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2.5 bottom-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Search
                                </button>
                            </div>
                        </form>

                        <div
                            className=" grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10  sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div className="w-full flex flex-wrap justify-center items-start p-4">
                                <div
                                    className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                                    <div className="relative h-56 m-2.5 overflow-hidden rounded-md">
                                        <img
                                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                                            alt="card-image"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                            Website Review Check
                                        </h6>
                                        <p className="text-slate-600 leading-normal font-light">
                                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                            and near to "Naviglio" where you can enjoy the main night life in
                                            Barcelona.
                                        </p>
                                    </div>
                                    <div className="px-4 pb-4">
                                        <button
                                            className="rounded-md bg-slate-800 py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50"
                                            type="button">
                                            Read more
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap justify-center items-start p-4">
                                <div
                                    className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                                    <div className="relative h-56 m-2.5 overflow-hidden rounded-md">
                                        <img
                                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                                            alt="card-image"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                            Website Review Check
                                        </h6>
                                        <p className="text-slate-600 leading-normal font-light">
                                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                            and near to "Naviglio" where you can enjoy the main night life in
                                            Barcelona.
                                        </p>
                                    </div>
                                    <div className="px-4 pb-4">
                                        <button
                                            className="rounded-md bg-slate-800 py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50"
                                            type="button">
                                            Read more
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap justify-center items-start p-4">
                                <div
                                    className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                                    <div className="relative h-56 m-2.5 overflow-hidden rounded-md">
                                        <img
                                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                                            alt="card-image"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                            Website Review Check
                                        </h6>
                                        <p className="text-slate-600 leading-normal font-light">
                                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                            and near to "Naviglio" where you can enjoy the main night life in
                                            Barcelona.
                                        </p>
                                    </div>
                                    <div className="px-4 pb-4">
                                        <button
                                            className="rounded-md bg-slate-800 py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50"
                                            type="button">
                                            Read more
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div
                            className=" grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10  sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div className="w-full flex flex-wrap justify-center items-start p-4">
                                <div
                                    className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                                    <div className="relative h-56 m-2.5 overflow-hidden rounded-md">
                                        <img
                                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                                            alt="card-image"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                            Website Review Check
                                        </h6>
                                        <p className="text-slate-600 leading-normal font-light">
                                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                            and near to "Naviglio" where you can enjoy the main night life in
                                            Barcelona.
                                        </p>
                                    </div>
                                    <div className="px-4 pb-4">
                                        <button
                                            className="rounded-md bg-slate-800 py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50"
                                            type="button">
                                            Read more
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap justify-center items-start p-4">
                                <div
                                    className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                                    <div className="relative h-56 m-2.5 overflow-hidden rounded-md">
                                        <img
                                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                                            alt="card-image"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                            Website Review Check
                                        </h6>
                                        <p className="text-slate-600 leading-normal font-light">
                                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                            and near to "Naviglio" where you can enjoy the main night life in
                                            Barcelona.
                                        </p>
                                    </div>
                                    <div className="px-4 pb-4">
                                        <button
                                            className="rounded-md bg-slate-800 py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50"
                                            type="button">
                                            Read more
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap justify-center items-start p-4">
                                <div
                                    className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                                    <div className="relative h-56 m-2.5 overflow-hidden rounded-md">
                                        <img
                                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                                            alt="card-image"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                            Website Review Check
                                        </h6>
                                        <p className="text-slate-600 leading-normal font-light">
                                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                                            and near to "Naviglio" where you can enjoy the main night life in
                                            Barcelona.
                                        </p>
                                    </div>
                                    <div className="px-4 pb-4">
                                        <button
                                            className="rounded-md bg-slate-800 py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 disabled:pointer-events-none disabled:opacity-50"
                                            type="button">
                                            Read more
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page
