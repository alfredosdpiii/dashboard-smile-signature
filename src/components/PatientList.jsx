import React, { useEffect, useContext } from 'react'
import 'regenerator-runtime/runtime';
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './Table'
import maleIcon from '../assets/icons/male-avatar.jpg'
import femaleICon from '../assets/icons/female-avatar.webp'
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from "wouter";
import PatientRegister from './PatientRegister';
import DentalHistory from './DentalHistory';
import PatientTransaction from './PatientTransaction';
import { ClickedItemContext } from '../context/ClickedItemContext'
import { UserContext } from '../context/UserContext'



function PatientList() {
  const [patients, setPatients] = useState([])
  const [isAddingPatient, setIsAddingPatient] = useState(false)
  const [selectedRows, setSelectedData] = useState([])
  const [selectedPatient, setSelectedPatient] = useState('')
  const [location, setLocation] = useLocation();

  //context
  const { item, setItem } = useContext(ClickedItemContext)
  const { user } = useContext(UserContext)

  const onSelectedRows = rows => {
    const mappedRows = rows.map(r => r.original);
    setSelectedData([...selectedRows, ...mappedRows]);
  };

  const handleAddPatient = () => {
    setIsAddingPatient(!isAddingPatient)
  }

  const handlePassData = (id) => {
    console.log(id)

  }

  const handleRecordClick = (row) => {
    console.log(row.original)
    setSelectedPatient(row.original)
    setItem(row.original)
    // setLocation('/dental_history')
    setLocation(`/dental_history/${row.original.id}`)
  }

  const handleTransactionClick = (row) => {
    console.log(row.original)
    setSelectedPatient(row.original)
    setItem(row.original)
    setLocation(`/patient_transaction/${row.original.id}`)
  }

  const data = patients

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3001/patient_records',
      headers: {
        'Authorization': ` ${user.token}`
      }
    }).then((res) => {
      const patients = res.data;
      const new_patients = []
      patients.map((patient) => {
        const new_object = {
          ...patient,
          imgAvatar: patient.gender === 'male' ? maleIcon : femaleICon
        }
        new_patients.push(new_object)
      })
      
      setPatients(new_patients);
    })
  }, [])

  const columns = React.useMemo(() => [ 
    {
      Header: "ID",
      accessor: 'id'
    },
    {
      Header: "Name",
      accessor: 'full_name',
      Cell: AvatarCell,
      imgAccessor: "imgAvatar",
      emailAccessor: "email",
    },
    {
      Header: "Gender",
      accessor: 'gender',
    },
    {
      Header: "Date of Birth",
      accessor: 'date_of_birth',
    },
    {
      Header: "Mobile",
      accessor: 'mobile',
    },
    {
      Header: "Address",
      accessor: 'address',
    },
    {
      id:"selection",
      Header: ({getToggleAllRowsSelectedProps }) =>(
        <div className='flex justify-end w-full'>
          <p>Dental History</p>
        </div>
      ),
      Cell: ({row})=>(
        <div className='flex justify-center w-full'>
          <button className ='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded-lg' onClick={() => handleRecordClick(row)}>View</button>
        </div>
        
      ),
    },
    {
      id:"selection2",
      Header: ({getToggleAllRowsSelectedProps }) =>(
        <div className='flex justify-start w-full'>
          <p>Sales Records</p>
        </div>
      ),
      Cell: ({row})=>(
        <div className='flex justify-start w-full'>
          <button className ='bg-transparent hover:bg-emerald-500 text-emerald-700 font-semibold hover:text-white py-2 px-6 border border-emerald-500 hover:border-transparent rounded-lg' onClick={() => handleTransactionClick(row)}>View</button>
        </div>
        
      ),
    }
  ], [])

  return (
    <>
      <div className="min-h-full w-full bg-gray-100 text-gray-900">
        <main className="w-full h-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="w-full flex flex-row justify-between mt-5">
            <h1 className="text-xl font-semibold"> PATIENT LIST 📃</h1>
          </div>
          <div className="mt-20 h-full">
            <Table onSelectedRows={onSelectedRows} columns={columns} data={data} label="Register Patient" handleClick={handleAddPatient}/>
          </div>
        </main>
      </div>
      {isAddingPatient && (
        <PatientRegister setIsAddingPatient={setIsAddingPatient} />
      )}
    </>
  );
}

export default PatientList;
