'use client'

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

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
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Update Insurance Policy</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Input id="type" name="type" value={policy.type} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              name="startDate"
              type="date"
              value={policy.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="expirationDate">Expiration Date</Label>
            <Input
              id="expirationDate"
              name="expirationDate"
              type="date"
              value={policy.expirationDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              value={policy.amount}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="propertyAddress">Property Address</Label>
            <Input
              id="propertyAddress"
              name="propertyAddress"
              value={policy.propertyAddress}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="propertyArea">Property Area</Label>
            <Input
              id="propertyArea"
              name="propertyArea"
              value={policy.propertyArea}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Update Policy
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}