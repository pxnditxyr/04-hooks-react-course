import { useEffect, useState } from "react"

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
}

const countdownByLight = {
  red: 10,
  yellow: 5,
  green: 10,
}

type Light = keyof typeof colors


export const useTrafficLight = ( initialLight: Light = 'red' ) => {

  const [ light, setLight ] = useState<Light>( initialLight )
  const [ countdown, setCountdown ] = useState( countdownByLight[ initialLight ] )

  useEffect( () => {
    if ( countdown === 0 ) return
    const interval = setInterval( () => {
      setCountdown( prev => prev - 1 )
    }, 1000 )
    return () => clearInterval( interval )
  }, [ countdown ])

  useEffect( () => {
    if ( countdown > 0 ) return

    if ( light === 'red' ) {
      setCountdown( countdownByLight[ 'green' ] )
      setLight('green')
      return
    }
    if ( light === 'yellow' ) {
      setCountdown( countdownByLight[ 'red' ] )
      setLight('red')
      return
    }
    if ( light === 'green' ) {
      setCountdown( countdownByLight[ 'yellow' ] )
      setLight('yellow')
      return
    }
  }, [ light, countdown ])

  return {
    light,
    countdown,
    countdownPercent: ( countdown / countdownByLight[ light ] ) * 100,
    greenLight: light === 'green' ? colors.green : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
    redLight: light === 'red' ? colors.red : 'bg-gray-500',
    countdownByLight,
    colors,
  }
}
