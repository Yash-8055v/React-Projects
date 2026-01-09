import React, {useState, useEffect, use} from "react"
import {useDispatch, useSelector} from "react-redux"
import {login, logout} from "./store/authSlice"
import authService from "./appwrite/auth"
import './App.css'
import { Outlet } from "react-router-dom"
import {Header, Footer} from "./components/index"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(() => {
    authService.getCurrentUser()
      .then(user => {
        dispatch(login(user))
      })
      .catch(() => {
        dispatch(logout())
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  
    return ! loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <Main>
          {/* <Outlet /> */}
        </Main>
        <Footer />
      </div>
    </div>
    ): null;
}

export default App
