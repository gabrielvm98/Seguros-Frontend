import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import PolicyItem from './PolicyItem'

export default function PolicyList() {
  const [policies, setPolicies] = useState([])

  useEffect(() => {
    fetchPolicies()
  }, [])

  const fetchPolicies = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.get('/api/policies')
      setPolicies(response.data)
    } catch (error) {
      console.error('Failed to fetch policies:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      // Replace with your actual API endpoint
      await axios.delete(`/api/policies/${id}`)
      fetchPolicies()
    } catch (error) {
      console.error('Failed to delete policy:', error)
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Insurance Policies</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {policies.map((policy) => (
            <PolicyItem key={policy.id} policy={policy} onDelete={handleDelete} />
          ))}
        </div>
        <div className="mt-4">
          <Link to="/create">
            <Button>Create New Policy</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}