import { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import dayjs from 'dayjs'

const TransactionModal = ({ setIsCreatingTransaction }) => {
  const [text, setText] = useState()
  const [suggestions, setSuggestions] = useState([])
  const [patients, setPatients] = useState([])
  const patient = ""

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3001/patient_records'
    }).then((res) => {
      const patients = res.data;
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
    setSuggestions(matches)
    setText(text)
  }

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
      status: "",
      paymentType: "",
      branch: "" 
    }
  });

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
                Generate Transaction
              </h3>
            </div>
            <div className="relative p-2 flex-auto">
              <form 
                className='max-w-[500px] w-full mx-auto bg-white p-8 px-8 rounded-lg' 
                onSubmit={handleSubmit(onSubmit)}
                >
                <div className='flex flex-col text-black py-2'>
                  <label className='black'>Full Name</label>

                  {patient ? 
                  ( 
                    <input 
                    className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none focus:text-white' 
                    type="text"
                    value={patient} 
                    disabled={true}
                    {...register("fullName", {required: "Required field! ⚠"})}
                    />
                  )
                 : 
                  (
                    <>
                     <input 
                        className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none focus:text-white' 
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
                  </>
                  )
                }
                  <span className='text-red-600'>{errors.fullName?.message}</span>
                </div>
                <div className='flex flex-col text-black py-2'>
                  <label className='black'>Payment Type</label>
                  <select 
                    className='rounded-lg bg-gray-200 mt-2 p-2' 
                    {...register("paymentType", {required: "Required field! ⚠"})}  
                  >
                    <option disabled={true} value="">
                    
                    </option>
                    <option>
                      Cash
                    </option>
                    <option>
                      Card
                    </option>
                    <option>
                      Online
                    </option>
                  </select>
                  <span className='text-red-600'>{errors.paymentType?.message}</span>
                </div>
                <div className='flex flex-col text-black py-2'>
                  <label className='black'>Transaction Date</label>
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
                        {...register("dateInput", {required: "Required field! ⚠"})}
                      />
                    )}
                  />
                  <span className='text-red-600'>{errors.dateInput?.message}</span>
                </div>
                <div className='flex flex-col text-black py-2'>
                  <label className='black'>Amount</label>
                  <input 
                    className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none focus:text-white' 
                    type="text" 
                    {...register("amount", {required: "Required field! ⚠"})}
                  />
                  <span className='text-red-600'>{errors.amount?.message}</span>
                </div>
                <div className='flex flex-col text-black py-2'>
                  <label className='black'>Payment Status</label>
                  <select 
                    className='rounded-lg bg-gray-200 mt-2 p-2' 
                    {...register("status", {required: "Required field! ⚠"})}  
                  >
                    <option disabled={true} value="">

                    </option>
                    <option>
                      Full
                    </option>
                    <option>
                      Partial
                    </option>
                    <option>
                      Follow-Up
                    </option>
                  </select>
                  <span className='text-red-600'>{errors.status?.message}</span>
                </div>
                <div className='flex flex-col text-black py-2'>
                  <label>Remaining</label>
                  <input 
                    className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none focus:text-white' 
                    type="string" 
                    {...register("remaining", {required: "Required field! ⚠"})}  
                  />
                  <span className='text-red-600'>{errors.remaining?.message}</span>
                </div>
                <div className='flex flex-col text-black py-2'>
                  <label className='black'>Branch</label>
                  <select 
                    className='rounded-lg bg-gray-200 mt-2 p-2' 
                    {...register("branch", {required: "Required field! ⚠"})}
                  >
                    <option disabled={true} value="">

                    </option>
                    <option>
                      Marcos-Alvarez
                    </option>
                    <option>
                      Almanza
                    </option>
                  </select>
                  <span className='text-red-600'>{errors.branch?.message}</span>
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadw-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Generate</button>
              </form>
            </div>
            <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsCreatingTransaction(false)}
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

export default TransactionModal