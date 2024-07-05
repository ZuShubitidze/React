import { useEffect, useState } from "react"

const breakpoints = {
  mb: '576',
  tb: '780',
  pc: '1200'
}

const deviceHandler = () => {
  const windowWidth = window.innerWidth;

  switch (true) {
    case windowWidth <= parseInt(breakpoints.mb):
      return 'Mobile'
    case windowWidth <= parseInt(breakpoints.tb):
      return 'Tablet'
    case windowWidth <= parseInt(breakpoints.pc):
      return 'PC'
    default:
      return 'Large Screen'
  }
}

useDetectDevice = () => {
  const [device, setDevice] = useState(() => deviceHandler())

  // useEffect(() => {

  // })
  return device
}
