import React, { useEffect } from 'react'
import 'regenerator-runtime/runtime';
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './Table'
import maleIcon from '../assets/icons/male-avatar.jpg'
import femaleICon from '../assets/icons/female-avatar.webp'
import Moment from 'moment';
import { Button } from '../utils/Button'
import { useState } from 'react';
import axios from 'axios';

const getData = (patients) => {

  const data = [...patients]
  return [...data]
}

function PatientList() {
  const [patients, setPatients] = useState([])

  const fetchPatients = async () => {
    const response = await axios
      .get("http://127.0.0.1:3001/patient_records")
      .catch((err) => console.log(err));

      if (response) {
        const patients = response.data;
  
        console.log("Patients: ", patients);
        setPatients(patients);
        getData(patients)
      }
    };

  const columns = React.useMemo(() => [ 
    {
      Header: "ID",
      accessor: 'id'
    },
    {
      Header: "Name",
      accessor: 'name',
      Cell: AvatarCell,
      imgAccessor: "imgUrl",
      emailAccessor: "email",
    },
    {
      Header: "Gender",
      accessor: 'gender',
    },
    {
      Header: "Date of Birth",
      accessor: 'dob',
    },
    {
      Header: "Mobile",
      accessor: 'mobile',
    },
    {
      Header: "Address",
      accessor: 'address1',
      secondAccessor: 'address2',
    },
    {
      Header: "Record",
      Cell: <button className ='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Record</button>
    },
    {
      Header: "Transactions",
      Cell: <button className ='bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full'>Transactions</button>
    }
  ], [])

  const data = React.useMemo(() => getData(patients), [])

  useEffect(() => {
    fetchPatients()
  }, [])

  return (
    <div className="min-h-full w-[109em] bg-gray-100 text-gray-900">
      <main className="w-full h-[60.5em] mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">🦷 PATIENT LIST 🦷</h1>
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default PatientList;
