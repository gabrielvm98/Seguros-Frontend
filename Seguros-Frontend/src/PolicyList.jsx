import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PolicyItem from './PolicyItem'

export default function PolicyList() {
  const [policies, setPolicies] = useState([])

  const [filteredPolicies, setFilteredPolicies] = useState([])
  const [filter, setFilter] = useState({ tipo: ''})
  const [sortBy, setSortBy] = useState('')

  useEffect(() => {
    fetchPolicies()
  }, [])

  useEffect(() => {
    applyFiltersAndSorting()
  }, [policies, filter, sortBy])

  const fetchPolicies = async () => {
    try {
      const response = await axios.get('http://localhost:8080/segurosAPI/v1/polizas')
      setPolicies(response.data.data)
      
    } catch (error) {
      console.error('Failed to fetch policies:', error)
    }
  }

  const applyFiltersAndSorting = () => {
    let updatedPolicies = [...policies]
        

    if (filter.tipo) {
      updatedPolicies = updatedPolicies.filter(policy => policy.tipo === filter.tipo)
    }  

    
    
    if (sortBy === 'monto') {
      updatedPolicies.sort((a, b) => a.monto - b.monto)
    } else if (sortBy === 'fechaInicio') {
      updatedPolicies.sort((a, b) => new Date(a.fechaInicio) - new Date(b.fechaInicio))
    }

    setFilteredPolicies(updatedPolicies)
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/segurosAPI/v1/polizas/${id}`)
      fetchPolicies()
    } catch (error) {
      console.error('Failed to delete policy:', error)
    }
  }

  return (
    <div className="card">
      <h2 className="card-title">Listado de Polizas de Seguro</h2>

      <div className="filters">
        <select onChange={(e) => setFilter({ ...filter, tipo: e.target.value })}>
          <option value="">Filtrar por Tipo</option>
          <option value="AUTO">Auto</option>
          <option value="INMUEBLE">Inmueble</option>
          <option value="CELULAR">Celular</option>
        </select>
        
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Ordenar por</option>
          <option value="monto">Monto</option>
          <option value="fechaInicio">Fecha de Inicio</option>
        </select>
      </div>

      <div className="policy-list">        
        {filteredPolicies.map((policy) => (
          <PolicyItem key={policy.id} policy={policy} onDelete={handleDelete} />
        ))}
      </div>
      
      <div className="card-footer">
        <Link to="/create" className="btn btn-primary">
          Crear Nueva Poliza
        </Link>
      </div>
    </div>
  )
}