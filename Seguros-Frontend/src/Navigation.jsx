import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function Navigation({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Insurance Policy Manager
        </Link>
        {isLoggedIn ? (
          <div className="space-x-4">
            <Link to="/create">
              <Button variant="secondary">Create Policy</Button>
            </Link>
            <Link to="/policies">
              <Button variant="secondary">View Policies</Button>
            </Link>
            <Button onClick={handleLogout} variant="destructive">
              Logout
            </Button>
          </div>
        ) : (
          <Link to="/login">
            <Button variant="secondary">Login</Button>
          </Link>
        )}
      </div>
    </nav>
  )
}