import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function UpdatePolicy() {
  const [policy, setPolicy] = useState({
    tipo: '',
    fechaInicio: '',
    fechaVencimiento: '',
    monto: '',
    marcaAuto: '',
    modeloAuto: '',
    direccionInmueble: '',
    areaInmueble: '',
    marcaCelular: '',
    modeloCelular: '',
  })
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchPolicy()
  }, [id])

  const fetchPolicy = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/segurosAPI/v1/polizas/${id}`)
      setPolicy(response.data.data)
    } catch (error) {
      console.error('Failed to fetch policy:', error)
    }
  }

  const handleChange = (e) => {
    setPolicy({ ...policy, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:8080/segurosAPI/v1/polizas/${id}`, policy)
      navigate('/policies')
    } catch (error) {
      console.error('Failed to update policy:', error)
    }
  }

  return (
    <div className="card">
      <h2 className="card-title">Update Insurance Policy</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tipo" className="form-label">
            Tipo
          </label>
          <input
            id="tipo"
            name="tipo"
            className="form-input"
            value={policy.tipo}
            onChange={handleChange}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaInicio" className="form-label">
            Fecha de Inicio
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
            Fecha de Vencimiento
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
            Monto
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

        {policy.tipo === 'AUTO' && (
          <>
            <div className="form-group">
              <label htmlFor="marcaAuto" className="form-label">
                Marca de Auto
              </label>
              <input
                id="marcaAuto"
                name="marcaAuto"
                className="form-input"
                value={policy.marcaAuto}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="modeloAuto" className="form-label">
                Modelo de Auto
              </label>
              <input
                id="modeloAuto"
                name="modeloAuto"
                className="form-input"
                value={policy.modeloAuto}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        {policy.tipo === 'INMUEBLE' && (
          <>
            <div className="form-group">
              <label htmlFor="direccionInmueble" className="form-label">
                Direccion de Inmueble
              </label>
              <input
                id="direccionInmueble"
                name="direccionInmueble"
                className="form-input"
                value={policy.direccionInmueble}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="areaInmueble" className="form-label">
                Area de Inmueble
              </label>
              <input
                id="areaInmueble"
                name="areaInmueble"
                className="form-input"
                value={policy.areaInmueble}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        {policy.tipo === 'CELULAR' && (
          <>
            <div className="form-group">
              <label htmlFor="marcaCelular" className="form-label">
                Marca de Celular
              </label>
              <input
                id="marcaCelular"
                name="marcaCelular"
                className="form-input"
                value={policy.marcaCelular}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="modeloCelular" className="form-label">
                Modelo de Celular
              </label>
              <input
                id="modeloCelular"
                name="modeloCelular"
                className="form-input"
                value={policy.modeloCelular}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        <button type="submit" className="btn btn-primary">
          Actualizar Poliza
        </button>
      </form>
    </div>
  )
}