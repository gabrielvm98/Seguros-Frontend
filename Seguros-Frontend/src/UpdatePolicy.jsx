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
            Type
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
              />
            </div>
          </>
        )}

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
              />
            </div>
            <div className="form-group">
              <label htmlFor="areaInmueble" className="form-label">
                Property Area
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
                Cell Phone Brand
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
                Cell Phone Model
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
          Update Policy
        </button>
      </form>
    </div>
  )
}