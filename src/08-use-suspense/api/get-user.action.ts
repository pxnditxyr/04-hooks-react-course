

export interface User {
  id: number
  name: string
  location: string
  role: string
}

 export const getUserAction = async ( id: number ): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return {
    id: id,
    name: 'Pxndxs',
    location: 'La Paz, Bolivia',
    role: 'admin',
  }
}
