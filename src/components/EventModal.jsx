import React from 'react'

const EventModal = ({ setShowModal, participants, event }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-sm">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center flex-col justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold text-center p-3">
                Scheduled People
              </h3>
              <p className='text-lg leading-relaxed text-zinc-500'>{event.title}</p>
            </div>
            <div className="relative p-6 flex-auto text-center">
              {participants.map((data, i) => {
                return (
                  <div key={i} className='w-full p-5'>
                      <p className="text-sm font-semibold leading-relaxed mb-2">Patient {i + 1}</p>
                      <p className="text-lg leading-relaxed">
                        {data.name}
                      </p>
                      <p className='text-slate-500 text-base leading-relaxed'>{data.email}</p>
                  </div>
                )
              })}
              
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default EventModal