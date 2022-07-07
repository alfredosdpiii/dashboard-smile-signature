import React, { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'
// import { register_user, remove_user } from '../utils/admin.jsx'
import AddStaff from './admin/AddStaff.jsx';
import RemoveStaff from './admin/RemoveStaff.jsx';
import AddService from './admin/AddService.jsx';
import RemoveService from './admin/RemoveService.jsx';
import peso from '../assets/icons/peso-sign.png'
import { UserContext } from '../context/UserContext'

const Admin = () => {
  const [totalPatients, setTotalPatients] = useState('')
  const [newPatients, setNewPatients] = useState('')
  const [totalAppointments, setTotalAppointments] = useState()
  const [newAppointments, setNewAppointments] = useState()
  const [totalTransactions, setTotalTransactions] = useState('')
  const [totalSales, setTotalSales] = useState('')
  const [formError, setFormError] = useState(false);
  const [suggestions, setSuggestions] = useState([])
  const [staff, setStaff] = useState([])
  const [text, setText] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [isAddingStaff, setIsAddingStaff] = useState(false)
  const [isRemovingStaff, setIsRemovingStaff] = useState(false)
  const [isAddingService, setIsAddingService] = useState(false)
  const [isRemovingService, setIsRemovingService] = useState(false)

  const { user } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitSuccessful },
    setError
  } = useForm({});

  const {
    register:register1,
    handleSubmit:handleSubmit1,
    watch:watch1,
    errors:errors1,
    setValue:setValue1,
    setError:setError1,
    control:control1,
    isSubmitSuccessful: isSubmitSuccessful1
  } = useForm({});
  

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://smile-sig-api.herokuapp.com/staff',
      headers: {
        'Authorization': ` ${user.token}`
      }
    }).then((res) => {
      const users = res.data;
      console.log(users)
      setStaff(users);
    })
  }, [])


  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://smile-sig-api.herokuapp.com/report_patients',
      headers: {
        'Authorization': ` ${user.token}`
      }
    }).then((res) => {
      console.log(res)
      const report = res.data
      setTotalPatients(report.total)
      setNewPatients(report.new)
    })
  }, [])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://smile-sig-api.herokuapp.com/report_appointments',
      headers: {
        'Authorization': ` ${user.token}`
      }
    }).then((res) => {
      console.log(res)
      const report = res.data
      setTotalAppointments(report.total)
      setNewAppointments(report.new)
    })
  }, [])

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://smile-sig-api.herokuapp.com/report_transactions',
      headers: {
        'Authorization': ` ${user.token}`
      }
    }).then((res) => {
      console.log(res)
      const report = res.data
      setTotalTransactions(report.monthly_transactions)

      let nf = new Intl.NumberFormat()
      setTotalSales(nf.format(report.monthly_sales))
    })
  }, [])


  const onSuggestHandler = (text) => {
    setText(text)
    setSuggestions([])
    setSearchValue('')
  }

  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0) {
      matches = staff.filter(user => {
        const regex = new RegExp(`${text}`,"gi");
        return user.email.match(regex)
      })
    }
    console.log(matches)
    setSuggestions(matches)
    setSearchValue(text)
  }
        

  // const handleRegister = async (values) => {
  //   const response = await register_user(values)
  //
  //   if(isSubmitSuccessful) {
  //     reset()
  //   }
  // }
  //
  // const handleRemove = async (values) => {
  //   const response = await remove_user(values)
  //
  //   console.log(response)
  //   setStaff(response[0])
  //   setText()
  //
  // }

  return (
    <>
      <div className='w-full h-full p-5 flex flex-col justify-center items-center bg-[#ffff]'>
      {/* 1st half */}
        <div className='w-[50%] flex p-5 justify-center items-center flex-col'>
          <div className='w-full border border-solid border-gray-600 shadow-md rounded-md px-5 py-5 bg-white'>
            <div className='w-full h-20 border-b border-zinc-400 p-5 text-center flex flex-col justify-center'>
              <h3 className='text-xl font-medium'>Smile Signature</h3>
              <h4 className='text-base font-medium text-gray-600 leading-relaxed'>Marcos Alvarez</h4>
            </div>
            <div className='w-full'>
              <div className='w-full h-5 mt-3 text-center'>
                <h4 className='text-lg text-black font-semibold'>June, 2022</h4>
              </div>
              <div className='w-full flex flex-col mt-10'>
                <div className='p-3 m-2 border border-solid border-zinc-200 h-full'>
                  <div className='text-center flex justify-center text-3xl h-full items-center'>
                    {totalPatients}
                  </div>
                </div>
                <div className='text-center flex justify-center text-xl h-full items-center mt-2 text-gray-600'>
                  <p>👏 Total Patients</p>
                </div>
                <div className='p-3 m-2 border border-solid border-zinc-200 h-full'>
                  <div className='text-center flex justify-center text-3xl h-full items-center'>
                    {newPatients}
                  </div>
                </div>
                <div className='text-center flex justify-center text-xl h-full items-center mt-2 text-gray-600'>
                  <p>🎈 New Patients</p>
                </div>
                <div className='p-3 m-2 border border-solid border-zinc-200 h-full'>
                  <div className='text-center flex justify-center text-3xl h-full items-center'>
                    {totalAppointments}
                  </div>
                </div>
                <div className='text-center flex justify-center text-xl h-full items-center mt-2 text-gray-600'>
                  <p>🎉 Made Appointments</p>
                </div>
                <div className='p-3 m-2 border border-solid border-zinc-200 h-full'>
                  <div className='text-center flex justify-center text-3xl h-full items-center'>
                    {newAppointments}
                  </div>
                </div>
                <div className='text-center flex justify-center text-xl h-full items-center mt-2 text-gray-600'>
                  <p>📆 New Appointments</p>
                </div>
                <div className='p-3 m-2 border border-solid border-zinc-200 h-full'>
                  <div className='text-center flex justify-center text-3xl h-full items-center'>
                    <img src={peso} className='object-scale-down h-6 w-6 mr-2'/>
                    <p>{totalSales}</p>
                  </div>
                </div>
                <div className='text-center flex justify-center text-xl h-full items-center mt-2 text-gray-600'>
                  <p>💸 Net Profit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd half */}
        <div className='w-[52%] mt-5 h-10 flex flex-row p-5 justify-center items-center'>
          <button 
            className='w-full m-3 py-2 bg-teal-500 shadow-lg shadw-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
            onClick={() => setIsAddingStaff(true)}>
            Add Staff
          </button>
          <button 
            className='w-full m-3 py-2 bg-red-600 shadow-lg shadw-red-600/50 hover:shadow-red-600/40 text-white font-semibold rounded-lg'
            onClick={() => setIsRemovingStaff(true)}>
            Remove Staff
          </button>
          <button 
            className='w-full m-3 py-2 bg-blue-500 shadow-lg shadw-blue-500/50 hover:shadow-blue-500/40 text-white font-semibold rounded-lg'
            onClick={() => setIsAddingService(true)}>
            Add Service
          </button>
          <button 
            className='w-full m-3 py-2 bg-yellow-600 shadow-lg shadw-yellow-600/50 hover:shadow-yellow-600/40 text-white font-semibold rounded-lg'
            onClick={() => setIsRemovingService(true)}>
            Remove Service
          </button>
          {/* Staff */}
          {/* <div className='w-full border border-solid border-gray-600 shadow-md rounded-md m-5'>
            <div className='w-full text-center flex justify-center items-center mb-5 p-5'>
              <h3 className='text-xl text-gray-700 font-semibold'>Manage Staff</h3>
            </div>
            <div className='w-full flex flex-row'>
              <div className='w-full p-3'>
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-solid border-zinc-300' 
                onSubmit={handleSubmit((e) => {
                  try {
                    handleRegister(e)
                  } catch (e) {
                    console.log(e)
                  }
                })}>
                <div class="mb-4">
                  <input 
                  class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="registerEmail" 
                  type="email" 
                  placeholder="@email_address" 
                  {...register("registerEmail", { required: "This is required" })}/>
                  <span className='text-red-600'>{errors.registerEmail?.message}</span>
                </div>
                <div class="mb-4">
                  <input 
                  class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="registerRole" 
                  type="string" 
                  placeholder="role"
                  {...register("registerRole", { required: "This is required" })} />
                  <span className='text-red-600'>{errors.registerRole?.message}</span>
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
              <div className='w-full p-3'>
                <form 
                className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-solid border-zinc-300'
                onSubmit={handleSubmit1((e) => {
                  try {
                    handleRemove(e)
                  } catch (e) {
                    console.log(e)
                  }
                })}>
                <div class="mb-4">
                  <input 
                  class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="user" 
                  type="string"
                  placeholder="🔍 search users"
                  value={searchValue}
                  onChange={e => onChangeHandler(e.target.value)} 
                  onBlur={() => {
                    setTimeout(() => {
                      setSuggestions([])
                    }, 200)
                  }} 
                  />
                  {suggestions && suggestions.map((suggestion, i) => 
                    <div key={i} 
                    className='py-1 w-[18.5em] bg-zinc-100 cursor-pointer border-b border-r border-l border-zinc-400 hover:bg-zinc-500 hover:text-white ' 
                    onClick={() => onSuggestHandler(suggestion.email)}>
                      {suggestion.email}
                    </div>
                  )}
                </div>
                <div className='mb-6'>
                  <input 
                  class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="removeEmail" 
                  type="email" 
                  placeholder="@user_email" 
                  value={text} 
                  {...register1("removeEmail", { required: "This is required" })}/>
                </div>
                <div class="flex items-center justify-end">
                  <button id="remove" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Remove
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
          {/* Services */}
          {/* div className='w-full border border-solid border-gray-600 shadow-md rounded-md m-5'>
            <div className='w-full text-center flex justify-center items-center mb-5 p-5'>
              <h3 className='text-xl text-gray-700 font-semibold'>Manage Services</h3>
            </div>
            <div className='w-full flex flex-row'>
              <div className='w-full p-3'>
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-solid border-zinc-300'>
                <div class="mb-8 pt-12">
                  <input class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="name" />
                </div>
                <div class="flex items-center justify-end">
                  <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Add
                  </button>
                </div>
                </form>
              </div>
              <div className='w-full p-3'>
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-solid border-zinc-300'>
                <div class="mb-4">
                  <input class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="services" type="string" placeholder="🔍 search services" />
                </div>
                <div className='mb-6'>
                  <input class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service" type="string" placeholder="service name" />
                </div>
                <div class="flex items-center justify-end">
                  <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Remove
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>< */}
        </div>
      </div>
      {isAddingStaff && (
        <AddStaff setIsAddingStaff={setIsAddingStaff} />
      )}
      {isRemovingStaff && (
        <RemoveStaff setIsRemovingStaff={setIsRemovingStaff}/>
      )}
      {isAddingService && (
        <AddService setIsAddingService={setIsAddingService} />
      )}
      {isRemovingService && (
        <RemoveService setIsRemovingService={setIsRemovingService}/>
      )}
    </>
  )
}

export default Admin
