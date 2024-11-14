import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function CreatePolicy() {
  const [policy, setPolicy] = useState({
    tipo: '',
    fechaInicio: '',
    fechaVencimiento: '',
    monto: '',
    usuarioId: '',
    marcaAuto: '',
    modeloAuto: '',
    direccionInmueble: '',
    areaInmueble: '',
    marcaCelular: '',
    modeloCelular: ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setPolicy({ ...policy, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8080/segurosAPI/v1/polizas', policy)
      navigate('/policies')
    } catch (error) {
      console.error('Failed to create policy:', error)
    }
  }

  return (
    <div className="card">
      <h2 className="card-title">Create New Insurance Policy</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tipo" className="form-label">
            Type
          </label>
          <select
            id="tipo"
            name="tipo"
            className="form-input"
            value={policy.tipo}
            onChange={handleChange}
            required
          >
            <option value="">Select type</option>
            <option value="AUTO">AUTO</option>
            <option value="INMUEBLE">INMUEBLE</option>
            <option value="CELULAR">CELULAR</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="fechaInicio" className="form-label">
            Start Date
          </label>
          <input
            id="fechaInicio"
            name="fechaInicio"
            type="date"
            className="form-input"
            value={policy.fechaInicio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaVencimiento" className="form-label">
            Expiration Date
          </label>
          <input
            id="fechaVencimiento"
            name="fechaVencimiento"
            type="date"
            className="form-input"
            value={policy.fechaVencimiento}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="monto" className="form-label">
            Amount
          </label>
          <input
            id="monto"
            name="monto"
            type="number"
            className="form-input"
            value={policy.monto}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="usuarioId" className="form-label">
            User ID
          </label>
          <input
            id="usuarioId"
            name="usuarioId"
            type="number"
            className="form-input"
            value={policy.usuarioId}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campos específicos de AUTO */}
        {policy.tipo === 'AUTO' && (
          <>
            <div className="form-group">
              <label htmlFor="marcaAuto" className="form-label">
                Car Brand
              </label>
              <input
                id="marcaAuto"
                name="marcaAuto"
                className="form-input"
                value={policy.marcaAuto}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="modeloAuto" className="form-label">
                Car Model
              </label>
              <input
                id="modeloAuto"
                name="modeloAuto"
                className="form-input"
                value={policy.modeloAuto}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        {/* Campos específicos de INMUEBLE */}
        {policy.tipo === 'INMUEBLE' && (
          <>
            <div className="form-group">
              <label htmlFor="direccionInmueble" className="form-label">
                Property Address
              </label>
              <input
                id="direccionInmueble"
                name="direccionInmueble"
                className="form-input"
                value={policy.direccionInmueble}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="areaInmueble" className="form-label">
                Property Area (sq ft)
              </label>
              <input
                id="areaInmueble"
                name="areaInmueble"
                className="form-input"
                value={policy.areaInmueble}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        {/* Campos específicos de CELULAR */}
        {policy.tipo === 'CELULAR' && (
          <>
            <div className="form-group">
              <label htmlFor="marcaCelular" className="form-label">
                Phone Brand
              </label>
              <input
                id="marcaCelular"
                name="marcaCelular"
                className="form-input"
                value={policy.marcaCelular}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="modeloCelular" className="form-label">
                Phone Model
              </label>
              <input
                id="modeloCelular"
                name="modeloCelular"
                className="form-input"
                value={policy.modeloCelular}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        <button type="submit" className="btn btn-primary">
          Create Policy
        </button>
      </form>
    </div>
  )
}