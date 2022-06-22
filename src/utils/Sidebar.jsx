import React from 'react'
import logo2 from '../assets/images/logo2.png'

const Sidebar = () => {
  return (
    <aside className="w-{38} h-screen">
      <div className="sticky top-0 p-4 w-full h-screen">
        <div className="flex flex-col overflow-hidden justify-center align-middle h-screen">
          <div className="items-center">
            <img src={logo2} width="80" height="80" />
          </div>

          <ul className="flex flex-col">
            <li className="list-none py-8 px-5">
              Overview
            </li>
            <li className="list-none py-8 px-5">
              Calendar
            </li>
            <li className="list-none py-8 px-5">
              Patient list
            </li>
            <li className="list-none py-8 px-5">
              Staff list
            </li>
            <li className="list-none py-8 px-5">
              Transactions
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
