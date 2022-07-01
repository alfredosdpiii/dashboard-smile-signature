import './App.css'
import "react-big-calendar/lib/css/react-big-calendar.css";
// import Scheduler from './components/Scheduler'
import Sidebar from './utils/Sidebar'
import Login from './components/Login';
import PatientList from './components/PatientList'
import DentalHistory from './components/DentalHistory';
import DentalRecord from './components/DentalRecord';
import PatientRegister from './components/PatientRegister';
import PatientTransaction from './components/PatientTransaction';
import TransactionModal from './components/TransactionModal';
import Overview from './components/Overview';
import StaffList from './components/StaffList';
import StaffProfile from './components/StaffProfile';
import ProfileSetup from './components/ProfileSetup';
import Scheduler from './components/Scheduler'
import Admin from './components/Admin';
import { UserContext } from "./context/UserContext";
import React, { useState, useMemo, useEffect } from "react"
import { Link, Route, Redirect, useLocation } from "wouter";

function App() {
  const [user, setUser] = useState(null)
  const value = useMemo(() => ({ user, setUser }), [user, setUser])
  const [location, setLocation] = useLocation();

  return (
    <UserContext.Provider value={value}>
      {user && user.has_profile === true ?
        <div className="flex flex-row h-screen w-screen">
          <Sidebar />
          <main role="main" className="w-screen pt-1 px-2">
            <Route path='/' component={Overview} />
            <Route path='/patients' component={PatientList} />
            <Route path='/calendar' component={Scheduler} />
            <Route path='/staff' component={StaffList} />
            <Route path='/dental_history' component={DentalHistory} />
            <Route path='/dental_record' component={DentalRecord} />
            <Route path='/patient_transaction' component={PatientTransaction} />
            {/* <Route path='/' component={Overview} /> */}

              {/* <Scheduler /> */}
            {/*   <DentalHistory /> */}
            {/*   <DentalRecord /> */}
            {/*   <PatientRegister /> */}
            {/* <PatientTransaction /> */}
            {/* <TransactionModal /> */}
            {/*   <StaffList /> */}
            {/*   <ProfileSetup /> */}
            {/*   <Admin /> */}
          </main>
        </div>
        : user && user.has_profile === false ?
        setLocation('/profile-setup')
          :
          <Redirect to={'/login'} />

      }
          {/* <Redirect to={'/profile-setup'} /> */}

      <Route path='/login' component={Login} />
      <Route path='/profile-setup' component={ProfileSetup} />
    </UserContext.Provider>
  )
}

export default App
