import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

export default function PolicyItem({ policy, onDelete }) {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{policy.type} Insurance</h3>
        <p>Start Date: {policy.startDate}</p>
        <p>Expiration Date: {policy.expirationDate}</p>
        <p>Amount: ${policy.amount}</p>
        <p>Property Address: {policy.propertyAddress}</p>
        <p>Property Area: {policy.propertyArea} sq ft</p>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Link to={`/update/${policy.id}`}>
          <Button variant="outline">Update</Button>
        </Link>
        <Button variant="destructive" onClick={() => onDelete(policy.id)}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}