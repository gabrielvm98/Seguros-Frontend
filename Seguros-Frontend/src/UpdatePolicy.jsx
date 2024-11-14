import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function UpdatePolicy() {
  const [policy, setPolicy] = useState({
    type: '',
    startDate: '',
    expirationDate: '',
    amount: '',
    propertyAddress: '',
    propertyArea: '',
  })
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchPolicy()
  }, [id])

  const fetchPolicy = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.get(`/api/policies/${id}`)
      setPolicy(response.data)
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
      // Replace with your actual API endpoint
      await axios.put(`/api/policies/${id}`, policy)
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
          <label htmlFor="type" className="form-label">
            Type
          </label>
          <input
            id="type"
            name="type"
            className="form-input"
            value={policy.type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate" className="form-label">
            Start Date
          </label>
          <input
            id="startDate"
            name="startDate"
            type="date"
            className="form-input"
            value={policy.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate" className="form-label">
            Expiration Date
          </label>
          <input
            id="expirationDate"
            name="expirationDate"
            type="date"
            className="form-input"
            value={policy.expirationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            name="amount"
            type="number"
            className="form-input"
            value={policy.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="propertyAddress" className="form-label">
            Property Address
          </label>
          <input
            id="propertyAddress"
            name="propertyAddress"
            className="form-input"
            value={policy.propertyAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="propertyArea" className="form-label">
            Property Area
          </label>
          <input
            id="propertyArea"
            name="propertyArea"
            className="form-input"
            value={policy.propertyArea}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Policy
        </button>
      </form>
    </div>
  )
}