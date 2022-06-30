import React from 'react'

const Admin = () => {
  return (
    <div className='w-full h-full p-5 flex flex-row bg-[#ffff]'>
      {/* 1st half */}
      <div className='w-[40%] h-full flex p-5 justify-center items-center flex-col'>
        <div className='w-full border border-solid border-gray-600 shadow-md rounded-md px-5 py-10 bg-white'>
          <div className='w-full h-20 border-b border-zinc-400 p-5 text-center flex flex-col justify-center'>
            <h3 className='text-xl font-medium'>Smile Signature</h3>
            <h4 className='text-base font-medium text-gray-600 leading-relaxed'>Marcos Alvarez</h4>
          </div>
          <div className='w-full'>
            <div className='w-full h-5 mt-3 text-center'>
              <h4 className='text-lg text-black font-semibold'>June, 2022</h4>
            </div>
            <div className='w-full flex flex-col mt-10'>
              <div className='p-3 m-2 border border-solid border-zinc-200 h-full'>
                <div className='text-center flex justify-center text-3xl h-full items-center'>
                  1
                </div>
              </div>
              <div className='text-center flex justify-center text-xl h-full items-center mt-2 text-gray-600'>
                <p>👏 Total Patients</p>
              </div>
              <div className='p-3 m-2 border border-solid border-zinc-200 h-full'>
                <div className='text-center flex justify-center text-3xl h-full items-center'>
                  1
                </div>
              </div>
              <div className='text-center flex justify-center text-xl h-full items-center mt-2 text-gray-600'>
                <p>🎉 Made Appointments</p>
              </div>
              <div className='p-3 m-2 border border-solid border-zinc-200 h-full'>
                <div className='text-center flex justify-center text-3xl h-full items-center'>
                  1
                </div>
              </div>
              <div className='text-center flex justify-center text-xl h-full items-center mt-2 text-gray-600'>
                <p>💸 Net Profit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd half */}
      <div className='w-full h-full flex flex-col p-5 justify-center items-center'>
        {/* Staff */}
        <div className='w-full border border-solid border-gray-600 shadow-md rounded-md m-5'>
          <div className='w-full text-center flex justify-center items-center mb-5 p-5'>
            <h3 className='text-xl text-gray-700 font-semibold'>Manage Staff</h3>
          </div>
          <div className='w-full flex flex-row'>
            <div className='w-full p-3'>
              <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-solid border-zinc-300'>
              <div class="mb-4">
                <input class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="@email_address" />
              </div>
              <div class="mb-4">
                <input class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="role" type="string" placeholder="role" />
              </div>
              <div className='mb-6'>
                <input class="hidden shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" value="password" />
              </div>
              <div class="flex items-center justify-end">
                <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Register
                </button>
              </div>
              </form>
            </div>
            <div className='w-full p-3'>
              <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-solid border-zinc-300'>
              <div class="mb-4">
                <input class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user" type="string" placeholder="🔍 search users" />
              </div>
              <div className='mb-6'>
                <input class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="@user_email" />
              </div>
              <div class="flex items-center justify-end">
                <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Remove
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className='w-full border border-solid border-gray-600 shadow-md rounded-md m-5'>
          <div className='w-full text-center flex justify-center items-center mb-5 p-5'>
            <h3 className='text-xl text-gray-700 font-semibold'>Manage Services</h3>
          </div>
          <div className='w-full flex flex-row'>
            <div className='w-full p-3'>
              <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-solid border-zinc-300'>
              <div class="mb-8 pt-12">
                <input class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="name" />
              </div>
              <div class="flex items-center justify-end">
                <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Add
                </button>
              </div>
              </form>
            </div>
            <div className='w-full p-3'>
              <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-solid border-zinc-300'>
              <div class="mb-4">
                <input class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="services" type="string" placeholder="🔍 search services" />
              </div>
              <div className='mb-6'>
                <input class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service" type="string" placeholder="service name" />
              </div>
              <div class="flex items-center justify-end">
                <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Remove
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
