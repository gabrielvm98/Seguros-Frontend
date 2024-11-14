import React from 'react'
import { Link } from 'react-router-dom'

export default function PolicyItem({ policy, onDelete }) {
  return (
    <div className="card">
      <h3>{policy.tipo} Insurance</h3>
      <p>Start Date: {policy.fechaInicio}</p>
      <p>Expiration Date: {policy.fechaVencimiento}</p>
      <p>Amount: ${policy.monto}</p>
      
      {policy.tipo === 'AUTO' && (
        <>
          <p>Car Brand: {policy.marcaAuto}</p>
          <p>Car Model: {policy.modeloAuto}</p>
        </>
      )}

      {policy.tipo === 'INMUEBLE' && (
        <>
          <p>Property Address: {policy.direccionInmueble}</p>
          <p>Property Area: {policy.areaInmueble} sq ft</p>
        </>
      )}

      {policy.tipo === 'CELULAR' && (
        <>
          <p>Cell Phone Brand: {policy.marcaCelular}</p>
          <p>Cell Phone Model: {policy.modeloCelular}</p>
        </>
      )}

      <div className="card-footer">
        
        <Link to={`/update/${policy.id}`} className="btn btn-secondary">
          Update
        </Link>

        <button onClick={() => onDelete(policy.id)} className="btn btn-danger">
          Delete
        </button>

      </div>
    </div>
  )
}