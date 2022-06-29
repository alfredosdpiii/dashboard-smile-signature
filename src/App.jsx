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
import StaffList from './components/StaffList';
import StaffProfile from './components/StaffProfile';
import ProfileSetup from './components/ProfileSetup';
import { Link, Route } from 'wouter';

function App() {

  return (
    <div className="flex flex-row h-screen w-screen">
      <Sidebar />
      <main role="main" className="w-screen pt-1 px-2">
        {/* <Scheduler /> */}
        <Route path='/patients'
          component={PatientList}
        />
        <Route path='/staff'
          component={StaffList}
        />
        {/* <Route path='/login' */}
        {/*   component={} */}
        {/* /> */}
        <Route path='/login'
          component={Login}
        />
        {/* <DentalHistory /> */}
        {/* <DentalRecord /> */}
        {/* <PatientRegister /> */}
        {/* <PatientTransaction /> */}
        {/* <TransactionModal /> */}
        {/* <StaffList /> */}
        {/* <ProfileSetup /> */}
      </main>
    </div>
  )
}

export default App
