import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect} from "react";
import enUS from 'date-fns/locale/en-US'
import axios from "axios";
import EventModal from "./EventModal";

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
  const [showModal, setShowModal] = useState(false)
  const [events, setEvents] = useState([])
  const [participants, setParticipants] = useState([])
  const [event, setEvent] = useState('')

  const handleSetAppointment = () => {
    setIsScheduling(!isScheduling)
    console.log(isScheduling)
  }

  const handleEventSelect = (e) => {
    console.log(e)
    setShowModal(true)
    setParticipants(e.participants)
    setEvent(e)
  }

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://smile-sig-api.herokuapp.com/calendar_events'
    }).then((res) => {
      const events = res.data;
      const formatted_events = []
      events.map((event) => {
        const new_object = {
          ...event,
          start: new Date(event.start),
          end: new Date(event.end)
        }
        formatted_events.push(new_object)
      })

      setEvents(formatted_events)
    })
  }, [])


  return (
    <>
        <div className="flex flex-col">
          <div className="flex justify-between h-20 w-full border-b-2 px-5 over">
            <div>
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
              events={events}
              startAccessor="start"
              endAccessor="end"
              onSelectEvent={handleEventSelect}
              style={{ height: '56em', width: '100%', padding: "5px" }}
            />
          </div>
        </div>

      {isScheduling && (
        <SchedModal setIsScheduling={setIsScheduling} />
      )}
      {showModal && (
        <EventModal setShowModal={setShowModal} participants={participants} event={event}/>
      )}
    </>
  )
}

export default Scheduler