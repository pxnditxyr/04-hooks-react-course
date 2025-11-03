import { useCounter } from "@/03-examples/useCounter"
import { useMemo } from "react"

const heavyStuff = ( iterationNumber: number ) => {
  console.time( 'Heavy_Stuff_started' )

  for ( let index = 0; index < iterationNumber; index++ ) {
    console.log( 'x go' )
  }

  console.timeEnd( 'Heavy_Stuff_started' )
  return `${ iterationNumber } done`
}

export const MemoCounter = () => {

  const { count, increment } = useCounter( 40_000 )
  const { count: count2, increment: increment2 } = useCounter( 50_000 )

  const myHeavyValue = useMemo( () => heavyStuff( count ), [ count ] )

  return (
    <div className="bg-gradient flex flex-col gap-4">

      <h1
        className="text-2xl font-bold"
      > Memo Counter { myHeavyValue }</h1>
      <hr />

      <div>
        { count }
      </div>
      <div>
        { count2 }
      </div>

      <button
        className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
        onClick={ increment }
      >
        +1
      </button>

      <button
        className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-pointer"
        onClick={ increment2 }
      >
        +1
      </button>



    </div>
  )
}
