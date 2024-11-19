import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    setIsLoggedIn(true)
    navigate('/policies')

    /*e.preventDefault()
    try {
      const response = await axios.post('/api/login', { username, password })
      if (response.data.success) {
        setIsLoggedIn(true)
        navigate('/policies')
      }
    } catch (error) {
      console.error('Login failed:', error)
    }*/
  }

  return (
    <div className="card">
      <h2 className="card-title">Inicio de Sesion</h2>
      <form onSubmit={handleLogin}>

        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Usuario
          </label>
          <input
            id="username"
            type="text"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Iniciar Sesion
        </button>
      </form>
    </div>
  )
}