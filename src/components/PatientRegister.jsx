import { useState } from 'react'
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from 'dayjs';
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker from 'react-modern-calendar-datepicker';


const PatientRegister = ({ setIsAddingPatient }) => {
  const [selectedDay, setSelectedDay] = useState("");
  const [showCalendar, setShowCalendar] = useState(false)

  const handleCalendarChange = (value) =>{
    setSelectedDay(value)
    setShowCalendar(!showCalendar)
  }


  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-[600px] my-6 mx-auto">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[600px] bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Let's add a Patient 🎉
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-2 flex-auto">
              <form className='max-w-[500px] w-full mx-auto bg-white p-8 px-8 rounded-lg'>
                <div className='flex flex-col text-black py-2'>
                  <label className='black'>Full Name</label>
                  <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-black py-2'>
                  <label className='black'>Gender</label>
                  <select className='rounded-lg bg-gray-200 mt-2 p-2'>
                    <option disabled={true} value="">
                      --Select gender--
                    </option>
                    <option>
                      Male
                    </option>
                    <option>
                      Female
                    </option>
                  </select>
                </div>
                <div className='flex flex-col text-black py-2'>
                  <label className='black'>Date of Birth</label>
                  <DatePicker 
                  selected={selectedDay} 
                  closeOnScroll={true}
                  onChange={(date) => setSelectedDay(date)}
                  className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:text-white focus:outline-none w-full'
                  />
                </div>
                <div className='flex flex-col text-black py-2'>
                  <label className='black'>Email</label>
                  <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-black py-2'>
                  <label className='black'>Mobile</label>
                  <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-black py-2'>
                  <label>Address</label>
                  <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none' type="password" />
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadw-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Register</button>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsAddingPatient(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default PatientRegister
