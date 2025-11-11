import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { use } from "react"
import { useNavigate } from "react-router"

export const ProfilePage = () => {


  const { logout, user } = use( UserContext )
  const navigate = useNavigate()

  const handleLogout = () => {

    logout()
    navigate( '/login' )


  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl font-bold text-white"> Profile Page </h1>
      <hr />

      <pre className="my-4 overflow-x-auto max-w-[500px]">
        {JSON.stringify(user, null, 2)}
      </pre>

      <Button
        variant="destructive"
        className=""
        onClick={ handleLogout }
      >
        Logout
      </Button>
    </div>
  )
}
