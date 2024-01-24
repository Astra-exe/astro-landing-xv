import {useEffect, useState} from 'react'

const localeDate = (date) => {
	const d = date || new Date()
	return new Date(d.toLocaleString('en-US'))
}

const alwaysPositive = (number) => Math.max(0, number)
const fillZerosTime = (time) => {
  return Object.keys(time).reduce((timeFormatedObj, key) => {
    const valueFormated = time[key].toString().padStart(2, '0')
    timeFormatedObj[key] = valueFormated;
    return timeFormatedObj
  }, {})
}

function getRemaingTime({targetDateInMs}) {
  const currentTimeInMs = localeDate().getTime()
  const difference = targetDateInMs - currentTimeInMs

  // Conversion to days, hous, minutes, seconds
  const MS_IN_DAY = 1000 * 60 * 60 * 24;
  const MS_IN_HR = 1000 * 60 * 60;
  const MS_IN_MIN = 1000 * 60;
  const MS_IN_SEC = 1000;

  const days = Math.floor(difference / MS_IN_DAY)
  const hours = Math.floor((difference % MS_IN_DAY) / MS_IN_HR)
  const minutes = Math.floor((difference % MS_IN_HR) / MS_IN_MIN)
  const seconds = Math.floor((difference % MS_IN_MIN) / MS_IN_SEC)

  return {
    days: alwaysPositive(days),
    hours: alwaysPositive(hours),
    minutes: alwaysPositive(minutes),
    seconds: alwaysPositive(seconds)
  }
}

export function useRemainingTime(targetDate) {
  const [remainingTime, setRemainingTime] = useState(getRemaingTime({targetDateInMs: targetDate}))

  const {days, hours, minutes, seconds} = remainingTime;
  const isEnded = days === 0 && hours === 0  && minutes === 0 && seconds === 0

  useEffect(() => {
    const intervalId = setInterval(() => {
        setRemainingTime(getRemaingTime({targetDateInMs: targetDate}))
    }, 1000);

    if(isEnded) clearInterval(intervalId)

    return () => clearInterval(intervalId)
  }, [remainingTime])


  const formatedRemainingTime = fillZerosTime(remainingTime)
  return {...formatedRemainingTime}
}