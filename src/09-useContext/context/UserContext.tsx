import { createContext, useEffect, useState } from "react"
import { users, type User } from "../data/user-mock.data"

type AuthStatus = 'checking' | 'logged' | 'not-logged'

interface Props {
  children: React.ReactNode
}
interface UserContextType {
  authStatus: AuthStatus
  user: User | null

  login: ( userId: number ) => boolean
  logout: () => void
}


export const UserContext = createContext<UserContextType>({} as UserContextType)


export const UserContextProvider = ( { children }: Props ) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>( 'checking' )
  const [user, setUser] = useState<User | null>(null)

  const handleLogin = ( userId: number ) => {
    const user = users.find( ( user ) => user.id === userId )
    if ( !user ) {
      console.log( `User not found ${ userId }` )
      setUser( null )
      setAuthStatus( 'not-logged' )
      return false
    }

    setUser( user )
    setAuthStatus( 'logged' )
    localStorage.setItem( 'userId', userId.toString() )

    return true
  }

  const handleLogout = () => {
    setAuthStatus( 'not-logged' )
    setUser( null )
    localStorage.removeItem( 'userId' )
  }

  useEffect( () => {

    const storeUserId = localStorage.getItem( 'userId' )
    if ( storeUserId ) {
      handleLogin( Number( storeUserId ) )
      return
    }

    handleLogout()
  }, [] )


  return (
    <UserContext value={{
      authStatus: authStatus,
      user: user,
      login: handleLogin,
      logout: handleLogout,
    }}>
      {children}
    </UserContext>
  )
}
