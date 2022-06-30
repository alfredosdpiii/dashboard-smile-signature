import React, { useState, useEffect, useContext } from 'react'
import logo1 from '../assets/images/logo1.png'
import background from '../assets/images/background1.jpg'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { UserContext } from '../context/UserContext'
import { login } from '../utils/login'


const Login = () => {
  const [formError, setFormError] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitSuccessful },
    setError
  } = useForm({});


  const { user, setUser } = useContext(UserContext)
  const onSubmit = (data) => {
    if (isSubmitSuccessful) {
      const values = getValues();
      handleLogin(values)
    }
  }
  const handleLogin = async (values) => {
    const user = await login(values)
    setUser(user);
    console.log(user)
  }

  return (
    <>
      <pre>{JSON.stringify(user,null,2)}</pre>
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
          <img className='w-full h-screen object-cover' src={background} alt='' />
        </div>

        <div className='bg-neutral-200 flex flex-col justify-center'>
          <form className='max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg' onSubmit={handleSubmit(onSubmit)}>
            <img className='object-scale-down h-21 w-40 mx-auto' src={logo1} alt='' />
            <div className='flex flex-col text-black py-2'>
              <label className='black'>Email</label>
              <input
                className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none focus:text-white'
                type="text"
                {...register("email", { required: "This is required" })}
              />
              <span className='text-red-600'>{errors.email?.message}</span>
            </div>
            <div className='flex flex-col text-black py-2'>
              <label>Password</label>
              <input
                className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none focus:text-white'
                type="password"
                {...register("password", { required: "This is required" })}
              />
              <span className='text-red-600'>{errors.password?.message}</span>
            </div>
            {formError && (
              <span className='text-red-600'>
                Incorrect email or password
              </span>
            )}
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
