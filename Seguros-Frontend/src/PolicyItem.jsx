import React from 'react'
import { Link } from 'react-router-dom'

export default function PolicyItem({ policy, onDelete }) {
  return (
    <div className="card">
      <h3>{policy.type} Insurance</h3>
      <p>Start Date: {policy.startDate}</p>
      <p>Expiration Date: {policy.expirationDate}</p>
      <p>Amount: ${policy.amount}</p>
      <p>Property Address: {policy.propertyAddress}</p>
      <p>Property Area: {policy.propertyArea} sq ft</p>
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