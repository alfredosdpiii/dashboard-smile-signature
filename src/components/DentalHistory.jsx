import React, { useState, useEffect } from 'react'
import Table, { AvatarCell } from './Table'
import recordIcon from '../assets/icons/dental-record-icon.jpg'
import axios from 'axios'
import dayjs from 'dayjs'

const DentalHistory = () => {
  const [dentalRecords, setDentalRecords] = useState([])

  const columns = React.useMemo(() => [ 
    {
      Header: "ID",
      accessor: 'id'
    },
    {
      Header: "Name",
      accessor: 'full_name',
      Cell: AvatarCell,
      imgAccessor: 'icon'
    },
    {
      Header: "Date",
      accessor: 'created_at',
      Cell: ({ row }) => {
        return (
             dayjs(row.original.created_at).format('DD/MM/YYYY')
              );
       }
    },
    {
      Header: "Services",
      accessor: 'services',
      Cell: ({ row }) => {
        return (
             row.original.services
                .map((service) => (
                    <div key={service}>
                        <h4>{service}</h4>
                    </div>
                ))
              );
       }
    },
    {
      Header: "Tooth",
      accessor: 'tooth',
      Cell: ({ row }) => {
        return (
             row.original.tooth
                .map((t) => (
                    <div key={t}>
                        <h4>{t}</h4>
                    </div>
                ))
              );
       }
    },
    {
      Header: "Branch",
      accessor: 'branch',
    },
    {
      Header: "Remarks",
      accessor: 'remarks',
      Cell: ({ row }) => {
        return (
          <div>
            {row.original.remarks}
          </div>
              );
       }
    }
  ], [])

  const data = dentalRecords

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3001/dental_records'
    }).then((res) => {
      const dental_records = res.data;
      const new_dental_records = []
      dental_records.map((record) => {
        const new_object = {
          ...record,
          icon: recordIcon,
          // record.created_at = dayjs(record.created_at).format('DD/MM/YYY')
        }
        new_dental_records.push(new_object)
      })
      
      setDentalRecords(new_dental_records);
    })
  }, [])
  
  return (
    <>
      <div className='h-[60.5em] w-[109.3em] bg-gray-100'>
        <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <div className="flex flex-row justify-between p-2 mb-10">
              <h1 className="text-2xl font-semibold">DENTAL HISTORY 🦷</h1>
            </div>
            <div className="mt-6">
              <Table columns={columns} data={data} label="Create Record"/>
            </div>
          </main>
      </div>
    </>
  )
}

export default DentalHistory