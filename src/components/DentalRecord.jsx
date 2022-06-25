import React from 'react'
import toothChart from '../assets/images/tooth-chart.png'
import toothChart3 from '../assets/images/tooth-chart-3.webp'

const DentalRecord = () => {
  return (
    <div className='min-h-full w-full bg-gray-100'>
      <main className='w-full h-full mx-auto px-4 sm:px-6 lg:px-8 pt-4'>
        <div className="w-full flex flex-row justify-between items-center pb-6 border-b-2 border-gray-600">
              <h1 className="text-3xl font-semibold"></h1>
              <button 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                Back to Patient History
              </button>
          </div>
      </main>
      <div className='w-full h-[50em] grid grid-cols-[55%_45%]'>
        <div className='flex justify-center content-center mt-10'>
          <img className='object-scale-down h-[50em]' src={toothChart3} alt='' />
        </div>
        <div className='max-w-[700px] w-full flex justify-center items-center mt-10'>
          <form className=' w-full h-full mx-auto bg-white p-4 px-8 rounded-lg'>
           <div className="flex items-start justify-center p-2 px-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Dental Record ✍
              </h3>
            </div>
            <div className='flex flex-col text-black py-5'>
              <label className='black text-lg'>Patient</label>
              <input 
                className='rounded-lg bg-zinc-200 mt-2 p-2 focus:border-blue-100 focus:bg-gray-400 focus:outline-none focus:text-white' 
                type="text" 
              />
            </div>
            <div className='flex flex-col text-black py-5'>
              <label className='black text-lg'>Branch</label>
              <input 
                className='rounded-lg bg-zinc-200 mt-2 p-2 focus:border-blue-100 focus:bg-gray-400 focus:outline-none focus:text-white' 
                type="text" 
              />
            </div>
            <div className='flex flex-col text-black py-5'>
              <label className='black text-lg'>Services</label>
              <input 
                className='rounded-lg bg-zinc-200 mt-2 p-2 focus:border-blue-100 focus:bg-gray-400 focus:outline-none focus:text-white' 
                type="text" 
              />
            </div>
            <div className='flex flex-col text-black py-5'>
              <label className='black text-lg'>Tooth</label>
              <input 
                className='rounded-lg bg-zinc-200 mt-2 p-2 focus:border-blue-100 focus:bg-gray-400 focus:outline-none focus:text-white' 
                type="text" 
              />
            </div>
            <div className='flex flex-col text-black py-5'>
              <label className='black text-lg'>Remarks</label>
              <textarea className='w-full h-[6em] border border-gray-400 rounded-lg p-3 mt-2' placeholder='Write your comments here' />

            </div>
            <div className='flex items-center justify-end p-3'>
              <button 
                className='bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full mt-5'>
                Generate Record
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DentalRecord
