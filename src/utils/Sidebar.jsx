import React from 'react'
import logo2 from '../assets/images/logo2.png'
import { Link, Route } from 'wouter';

const Sidebar = () => {
  return (
    <aside className="w-{38} h-full">
      <div className="sticky top-0 p-4 w-full h-full">
        <div className="flex flex-col overflow-hidden justify-start align-middle h-full">
          <div className="flex justify-center items-center">
            <img src={logo2} width="80" height="80" />
          </div>

          <ul className="flex flex-col">
            <li className="list-none py-8 px-5 border-y-2">
              Overview
            </li>
            <Link href='/schedule'>
              <li className="list-none py-8 px-5 border-b-2">
                Calendar
              </li>
            </Link>
            <Link href='/patients'>
              <li className="list-none py-8 px-5 border-b-2">
                Patient list
              </li>
            </Link>
            <Link href='/staff'>
              <li className="list-none py-8 px-5 border-b-2">
                Staff list
              </li>
            </Link>
            <li className="list-none py-8 px-5 border-b-2">
              Transactions
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
