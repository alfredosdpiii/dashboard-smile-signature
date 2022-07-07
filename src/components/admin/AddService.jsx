import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'

const AddService = ({setIsAddingService}) => {
  const [message,setMessage] = useState('')

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitSuccessful },
    setError
  } = useForm({});

  useEffect(() => {
    if(isSubmitSuccessful) {
      const values = getValues();
      console.log(values.name)

      axios({
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        url: 'http://smile-sig-api.herokuapp.com/services/create',
        data: {    
          "service":{
              "name": values.name
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

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 w-[600px]">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center flex-col justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold text-center p-3">
                Add a service! 
              </h3>
              <p className='text-lg leading-relaxed text-zinc-500'></p>
            </div>
            <div className="relative p-6 flex-auto text-center flex flex-col justify-center items-center">
              <div className='w-[80%] p-3'>
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' 
                onSubmit={handleSubmit(handleSubmit)}>
                  <div class="mb-4">
                    <input 
                    class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="name" 
                    type="string" 
                    placeholder="service name" 
                    {...register("name", { required: "This is required" })}/>
                    <span className='text-red-600'>{errors.name?.message}
                    </span>
                  </div>
                  <div class="flex items-center justify-end">
                    <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                      Add
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
                onClick={() => setIsAddingService(false)}
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

export default AddService