import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './app/pages/Home'
import Login from './app/pages/Auth/Login'
import Signup from './app/pages/Auth/Signup'
import MapComponent from './app/Component/GoogleMap/MapComponent'
import UserProfile from './app/Component/UserProfile'
import Dashboard from './app/pages/Dashboard'
import Chatpage from './app/pages/Message/Chatpage'
import Onboarding from './app/pages/onboarding'
import Profile from './app/pages/Profile/Profile'
import PersonalInfo from './app/pages/Profile/PersonalInfo'
import Gigs from './app/pages/Profile/Gigs'
import Overview from './app/Component/Gigs/Overview'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/map' element={<MapComponent />} />
        <Route path='/profile/:id' element={<UserProfile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/chat' element={<Chatpage />} />
        <Route path='/seller_onboarding' element={<Onboarding />} />
        <Route path='/personal_info' element={<PersonalInfo />} />
        <Route path='/manage_gigs/:id' element={<Overview />} />
      </Routes>
    </>
  )
}

// clientId = i6Emcp030e1VFxsV1ENnaY6XyOvCznaA
// client secret = rk4y3sJvx_YIE24g7IRcFDi6yp3Tg0EW0uU9dBeB15UP08qs9lxOHiY8WKMpqiJH

export default App