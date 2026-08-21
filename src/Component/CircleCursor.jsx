import { useEffect, useState } from 'react'

const CircleCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const handlePointerMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return (
    <span
      className="circle-cursor"
      aria-hidden="true"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    />
  )
}

export default CircleCursor
