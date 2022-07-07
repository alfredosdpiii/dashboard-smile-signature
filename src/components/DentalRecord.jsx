import React from 'react'
import toothChart4 from '../assets/images/tooth-chart-4.jpg'
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext'
import axios from 'axios';

const DentalRecord = () => {
  const [patients, setPatients] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [text, setText] = useState('')
  const { user } = useContext(UserContext)

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3001/patient_records',
      headers:{
        'Authorization': ` ${user.token}`
      }
    }).then((res) => {
      const patients = res.data;
      // const patient_names = []
      // patients.map((patient) => {
      //   let name = patient.full_name
      //   patient_names.push(name)
      // })
      // console.log(patient_names)
      // setPatients(patient_names)
      setPatients(patients)
    })
  }, [])

  const onSuggestHandler = (text) => {
    setText(text)
    setSuggestions([])
  }

  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0) {
      matches = patients.filter(patient => {
        const regex = new RegExp(`${text}`,"gi");
        return patient.full_name.match(regex)
      })
    }
    console.log(matches)
    setSuggestions(matches)
    setText(text)
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-[full] my-6 mx-auto">
          <div className='min-h-full w-full bg-white rounded-lg'>
            <main className='w-full h-full mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='w-full h-full grid grid-cols-[55%_45%]'>
                <div className='flex justify-center content-center mt-10'>
                  <img className='object-scale-down h-[50em]' src={toothChart4} alt='' />
                </div>
                <div className='max-w-[700px] w-full flex justify-center items-center my-10'>
                  <form className=' w-full h-full mx-auto bg-white p-4 px-8 rounded-lg border border-solid border-slate-200'>
                    <div className="flex items-start justify-center p-2 px-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Dental Record ✍
                      </h3>
                    </div>
                    <div className='flex flex-col text-black py-5'>
                      <label className='black text-lg'>Patient</label>
                      <input 
                        className='rounded-sm bg-zinc-200 mt-2 p-2 focus:border-blue-100 focus:bg-gray-400 focus:outline-none focus:text-white' 
                        type="text"
                        onChange={e => onChangeHandler(e.target.value)} 
                        value={text} 
                        onBlur={() => {
                          setTimeout(() => {
                            setSuggestions([])
                          }, 200)
                        }}
                    />
                    {suggestions && suggestions.map((suggestion, i) => 
                      <div key={i} 
                      className='w-full bg-zinc-100 cursor-pointer border-b border-r border-l border-zinc-400 hover:bg-zinc-500 hover:text-white' 
                      onClick={() => onSuggestHandler(suggestion.full_name)}>
                        {suggestion.full_name}
                      </div>
                    )}
                    </div>
                    <div className='flex flex-col text-black py-5'>
                      <label className='black text-lg'>Branch</label>
                      <input 
                        className='rounded-lg bg-zinc-200 mt-2 p-2 focus:border-blue-100 focus:bg-gray-400 focus:outline-none focus:text-white' 
                        type="text" 
                      />
                    </div>
                    <div className='flex flex-col text-black py-5'>
                    <label className='black text-lg'>Services</label>
                    <input 
                      className='rounded-lg bg-zinc-200 mt-2 p-2 focus:border-blue-100 focus:bg-gray-400 focus:outline-none focus:text-white' 
                      type="text" 
                    />
                    </div>
                    <div className='flex flex-col text-black py-5'>
                      <label className='black text-lg'>Tooth</label>
                      <input 
                        className='rounded-lg bg-zinc-200 mt-2 p-2 focus:border-blue-100 focus:bg-gray-400 focus:outline-none focus:text-white' 
                        type="text" 
                      />
                    </div>
                    <div className='flex flex-col text-black py-5'>
                      <label className='black text-lg'>Remarks</label>
                      <textarea className='w-full h-[6em] border border-gray-400 rounded-lg p-3 mt-2' placeholder='Write your comments here' />
                    </div>
                    <div className='flex items-center justify-end p-3'>
                      <button 
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 mr-5 w-full'>
                        Back to History
                      </button>
                      <button 
                        className='bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full mt-5 w-full'>
                        Generate Record
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default DentalRecord
