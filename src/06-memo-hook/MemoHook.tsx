import { useCallback, useState } from "react"
import { MyTitle } from "./MyTitle"
import { MySubtitle } from "./MySubtitle"

export const MemoHook = () => {

  const [ title, setTitle ] = useState( 'Hello' )
  const [ subtitle, setSubtitle ] = useState( 'Pxndxs 🐼' )
  const callMyApi = useCallback( () => {
    console.log( 'llama a mi api ', subtitle )
  }, [] )

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1
        className="text-2xl font-thin text-white"
      >
        Memo Hook
      </h1>

      <MyTitle
        title={ title }
      />

      <MySubtitle
        subtitle={ subtitle }
        callMyApi={ callMyApi }
      />


      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={ () => setTitle( `Jajaja ${ new Date().getTime() }` ) }
      >
        Cambiar Titulo
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={ () => setSubtitle( 'XD' ) }
      >
        Cambiar Subtitulo
      </button>
    </div>
  )
}
