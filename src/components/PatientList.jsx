import React, { useEffect } from 'react'
import 'regenerator-runtime/runtime';
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './Table'
import maleIcon from '../assets/icons/male-avatar.jpg'
import femaleICon from '../assets/icons/female-avatar.webp'
import { useState } from 'react';
import axios from 'axios';
import PatientRegister from './PatientRegister';



function PatientList() {
  const [patients, setPatients] = useState([])
  const [isAddingPatient, setIsAddingPatient] = useState(false)

  const handleAddPatient = () => {
    setIsAddingPatient(!isAddingPatient)
  }

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
      Header: "Record",
      Cell: <button className ='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg'>Record</button>
    },
    {
      Header: "Transactions",
      Cell: <button className ='bg-transparent hover:bg-emerald-500 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded-lg'>Transactions</button>
    }
  ], [])

  const data = patients

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3001/patient_records'
    }).then((res) => {
      const patients = res.data;
      const new_patients = []
      patients.map((patient) => {
        const new_object = {
          ...patient,
          imgAvatar: patient.gender === 'Male' ? maleIcon : femaleICon
        }
        new_patients.push(new_object)
      })
      
      setPatients(new_patients);
    })
  }, [])

  return (
    <>
      <div className="min-h-full w-full bg-gray-100 text-gray-900">
        <main className="w-full h-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="w-full flex flex-row justify-between">
            <h1 className="text-xl font-semibold"> PATIENT LIST 📃</h1>
            <button 
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
              onClick={handleAddPatient}
            >
          Register Patient
        </button>
          </div>
          <div className="mt-6">
            <Table columns={columns} data={data} />
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
