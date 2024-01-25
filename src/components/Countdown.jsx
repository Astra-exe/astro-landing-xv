import { useRemainingTime } from '@/hooks/useRemainingTime'

const TARGET_DATE_IN_MS = new Date('2024-04-27 17:00:00').getTime()
export default function Countdown() {
  const { days, hours, minutes, seconds } = useRemainingTime(TARGET_DATE_IN_MS)
  return (
    <article className='grid grid-cols-2 md:grid-cols-4 gap-5'>
      <div className='flex flex-col items-center'>
        <span className='text-3xl md:text-4xl font-light'>{days}</span>
        <span>dias</span>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-3xl md:text-4xl font-light'>{hours}</span>
        <span>horas</span>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-3xl md:text-4xl font-light'>{minutes}</span>
        <span>minutos</span>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-3xl md:text-4xl font-light'>{seconds}</span>
        <span>segundos</span>
      </div>
    </article>
  )
}
