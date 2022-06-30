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
import Scheduler from './components/Scheduler'
import Admin from './components/Admin';

function App() {

  return (
      <div className="flex flex-row h-screen w-screen">
        <Sidebar />
        <main role="main" className="w-screen pt-1 px-2">
          {/* <Scheduler /> */}
          {/* <PatientList /> */}
          {/* <DentalHistory /> */}
          {/* <DentalRecord /> */}
          {/* <PatientRegister /> */}
          {/* PatientTransaction />< */}
          {/* <TransactionModal /> */}
          {/* <StaffList /> */}
          {/* <ProfileSetup /> */}
          <Admin />
        </main>
      </div>
  )
}

export default App
