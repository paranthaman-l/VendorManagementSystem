/* eslint-disable react/prop-types */
const AddService = ({ addRef }) => {
    return (
        <div className="w-full  z-30 bg-black bg-opacity-20 flex justify-center items-center fixed h-screen">
            <div ref={addRef} className="lg:col-start-2 absolute top-10 rounded max-w-4xl  bg-white col-span-12 lg:col-span-10 grid grid-cols-6 gap-x-8 gap-y-10 border-b border-darkGray/10 pb-12 mx-auto">
                <div className="p-4 col-span-6 md:col-span-2 ">
                    <div className="grid grid-cols-5">
                        <div className="md:col-span-5 group relative flex items-left gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-indigo1 ">
                            <div style={{ textAlign: 'center' }} className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray group-hover:bg-white mx-auto md:mx-0">
                                <svg className="mx-auto items-center justify-center h-6 w-6 text-darkGray group-hover:text-black" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                </svg>
                            </div>
                            <div className="flex-auto hidden md:block">
                                <p className="block font-semibold text-darkGray group-hover:text-white ">
                                    Personal Information
                                    <span className="absolute inset-0"></span>
                                </p>
                                <p className="mt-1 text-darkGray group-hover:text-lime-50 ">Get a better understanding of your traffic</p>
                            </div>
                        </div>
                        <div className="md:col-span-5 group relative flex items-left justify-left gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-indigo1">
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray group-hover:bg-white  mx-auto md:mx-0">
                                <svg className="h-6 w-6 text-darkGray group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                                </svg>
                            </div>
                            <div className="flex-auto  hidden md:block">
                                <p className="block font-semibold text-darkGray group-hover:text-white">
                                    Engagement
                                    <span className="absolute inset-0"></span>
                                </p>
                                <p className="mt-1 text-darkGray group-hover:text-lime-50">Speak directly to your customers</p>
                            </div>
                        </div>
                        <div className="md:col-span-5 group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-indigo1">
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray group-hover:bg-white  mx-auto md:mx-0">
                                <svg className="h-6 w-6 text-darkGray group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                                </svg>
                            </div>
                            <div className="flex-auto  hidden md:block">
                                <p className="block font-semibold text-darkGray group-hover:text-white">
                                    Security
                                    <span className="absolute inset-0"></span>
                                </p>
                                <p className="mt-1 text-darkGray group-hover:text-lime-50">Your customers’ data will be safe and secure</p>
                            </div>
                        </div>
                        <div className="md:col-span-5 group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-indigo1">
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray group-hover:bg-white  mx-auto md:mx-0">
                                <svg className="h-6 w-6 text-darkGray group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                            </div>
                            <div className="flex-auto  hidden md:block">
                                <p className="block font-semibold text-darkGray group-hover:text-white">
                                    Integrations
                                    <span className="absolute inset-0"></span>
                                </p>
                                <p className="mt-1 text-darkGray group-hover:text-lime-50">Connect with third-party tools</p>
                            </div>
                        </div>
                        <div className="md:col-span-5 group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-indigo1">
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray group-hover:bg-white  mx-auto md:mx-0">
                                <svg className="h-6 w-6 text-darkGray group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                            </div>
                            <div className="flex-auto  hidden md:block">
                                <p className="block font-semibold text-darkGray group-hover:text-white">
                                    Automations
                                    <span className="absolute inset-0"></span>
                                </p>
                                <p className="mt-1 text-darkGray group-hover:text-lime-50">Build strategic funnels that will convert</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 col-span-6 md:col-span-4">
                    <div className="mx-auto grid grid-cols-2 gap-x-8 gap-y-10">
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-darkGray">First name 1</label>
                            <div className="mt-2">
                                <input type="text" name="firstName" id="firstName" autoComplete="given-name" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-darkGray">Last name</label>
                            <div className="mt-2">
                                <input type="text" name="lastName" id="lastName" autoComplete="family-name" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-darkGray">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" className="block w-full indent-2 rounded-md border-0 py-1.5 text-darkGray shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-darkGray">Cancel</button>
                        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddService