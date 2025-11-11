import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"

export const LoginPage = () => {

  const {
    login
  } = useContext( UserContext )

  const navigation = useNavigate()

  const [userId, setUserId] = useState('')

  const handleSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault()

    console.log({ userId })

    const result = login( Number( userId ) )

    if ( !result ) {
      toast.error( 'User not found' )
      return
    }

    navigation( '/profile' )
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen gap-8"
    >
      <h1 className="text-4xl font-bold text-white"> Login Page </h1>

      <hr />

      <form
        className="flex flex-col gap-2 my-10"
        onSubmit={ handleSubmit }
      >
        <Input
          type="number"
          placeholder="User ID"
          value={ userId }
          onChange={ ( event ) => setUserId( event.target.value ) }
        />

        <Button>
          Login
        </Button>

      </form>

      <Link to="/">
        <Button
          variant="ghost"
          className=""
        >
          Volver
        </Button>
      </Link>
    </div>
  )
}
