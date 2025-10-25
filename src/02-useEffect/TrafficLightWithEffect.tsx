import { useTrafficLight } from "./useTrafficLight"


export const TrafficLightWithEffect = () => {

  const {
    countdown,
    countdownPercent,
    greenLight,
    yellowLight,
    redLight,
  } = useTrafficLight()


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h3 className="text-3xl font-bold text-white"> Countdown { countdown } </h3>

        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${ countdownPercent }%` }}
          >
          </div>
        </div>
        <div
          className={
            `w-32 h-32 ${ redLight } rounded-full`
          }
        ></div>
        <div
          className={
            `w-32 h-32 ${ yellowLight } rounded-full`
          }
        ></div>
        <div
          className={
            `w-32 h-32 ${ greenLight } rounded-full`
          }
        ></div>

      </div>
    </div>
  )
}
