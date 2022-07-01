import React, { useState, useEffect } from 'react';
import Table, { AvatarCell, StatusPill } from './Table'
import peso from '../assets/icons/peso-sign.png'
import axios from 'axios';

const Obligations = () => {
  const [obligations, setObligations] = useState([])
  const data = obligations

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3001/obligations'
    }).then((res) => {
      setObligations(res.data)
      console.log(res.data)
    })
  }, [])

  const columns = React.useMemo(() => [ 
    {
      Header: "ID",
      accessor: 'id'
    },
    {
      Header: "Name",
      accessor: 'full_name'
    },
    {
      Header: "Remaining",
      accessor: 'remaining',
      Cell: ({row}) => {
        return (
          <div className='w-full flex flex-row items-center'>
            <img src={peso} className='object-scale-down h-5 w-5 mr-2'/>
            <p className='font-semibold'>
               {row.original.remaining}
            </p>
          </div>
          
        )
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
                        <h4 className='my-2'>{service}</h4>
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
      Header: "Mobile",
      accessor: 'mobile',
    },
    {
      Header: "Address",
      accessor: 'address',
    }
  ], [])


  return (
    <>
      <div className="h-full w-full bg-gray-100 text-gray-900">
        <main className="w-full h-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="w-full flex items-center mt-10 pl-10">
            <h1 className="text-2xl font-semibold text-center">
              Pending Obligations ⚠ 
            </h1>
          </div>
          <div className="mt-20 p-10">
            <Table columns={columns} data={data}/>
          </div>
        </main>
      </div>
    </>
  )
}

export default Obligations