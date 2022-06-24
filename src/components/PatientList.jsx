import React from 'react'
import 'regenerator-runtime/runtime';
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './Table'
import maleIcon from '../assets/icons/male-avatar.jpg'
import femaleICon from '../assets/icons/female-avatar.webp'
import Moment from 'moment';
import { Button } from '../utils/Button'

const getData = () => {

  const data = [
    {
      id: 1,
      name: 'Jake Pogi',
      email: 'jake@jakey.com',
      dob: Moment("1960/08/22").format('D MMMM YYYY'),
      address1: "Block 35, Lot 20, Talon Bente, Las Pinas",
      address2: 'Talon Bente, Las Pinas',
      mobile: '09194765353',
      age: 27,
      gender: 'male',
      imgUrl: maleIcon
    },
    {
      id: 2,
      name: 'Bry Pogi',
      email: 'Bry@bryan.com',
      dob: Moment("1960/08/22").format('D MMMM YYYY'),
      address1: "Block 35, Lot 20, Talon Bente, Las Pinas",
      address2: 'Talon Bente, Las Pinas',
      mobile: '09194765353',
      age: 27,
      gender: 'male',
      imgUrl: maleIcon
    },
    {
      id: 3,
      name: 'Edward Pogi',
      email: 'Edward@edward.com',
      dob: Moment("1960/08/22").format('D MMMM YYYY'),
      address1: "Block 35, Lot 20, Talon Bente, Las Pinas",
      address2: 'Talon Bente, Las Pinas',
      mobile: '09194765353',
      age: 27,
      gender: 'male',
      imgUrl: maleIcon
    },
    {
      id: 4,
      name: 'Traxex Pogi',
      email: 'Traxex@traxex.com',
      dob: Moment("1960/08/22").format('D MMMM YYYY'),
      address1: "Block 35, Lot 20, Talon Bente, Las Pinas",
      address2: 'Talon Bente, Las Pinas',
      mobile: '09194765353',
      age: 27,
      gender: 'male',
      imgUrl: maleIcon
    },
    {
      id: 5,
      name: 'Anna Ganda',
      email: 'Anna@anna.com',
      dob: Moment("1960/08/22").format('D MMMM YYYY'),
      address1: "Block 35, Lot 20, Talon Bente, Las Pinas",
      address2: 'Talon Bente, Las Pinas',
      mobile: '09194765353',
      age: 27,
      gender: 'female',
      imgUrl: femaleICon
    },
    {
      id: 6,
      name: 'Nene Ganda',
      email: 'Nene@nene.com',
      dob: Moment("1960/08/22").format('D MMMM YYYY'),
      address1: "Block 35, Lot 20, Talon Bente, Las Pinas",
      address2: 'Talon Bente, Las Pinas',
      mobile: '09194765353',
      age: 27,
      gender: 'female',
      imgUrl: femaleICon
    },
  ]
  return [...data, ...data, ...data]
}

function PatientList() {

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

  const data = React.useMemo(() => getData(), [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default PatientList;
