import React, { useState, useEffect, useContext } from 'react'
import Table, { AvatarCell } from './Table'
import recordIcon from '../assets/icons/dental-record-icon.jpg'
import { ClickedItemContext } from '../context/ClickedItemContext';
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import dayjs from 'dayjs'
import DentalRecord from './DentalRecord'

const DentalHistory = () => {
  const [dentalRecords, setDentalRecords] = useState([])
  const [isAddingRecord, setIsAddingRecord] = useState(false)
  const { item, setItem } = useContext(ClickedItemContext)
  const { user } = useContext(UserContext)
  const handleRecord = () =>{
    setIsAddingRecord(true)
  }

  console.log(item)

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
      url: `https://smile-sig-api.herokuapp.com/dental_records/${item.id}`,
      headers: {
        'Authorization': ` ${user.token}`
      }

    }).then((res) => {
      const dental_records = res.data;
      console.log(dental_records)
      const new_dental_records = []
      dental_records.map((record) => {
        const new_object = {
          ...record,
          icon: recordIcon
        }
        new_dental_records.push(new_object)
      })

      setDentalRecords(new_dental_records);
    })
  }, [])

  return (
    <>
      <div className='h-full w-full bg-gray-100'>
        <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="flex flex-row justify-between p-2 mb-10">
            <h1 className="text-2xl font-semibold">DENTAL HISTORY ????</h1>
          </div>
          <div className="mt-6">
            <Table columns={columns} data={data} label="Create Record" handleClick={handleRecord}/>
          </div>
        </main>
      </div>
      {isAddingRecord && (
        <DentalRecord setIsAddingPatient={setIsAddingRecord} item={item}/>
      )}
    </>
  )
}

export default DentalHistory
