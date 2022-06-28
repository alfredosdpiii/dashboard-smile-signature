import { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import dayjs from 'dayjs'

const PatientRegister = ({ setIsAddingPatient }) => {
  const [selectedDay, setSelectedDay] = useState("");
  const [showCalendar, setShowCalendar] = useState(false)

  const { 
    register, 
    handleSubmit, 
    getValues, 
    control,
    watch, 
    reset,
    formState: { errors, isSubmitSuccessful },
    setError
  } = useForm({
    defaultValues:{
      gender: ""
    }
  });

  useEffect(() => {
    if(isSubmitSuccessful) {
      const values = getValues();

      axios
        .post('http://127.0.0.1:3001/patient_records/create', {
          full_name: values.fullName,
          gender: values.gender,
          date_of_birth: dayjs(values.dateInput).format('DD/MM/YYYY'),
          email: values.email,
          mobile: values.mobile,
          address: values.address
        })
        .then((res) => {
          console.log(res)
          setIsAddingPatient(false)
        })
    }
  },[isSubmitSuccessful])

  const handleCalendarChange = (value) =>{
    setSelectedDay(value)
    setShowCalendar(!showCalendar)
  }

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-[600px] my-6 mx-auto">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[600px] bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Let's add a Patient 📝
              </h3>
            </div>
            <div className="relative p-2 flex-auto">
              <form 
                className='max-w-[500px] w-full mx-auto bg-white p-8 px-8 rounded-lg' 
                onSubmit={handleSubmit(onSubmit)}
                >
                <div className='flex flex-col text-black py-2'>
                  <label className='black'>Full Name</label>
                  <input 
                    className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none focus:text-white' 
                    type="text" 
                    {...register("fullName", {required: "This is required"})}
                  />
                  <span className='text-red-600'>{errors.fullName?.message}</span>
                </div>
                <div className='flex flex-col text-black py-2'>
                  <label className='black'>Gender</label>
                  <select 
                    className='rounded-lg bg-gray-200 mt-2 p-2' 
                    {...register("gender", {required: "This is required"})}  
                  >
                    <option disabled={true} value="">
                      --Select gender--
                    </option>
                    <option>
                      Male
                    </option>
                    <option>
                      Female
                    </option>
                  </select>
                  <span className='text-red-600'>{errors.gender?.message}</span>
                </div>
                <div className='flex flex-col text-black py-2'>
                  <label className='black'>Date of Birth</label>
                  <Controller 
                    control={control}
                    name="dateInput"
                    render={({ field }) => (
                      <DatePicker 
                        selected={field.value} 
                        closeOnScroll={true}
                        onChange={(date) => field.onChange(date)}
                        placeholderText="Select a date                                                                    📅"
                        showYearDropdown
                        yearDropdownItemNumber={300}
                        scrollableYearDropdown
                        className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:text-white focus:outline-none w-full'
                      />
                    )}
                  />
                  <span className='text-red-600'>{errors.dateInput?.message}</span>
                </div>
                <div className='flex flex-col text-black py-2'>
                  <label className='black'>Email</label>
                  <input 
                    className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none focus:text-white' 
                    type="text" 
                    {...register("email", {required: "This is required."})}
                  />
                  <span className='text-red-600'>{errors.email?.message}</span>
                </div>
                <div className='flex flex-col text-black py-2'>
                  <label className='black'>Mobile</label>
                  <input 
                    className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none focus:text-white' 
                    type="text" 
                    {...register("mobile", {required: "This is required."})}  
                  />
                  <span className='text-red-600'>{errors.mobile?.message}</span>
                </div>
                <div className='flex flex-col text-black py-2'>
                  <label>Address</label>
                  <input 
                    className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none focus:text-white' 
                    type="string" 
                    {...register("address", {required: "This is required."})}  
                  />
                  <span className='text-red-600'>{errors.address?.message}</span>
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadw-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Register</button>
              </form>
            </div>
            <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsAddingPatient(false)}>
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

export default PatientRegister
