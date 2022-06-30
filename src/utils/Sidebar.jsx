import React from 'react'
import tooth from '../assets/icons/sidebar-logo.png'
import logo from '../assets/images/smile-signature.jpg'
import chart from '../assets/icons/chart-fill.png'
import calendar from '../assets/icons/calendar.png'
import transaction from '../assets/icons/chart.png'


const Sidebar = () => {

  return (
    <aside className="max-w-[15%] h-full">
      <div className="sticky top-0 p-5 pt-8 bg-[#081a51ef] w-full h-full">
        <div className="flex flex-col overflow-hidden justify-start align-middle h-full">
          <div className="flex flex-col justify-center items-center mb-10">
            <img src={tooth} className="object-scale-down mx-auto rounded-full max-w-[70px]" />
            <h3 className='text-white text-lg'>Smile Signature</h3>
          </div>

          <ul className="flex flex-col text-[#ffffff] opacity-0.1 h-full justify-start mt-6">
            <div className='flex-row pl-5 pr-[7em] py-5 justify-start flex rounded-md cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-30 items-center gap-x-4'>
              <img src={chart}/>
              <li className="list-none">
                <p className='text-base'>Overview</p>
              </li>
            </div>
            <div className='flex-row pl-5  py-5 justify-start flex rounded-md cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-30 items-center gap-x-4'>
              <img src={calendar}/>
              <li className="list-none">
                <p className='text-base'>Calendar</p>
              </li>
            </div>
            <div className='flex flex-row pl-5  py-5 justify-start rounded-md cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-30 items-center gap-x-4'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
              <li className="list-none flex flex-row">
                <p className='text-base'>
                  Patient List
                </p>
              </li>
            </div>
            <div className='flex flex-row pl-5  py-5 justify-start rounded-md cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-30 items-center gap-x-4'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              <li className="list-none flex flex-row">
                <p className='text-base'>
                  Staff List
                </p>
              </li>
            </div>
            <div className='flex-row pl-5  py-5 justify-start flex rounded-md cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-30 items-center gap-x-4'>
              <img src={transaction}/>
              <li className="list-none">
                <p className='text-base'>Transactions</p>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
