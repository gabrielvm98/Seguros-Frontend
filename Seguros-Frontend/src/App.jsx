import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Navigation from './Navigation'
import Login from './Login'
import CreatePolicy from './CreatePolicy'
import PolicyList from './PolicyList'
import UpdatePolicy from './UpdatePolicy'
import './styles.css'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <div className="app">

        <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        <main className="container">
          <Routes>
            <Route 
              path="/login" 
              element={<Login setIsLoggedIn={setIsLoggedIn} />} 
            />

            <Route
              path="/create"
              element={isLoggedIn ? <CreatePolicy /> : <Navigate to="/login" />}
            />

            <Route
              path="/policies"
              element={isLoggedIn ? <PolicyList /> : <Navigate to="/login" />}
            />

            <Route
              path="/update/:id"
              element={isLoggedIn ? <UpdatePolicy /> : <Navigate to="/login" />}
            />

            <Route path="/" element={<Navigate to="/policies" />} />
          </Routes>
        </main>

      </div>
    </Router>
  )
}