import './App.css'
import "react-big-calendar/lib/css/react-big-calendar.css";
import Scheduler from './components/Scheduler'
import Sidebar from './utils/Sidebar'

function App() {

  return (
      <div className="flex flex-row">
        <Sidebar />
        <main role="main" className="w-3/4 sm:w-2/3 md:w-3/4 pt-1 px-2">
          <Scheduler />
        </main>
      </div>
  )
}

export default App
