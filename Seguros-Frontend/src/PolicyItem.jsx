import React from 'react'
import { Link } from 'react-router-dom'

export default function PolicyItem({ policy, onDelete }) {

  const handleDelete = () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta póliza? Esta acción no se puede deshacer.')) {
      onDelete(policy.id)
    }
  }

  return (
    <div className="card">
      <h3>Seguro de {policy.tipo}</h3>
      <p>Fecha de Inicio: {policy.fechaInicio}</p>
      <p>Fecha de Vencimiento: {policy.fechaVencimiento}</p>
      <p>Monto: ${policy.monto}</p>
      
      {policy.tipo === 'AUTO' && (
        <>
          <p>Marca de Auto: {policy.marcaAuto}</p>
          <p>Modelo de Auto: {policy.modeloAuto}</p>
        </>
      )}

      {policy.tipo === 'INMUEBLE' && (
        <>
          <p>Direccion de Inmueble: {policy.direccionInmueble}</p>
          <p>Area de Inmueble: {policy.areaInmueble} sq ft</p>
        </>
      )}

      {policy.tipo === 'CELULAR' && (
        <>
          <p>Marca Celular: {policy.marcaCelular}</p>
          <p>Modelo Celular: {policy.modeloCelular}</p>
        </>
      )}

      <div className="card-footer">
        
        <Link to={`/update/${policy.id}`} className="btn btn-secondary">
          Actualizar
        </Link>

        <button onClick={handleDelete} className="btn btn-danger">
          Borrar
        </button>

      </div>
    </div>
  )
}