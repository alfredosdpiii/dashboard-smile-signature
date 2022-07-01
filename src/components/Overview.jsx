import React from 'react'
import dayjs from 'dayjs'
import Table from './Table'
import { useState, useEffect } from 'react';
import SchedModal from './SchedModal';
import axios from 'axios';

const Overview = () => {
  const [appointments, setAppointments] = useState([])
  const [isScheduling, setIsScheduling] = useState(false)
  const time = dayjs(new Date()).format("h:mm A")
  const day = dayjs(new Date()).format("MMMM DD")

  const handleSetAppointment = () => {
    setIsScheduling(true)
  }

  const data = appointments

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3001/appointments_today'
    }).then((res) => {
      console.log(res)
      const appointments = res.data
      setAppointments(appointments)
    })
  }, [])

  

  const columns = React.useMemo(() => [ 
    {
      Header: "Time Slot",
      accessor: 'start',
    },
    {
      Header: "Patients",
      accessor: 'participants',
      Cell: ({ row }) => {
        return (
             row.original.participants
                .map((participant) => (
                    <div key={participant.name}>
                        <h4 className='m-2'>{participant.name}</h4>
                    </div>
                ))
              );
       }
    },
    {
      Header: "Email",
      accessor: 'partipants',
      Cell: ({ row }) => {
        return (
             row.original.participants
                .map((participant) => (
                    <div key={participant.email}>
                        <h4 className='m-2'>{participant.email}</h4>
                    </div>
                ))
              );
       }
    },
    {
      Header: "",
      accessor: "placeholder",
    },
    {
      Header: "",
      accessor: 'placeholders',
    },
    {
      id:"selection",
      Header: ({getToggleAllRowsSelectedProps }) =>(
        <div></div>
      ),
      accessor: "participants",
      Cell: ({ row }) => {
        return (
             row.original.participants
                .map((participant) => (
                  <div className='flex justify-end'>
                    <button className ='m-1 bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-1.5 px-4 border border-blue-900 hover:border-transparent rounded-lg'>
                    Finished
                    </button>
                  </div>
                ))
              );
       }
    },
  ], [])



  return (
    <>
      <div className='w-full h-full py-10 px-5'>
        <div className='w-full min-h-20 text-center flex justify-center items-center flex-col p-5'>
          <h1 className='text-2xl'>Good day, Smile Signature 😉</h1>
          <p className='text-xl mt-2'>{time}</p>
          <div className='w-full flex justify-start mt-10'>
            <h3 className='text-xl font-semibold px-[7em]'>Here are your appointments for today, {day}
            </h3>
          </div>
        </div>
        <div className='w-full max-h-full px-40'>
          <Table columns={columns} data={data} label="Set an appointment" handleClick={handleSetAppointment} />
        </div>
      </div>
      {isScheduling && (
        <SchedModal setIsScheduling={setIsScheduling} />
      )}
    </>
  )
}

export default Overview