import React from 'react'
import person from '../assets/icons/person-icon.png'
import { useState, useEffect} from 'react';
import axios from 'axios'
import dayjs from 'dayjs';

const StaffProfile = ({ setIsSelectingStaff, staff }) => {
  const [profile, setProfile] = useState('')


  useEffect(() => {
    axios({
      method: 'get',
      url: `smile-sig-api.herokuapp.com/profile/${staff.id}`
    }).then((res) => {
      console.log(res.data.profile)
      const data = res.data.profile;
      setProfile(data)
    })
  }, [])

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
    }
  
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="w-[30em] relative my-8 mx-auto">
          <div className='w-full bg-white rounded-lg'>
            <div className='w-full h-10 flex flex-row justify-start text-center items-center py-8 px-5 border-b border-solid border-slate-200 bg-zinc-100 rounded-b'>
              <img src={person} alt='' className='object-scale-down h-10 w-10 mr-3' />
              <h1 className='font-medium text-lg'>{(`${profile.first_name} ${profile.last_name}`).toUpperCase()}</h1>
            </div>
            <div className='w-full h-full flex flex-col'>
              <div className='flex justify-center items-center px-10 py-10'>
                <div>
                <img src={staff.imgAvatar} alt='' className='object-scale-down h-[13em] w-[13em] mx-auto rounded-[50%]' />
                </div>
                
              </div>
              <div className='w-full text-center py-2 bg-zinc-50'>
                <h1 className='text-3xl font-bold py-1'>{profile.first_name} {profile.last_name}</h1>
                <p className='text-xl'>{profile.position}</p>
                <p className='text-xl text-gray-500'>{staff.email}</p>
              </div>
              <div className='w-full text-center px-5 py-2 bg-zinc-50'>
                <h3 className='text-base font-medium'>Gender</h3>
                <p className='text-base text-gray-500'>{Capitalize(staff.gender)}</p>
              </div>
              <div className='w-full text-center px-5 py-2 bg-zinc-50'>
                <h3 className='text-base font-medium'>Date of Birth</h3>
                <p className='text-base text-gray-500'>{dayjs(profile.date_of_birth).format('MMMM DD, YYYY')}</p>
              </div>
              <div className='w-full text-center px-5 py-2 bg-zinc-50'>
                <h3 className='text-base font-medium'>Mobile</h3>
                <p className='text-base text-gray-500'>{profile.mobile}</p>
              </div>
              <div className='w-full text-center px-5 py-2 bg-zinc-50 pb-5'>
                <h3 className='text-base font-medium'>Address</h3>
                <div className='text-base text-gray-500'>{profile.address}</div>
              </div>
            </div>
            <div className="flex items-center justify-end p-3 border-t border-solid border-slate-300 bg-zinc-100 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsSelectingStaff(false)}>
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

export default StaffProfile