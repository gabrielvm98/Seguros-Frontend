import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-brand">
          Insurance Policy Manager
        </Link>
        {isLoggedIn ? (
          <div className="navbar-links">
            <Link to="/create" className="btn btn-secondary">
              Create Policy
            </Link>
            <Link to="/policies" className="btn btn-secondary">
              View Policies
            </Link>
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}