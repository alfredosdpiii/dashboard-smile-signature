import React, { useState, useEffect, useContext } from 'react'
import Table, { AvatarCell, StatusPill } from './Table'
import transactionIcon from '../assets/icons/transaction-icon-3.png'
import axios from 'axios'
import dayjs from 'dayjs'
import TransactionModal from './TransactionModal'
import { ClickedItemContext } from '../context/ClickedItemContext';

const PatientTransaction = () => {
  const [transactions, setTransactions] = useState([])
  const [isCreatingTransaction, setIsCreatingTransaction] = useState(false)
  const {item, setItem} = useContext(ClickedItemContext)
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
      url: `http://127.0.0.1:3001/patient_record/${item.id}/transactions`
    }).then((res) => {
      console.log(res)
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

  const handleCreateTransaction = () => {
    setIsCreatingTransaction(!isCreatingTransaction)
  }


  return (
    <>
      <div className='h-full w-full bg-gray-100'>
        <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <div className="flex flex-row justify-between p-2 mb-10">
              <h1 className="text-2xl font-semibold">TRANSACTIONS</h1>
            </div>
            <div className="mt-6">
              <Table columns={columns} data={data} label="Generate Transaction" handleClick={handleCreateTransaction} />
            </div>
          </main>
      </div>
      {isCreatingTransaction && (
        <TransactionModal setIsCreatingTransaction={setIsCreatingTransaction} />
      )}
    </>
  )
}

export default PatientTransaction