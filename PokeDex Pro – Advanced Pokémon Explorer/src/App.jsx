import { useState } from 'react'
import { store } from './app/store'
import {Provider} from "react-redux"
import { Routes ,Route} from 'react-router-dom'
import './App.css'
import DashBoard from './pages/Dashboard'
import Detaile from './pages/DetailPage'

function App() {
  return (
    <>
    <Provider store={store}>
      <Routes>
          <Route path="/" element={<DashBoard/>}/>
          <Route path="/detailes" element={<Detaile/>}/>
      </Routes>
    </Provider>
    </>
  )
}

export default App
