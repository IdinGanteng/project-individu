import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Registration from './pages/Registration'
import Login from './pages/login'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App