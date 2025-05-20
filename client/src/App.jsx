import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import MainView from './dashboards/almn/MainView';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/almn" element={< MainView/>} />
      </Routes>
    </>
  )
}

export default App
