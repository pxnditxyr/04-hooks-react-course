import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'sonner'
import { ProfessionalApp } from './09-useContext/ProfessionalApp'
// import { ClientInfo } from './08-use-suspense/ClientInfo'
// import { getUserAction } from './08-use-suspense/api/get-user.action'
// import { InstagromApp } from './07-useOptimistic/InstagromApp'
// import { MemoCounter } from './06-memo-hook/MemoCounter'
// import { MemoHook } from './06-memo-hook/MemoHook'
// import { ScrambleWordsReducer } from './05-use-reducer/ScrambleWordsReducer'
// import { ScrambleWords } from './05-use-reducer/ScrambleWords'
// import { TasksApp } from './05-use-reducer/TaskApp'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { PokemonPage } from './03-examples/PokemonPage'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { HooksApp } from './HooksApp'
// import { TrafficLight } from './01-useState/TrafficLight'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <ScrambleWordsReducer /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    {/* <Suspense fallback={<h1> Cargando </h1>}> */}
    {/*   <ClientInfo getUser={ getUserAction( 1000 ) }/> */}
    {/* </Suspense> */}
    <ProfessionalApp />
    <Toaster />
  </StrictMode>
)
