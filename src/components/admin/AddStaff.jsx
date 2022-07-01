import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'

const AddStaff = ({setIsAddingStaff}) => {
  const [message, setMessage] = useState('')
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitSuccessful },
    setError
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data)
  }

  useEffect(() => {
    if(isSubmitSuccessful) {
      const values = getValues();

      axios({
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        url: 'http://localhost:3001/current_user/create',
        data:{    
            "user":{
                "email": values.registerEmail,
                "role": values.registerRole,
                "password": values.password
                   } 
             }
      })
      .then((res) => {
        console.log(res)
        setMessage(res.data.message)
        reset()
      })
    }
  },[isSubmitSuccessful])

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 w-[600px]">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center flex-col justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold text-center p-3">
                Add a staff member to the team 
              </h3>
              <p className='text-lg leading-relaxed text-zinc-500'></p>
            </div>
            <div className="relative p-6 flex-auto text-center flex flex-col justify-center items-center">
              <div className='w-[80%] p-3'>
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' 
                onSubmit={handleSubmit(onSubmit)}>
                  <div class="mb-4">
                    <input 
                    class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="email" 
                    type="email" 
                    placeholder="@email_address" 
                    {...register("registerEmail", { required: "This is required" })}/>
                    <span className='text-red-600'>{errors.email?.message}
                    </span>
                  </div>
                  <div class="mb-4">
                    <input 
                    class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="role" 
                    type="string" 
                    placeholder="role"
                    {...register("registerRole", { required: "This is required" })} />
                    <span className='text-red-600'>{errors.role?.message}</span>
                  </div>
                  <div className='mb-6'>
                    <input 
                    class="hidden shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="password" 
                    type="password" 
                    value="password"
                    {...register("password", { required: "This is required" })} />
                  </div>
                  <div class="flex items-center justify-end">
                    <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                      Register
                    </button>
                  </div>
                </form>
              </div>
              <span className='text-red-500'>{message}</span>
            </div>
            
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsAddingStaff(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default AddStaff