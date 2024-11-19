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
          SegurAl: Gestor de Polizas de Seguros
        </Link>

        {isLoggedIn ? (

          <div className="navbar-links">
            <Link to="/create" className="btn btn-primary">
              Crear Poliza
            </Link>

            <Link to="/policies" className="btn btn-primary">
              Ver Polizas
            </Link>
            
            <button onClick={handleLogout} className="btn btn-danger">
              Cerrar Sesion
            </button>
          </div>

        ) : (

          <Link to="/login" className="btn btn-primary">
            Inicio Sesion
          </Link>

        )}

      </div>

    </nav>
  )
}