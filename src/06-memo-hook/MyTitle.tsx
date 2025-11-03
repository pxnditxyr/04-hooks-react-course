import { memo } from "react"

interface Props {
  title: string
}

export const MyTitle = memo(  ( { title }: Props ) => {

  console.log( 'MyTitle Render' )

  return (
    <h1 className="text-3xl font-thin text-white">
      { `${ title }` }
    </h1>
  )
} )
