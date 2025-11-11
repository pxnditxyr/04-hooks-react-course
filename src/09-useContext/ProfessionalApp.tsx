import {
  RouterProvider,
} from 'react-router'
import { router } from './router/app.router'
import { UserContextProvider } from './context/UserContext'

export const ProfessionalApp = () => {
  return (
    <UserContextProvider>
      <div className="bg-gradient flex flex-col gap-4">
        <RouterProvider router={ router } />
      </div>
    </UserContextProvider>
  )
}
