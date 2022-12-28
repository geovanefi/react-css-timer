import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { CountdownContainer, Separetor } from './styles'

export function CountDown() {
  const {
    activeCycle,
    activeCycleId,
    amountSecondPassed,
    markCycleFinished,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let intervalo: number

    if (activeCycle) {
      intervalo = setInterval(() => {
        const diferencaDeSegundos = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )
        if (diferencaDeSegundos >= totalSeconds) {
          markCycleFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(intervalo)
        } else {
          setSecondsPassed(diferencaDeSegundos)
        }
      }, 1000)
    }
    return () => {
      clearInterval(intervalo)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCycleFinished,
    setSecondsPassed,
  ])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separetor>:</Separetor>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
