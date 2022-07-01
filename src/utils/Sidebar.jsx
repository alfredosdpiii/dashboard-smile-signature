import React, { useContext } from 'react'
import logo from '../assets/images/smile-signature.jpg'
import chart from '../assets/icons/chart-fill.png'
import calendar from '../assets/icons/calendar.png'
import transaction from '../assets/icons/chart.png'
import { UserContext } from '../context/UserContext'
import { Link, useLocation } from 'wouter'


const Sidebar = () => {
  const { user, setUser } = useContext(UserContext)
  const [location, setLocation] = useLocation();

  const handleLogout=()=>{
    setUser(null)
    setLocation('/login')
  }

  return (
    <aside className="max-w-[15%] h-full">
      <div className="sticky top-0 p-5 pt-8 bg-gray-900 w-full h-full">
        <div className="flex flex-col overflow-hidden justify-start align-middle h-full">
          <div className="flex flex-row justify-start items-center mb-10 mt-5">
            <img src={logo} className="object-scale-down mr-3 rounded-full max-w-[50px]" />
            <h3 className='text-white text-lg font-medium'>Smile Signature</h3>
          </div>

          <ul className="flex flex-col text-[#ffffff] opacity-0.1 h-full justify-start mt-6">
            <div className='flex-row pl-5 pr-[7em] py-5 justify-start flex rounded-md cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-30 items-center gap-x-4'> <img src={chart} />
              <li className="list-none">
                {/* <p className='text-base'>Overview</p> */}
                <Link href="/">
                  <a className='text-base'>Overview</a>
                </Link>
              </li>
            </div>
            <div className='flex-row pl-5  py-5 justify-start flex rounded-md cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-30 items-center gap-x-4'>
              <img src={calendar} />
              <li className="list-none">
                {/* <p className='text-base'>Calendar</p> */}
                <Link href="/calendar">
                  <a className='text-base'>Calendar</a>
                </Link>
              </li>
            </div>
            <div className='flex flex-row pl-5  py-5 justify-start rounded-md cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-30 items-center gap-x-4'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <li className="list-none flex flex-row">
                {/* <p className='text-base'> */}
                {/*   Patient List */}
                {/* </p> */}
                <Link href="/patients">
                  <a className='text-base'>Patient List</a>
                </Link>
              </li>
            </div>
            <div className='flex flex-row pl-5  py-5 justify-start rounded-md cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-30 items-center gap-x-4'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <li className="list-none flex flex-row">
                {/* <p className='text-base'> */}
                {/*   Staff List */}
                {/* </p> */}
                <Link href="/staff">
                  <a className='text-base'>Staff List</a>
                </Link>
              </li>
            </div>
            <div className='flex-row pl-5  py-5 justify-start flex rounded-md cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-30 items-center gap-x-3'>
              <img src={transaction} />
              <li className="list-none">
                {/* <p className='text-base'>Transactions</p> */}
                <Link href="/obligations">
                  <a className='text-base'>Receivables</a>
                </Link>
              </li>
            </div>
            {user.role === 'admin' && (
              <div className='flex-row pl-5  py-5 justify-start flex rounded-md cursor-pointer hover:bg-[#ffffff] hover:bg-opacity-30 items-center gap-x-4'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <li className="list-none">
                <Link href="/admin">
                  <a className='text-base'>Admin</a>
                </Link>
                </li>
              </div>
            )
            }
          </ul>
          <div className='w-full p-3'>
            <button className='bg-transparent hover:bg-emerald-600 text-emerald-600 font-semibold hover:text-white py-2 px-4 border border-emerald-300 hover:border-transparent rounded-lg w-full' 
    onClick={(e)=>handleLogout(e)}>LOGOUT</button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
