import { use } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router"

interface Props {
  element: React.ReactNode
}

export const PrivateRoute = ( { element }: Props ) => {

  const { authStatus } = use( UserContext )

  if ( authStatus === 'checking' ) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-8">
        <h1 className="text-4xl font-bold text-white"> Loading </h1>
        <hr />
        <div className="animate-pulse flex flex-col gap-4">
          <div className="h-4 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
          <div className="h-4 w-32 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
          <div className="h-4 w-32 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
        </div>
      </div>
    )
  }

  if ( authStatus === 'logged' ) {
    return element
  }

  return <Navigate to="/login" replace/>
}
