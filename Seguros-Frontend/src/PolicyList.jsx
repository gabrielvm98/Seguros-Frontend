import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PolicyItem from './PolicyItem'

export default function PolicyList() {
  const [policies, setPolicies] = useState([])

  useEffect(() => {
    fetchPolicies()
  }, [])

  const fetchPolicies = async () => {
    try {
      const response = await axios.get('http://localhost:8080/segurosAPI/v1/polizas')
      setPolicies(response.data.data)
      console.log(policies)
    } catch (error) {
      console.error('Failed to fetch policies:', error)
    }
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
      <h2 className="card-title">Insurance Policies</h2>
      <div className="policy-list">        
        {policies.map((policy) => (
          <PolicyItem key={policy.id} policy={policy} onDelete={handleDelete} />
        ))}
      </div>
      
      <div className="card-footer">
        <Link to="/create" className="btn btn-primary">
          Create New Policy
        </Link>
      </div>
    </div>
  )
}