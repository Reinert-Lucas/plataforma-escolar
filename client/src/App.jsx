import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './auth/Login';
import Header from './components/Header';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/almn" element={<Header />} />
      </Routes>
    </>
  )
}

export default App
