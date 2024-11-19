import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function CreatePolicy() {
  const [policy, setPolicy] = useState({
    tipo: '',
    fechaInicio: '',
    fechaVencimiento: '',
    monto: '',
    usuarioId: 1,
    marcaAuto: '',
    modeloAuto: '',
    direccionInmueble: '',
    areaInmueble: '',
    marcaCelular: '',
    modeloCelular: ''
  })
  const [emailSentMessage, setEmailSentMessage] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setPolicy({ ...policy, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8080/segurosAPI/v1/polizas', policy)
      
      setEmailSentMessage(true)
      setTimeout(() => {
        navigate('/policies')
      }, 3000)

    } catch (error) {
      console.error('Failed to create policy:', error)
    }
  }

  return (
    <div className="card">
      <h2 className="card-title">Crear Nueva Poliza de Seguro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tipo" className="form-label">
            Tipo
          </label>
          <select
            id="tipo"
            name="tipo"
            className="form-input"
            value={policy.tipo}
            onChange={handleChange}
            required
          >
            <option value="">Selecccionar tipo</option>
            <option value="AUTO">AUTO</option>
            <option value="INMUEBLE">INMUEBLE</option>
            <option value="CELULAR">CELULAR</option>
          </select>
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
        <div className="form-group">
          <label htmlFor="usuarioId" className="form-label">
            ID de Usuario
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
                Marca de Auto
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
                Modelo de Auto
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
              Dirección de Inmueble
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
                Area de Inmueble
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
                Marca de Celular
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
                Modelo de Celular
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
          Crear Poliza
        </button>
      </form>
    
      {emailSentMessage && (
        <div className="email-confirmation">
          Correo electrónico enviado al cliente con el detalle de la póliza.
        </div>
      )}

    </div>

    
  )
}