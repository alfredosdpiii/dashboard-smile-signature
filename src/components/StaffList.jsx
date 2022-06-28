import React, { useEffect } from 'react'
import 'regenerator-runtime/runtime';
import Table, { AvatarCell, StatusPill } from './Table'
import maleIcon from '../assets/icons/male-dentist.png'
import femaleIcon from '../assets/icons/female-dentist.png'
import staffIcon from '../assets/icons/staff-icon.png'
import { useState } from 'react';
import axios from 'axios';

const StaffList = () => {
  const [staff, setStaff] = useState([])
  const [selectedRows, setSelectedData] = useState([])
  const [selectedStaff, setSelectedStaff] = useState('')
  const data = staff

  const onSelectedRows = rows => {
    const mappedRows = rows.map(r => r.original);
    setSelectedData([...selectedRows, ...mappedRows]);
  };

  const handleProfileClick = (row) => {
    console.log(row.original)
    setSelectedStaff(row.original)
  }

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3001/staff'
    }).then((res) => {
      const users = res.data;
      const staff = []
      users.map((user) => {
        const new_object = {
          ...user,
          imgAvatar: user.gender === 'male' ? maleIcon : femaleIcon
        }
        staff.push(new_object)
      })
      
      setStaff(staff);
    })
  }, [])

  const columns = React.useMemo(() => [ 
    {
      Header: "ID",
      accessor: 'id'
    },
    {
      Header: "Name",
      accessor: 'email',
      Cell: AvatarCell,
      imgAccessor: "imgAvatar",
      // emailAccessor: "email",
    },
    {
      Header: "Gender",
      accessor: 'gender',
    },
    {
      Header: "Position",
      accessor: 'role',
    },
    {
      id:"selection",
      Header: ({getToggleAllRowsSelectedProps }) =>(
        <div></div>
      ),
      Cell: ({row})=>(
        <div className='flex justify-end pr-10'>
          <button className ='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg' onClick={() => handleProfileClick(row)}>Show Profile</button>
        </div>
      ),
    }
  ], [])



  return (
    <>
      <div className="min-h-full w-full bg-gray-100 text-gray-900">
        <main className="w-full h-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="w-60 flex flex-row justify-between items-center">
            <h1 className="text-3xl font-semibold text-center">
              STAFF LIST 
            </h1>
            <img 
              className='object-scale-down h-14 w-12 mx-auto'
              src={staffIcon} 
              alt='' />
          </div>
          <div className="mt-6">
            <Table onSelectedRows={onSelectedRows} columns={columns} data={data}/>
          </div>
        </main>
      </div>
    </>
  )
}

export default StaffList