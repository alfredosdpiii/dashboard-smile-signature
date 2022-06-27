import React, { useState, useEffect } from 'react'
import Table, { AvatarCell, StatusPill } from './Table'
import transactionIcon from '../assets/icons/transaction-icon-2.webp'
import axios from 'axios'
import dayjs from 'dayjs'

const PatientTransaction = () => {
  const [transactions, setTransactions] = useState([])

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
      Header: "Amount",
      accessor: 'amount',
    },
    {
      Header: "Type",
      accessor: 'payment_type',
    },
    {
      Header: "Status",
      accessor: 'status',
      Cell: StatusPill
    },
    {
      Header: "Remaining",
      accessor: 'remaining',
      Cell: ({ row }) => {
        if (parseInt(row.original.remaining) > 0) {
          return (
            <h4 className='text-base text-red-700'>{row.original.remaining}</h4>
          )
        } else {
          return (
            <h4>----</h4>
          )
        }
       }
        
    },
    {
      Header: "Branch",
      accessor: 'branch',
    }
  ], [])

  const data = transactions

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3001/patient_record/19/transactions'
    }).then((res) => {
      const transactions = res.data;
      const new_transactions = []
      transactions.map((transaction) => {
        const new_object = {
          ...transaction,
          icon: transactionIcon,
        }
        new_transactions.push(new_object)
      })
      
      setTransactions(new_transactions);
    })
  }, [])


  return (
    <>
      <div className='h-[60.5em] w-[109.3em] bg-gray-100'>
        <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <div className="flex flex-row justify-between p-2 mb-10">
              <h1 className="text-2xl font-semibold">TRANSACTIONS</h1>
            </div>
            <div className="mt-6">
              <Table columns={columns} data={data} label="Generate Transaction"/>
            </div>
          </main>
      </div>
    </>
  )
}

export default PatientTransaction