import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import enUS from 'date-fns/locale/en-US'
import logo1 from '../logo1.png'
import logo2 from '../logo2.png'

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import SchedModal from "./SchedModal";


const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});



const Scheduler = () => {
  const [isScheduling, setIsScheduling] = useState(false)

  const handleSetAppointment = () => {
    setIsScheduling(!isScheduling)
    console.log(isScheduling)
  }

  return (
    <>
      <div className="grid grid-cols-[15%_85%] min-h-screen">
        <div className="border">SIDEBAR</div>
        <div className="flex flex-col">
          <div className="flex justify-between h-20 border-y-2 px-5">
            <div>
              <img src={logo2} width="80" height="50" />
            </div>
            <div className="flex items-center">
              <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleSetAppointment}
              >
                Set an appointment
              </button>
            </div>
          </div>
          <div>
            <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '55em', width: '101em', margin: "5px" }}
            />
          </div>
        </div>
      </div>
      
      {isScheduling && (
        <SchedModal setIsScheduling={setIsScheduling}/>
      )}
    </>
  )
}

export default Scheduler
