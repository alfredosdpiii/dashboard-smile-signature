import React from 'react'

const SchedModal = ({setIsScheduling}) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-[1100px] my-6 mx-auto">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[1100px] bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Who are we scheduling today?
              </h3>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <iframe
                  src="https://calendly.com/borkybork"
                  width="1000px"
                  height="700px"
                  frameborder="0"
                  >
                </iframe>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setIsScheduling(false)}
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

export default SchedModal
