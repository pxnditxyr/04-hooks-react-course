import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { use } from "react"
import { Link } from "react-router"

export const AboutPage = () => {

  const { authStatus, logout } = use( UserContext )

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl font-bold text-white"> About Page </h1>

      <hr />

      <div className="flex gap-4">
        { authStatus === 'logged' && (
          <>
            <Link
              to="/profile"
              className="text-lg font-medium text-white hover:text-yellow-500 hover:underline"
            >
              Perfil
            </Link>
            <Button
              variant="destructive"
              onClick={ handleLogout }
            >
              Logout
            </Button>
          </>
        ) }

        { authStatus === 'not-logged' && (
          <Link
            to="/login"
            className="text-lg font-medium text-white hover:text-yellow-500 hover:underline"
          >
            Login
          </Link>
        ) }
      </div>
    </div>
  )
}
