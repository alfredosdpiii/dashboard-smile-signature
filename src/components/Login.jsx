import React from 'react'
import logo1 from '../assets/images/logo1.png'
import background from '../assets/images/background1.jpg'

const Login = () => {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
          <img className='w-full h-[975px] object-cover' src={background} alt='' />
        </div>

        <div className='bg-neutral-200 flex flex-col justify-center'>
          <form className='max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg'>
            <img className='object-scale-down h-21 w-40 mx-auto' src={logo1} alt='' />
            <div className='flex flex-col text-black py-2'>
              <label className='black'>Email</label>
              <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none' type="text" />
            </div>
            <div className='flex flex-col text-black py-2'>
              <label>Password</label>
              <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none' type="password" />
            </div>
            <div className='flex justify-between text-black py-2'>
              <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
              <p>Forgot Password</p>
            </div>
            <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadw-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sign In</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login