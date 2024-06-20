import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Mapping from './screens/Mapping'
import Dashboard from './screens/Dashboard'
import Download from './screens/Download'
import Profile from './screens/Profile'
import DeviceRegisted from './screens/DeviceRegister/DeviceRegisted'
import Contactus from './screens/Contactus'
import ErrorScreen from './screens/ErrorScreen'
import RegisterDetail from './screens/DeviceRegister/RegisterDetail'

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Mapping />} />
            <Route path='/mapping' element={<Mapping />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/download' element={<Download />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/deviceregisted' element={<DeviceRegisted />} />
            <Route path='/contactus' element={<Contactus />} />
            <Route path='/errorscreen' element={<ErrorScreen />} />
            <Route path='/registerdetail' element={<RegisterDetail />} />
          </Routes>
        </BrowserRouter>
      </div >
    </>
  )
}

export default App
