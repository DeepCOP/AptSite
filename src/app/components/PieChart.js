'use client'

import { useEffect, useRef, useState } from 'react'

const PieChart = () => {
  const canvasRef = useRef(null)
  const [tooltip, setTooltip] = useState(null)

  const data = [99, 1] // Only community-owned (100%)
  const colors = ['#FF6384', '#FFCC66'] // Green for community-owned
  const labels = ['Community Owned', 'Development']

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const radius = canvas.width / 2
    let startAngle = 0

    const drawPieChart = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      data.forEach((slice, index) => {
        const sliceAngle = (slice / 100) * (Math.PI * 2) // Convert percentage to angle
        ctx.beginPath()
        ctx.arc(radius, radius, radius, startAngle, startAngle + sliceAngle)
        ctx.lineTo(radius, radius)
        ctx.fillStyle = colors[index]
        ctx.fill()
        startAngle += sliceAngle
      })
    }

    // const showTooltip = (e) => {
    //   const mouseX = e.offsetX
    //   const mouseY = e.offsetY

    //   setTooltip({
    //     content: 'Community Owned', // Always show this since there's only one slice
    //     x: mouseX,
    //     y: mouseY,
    //   })
    // }

    const hideTooltip = () => {
      setTooltip(null) // Hide the tooltip when the mouse leaves
    }

    // canvas.addEventListener('mousemove', showTooltip)
    // canvas.addEventListener('mouseleave', hideTooltip)

    drawPieChart()

    // return () => {
    //   canvas.removeEventListener('mousemove', showTooltip)
    // }
  }, [])

  return (
    <div className='w-full max-w-full flex justify-center items-center flex-col'>
      <div className='relative'>
        <canvas ref={canvasRef} width='300' height='300' className='rounded-lg' />
        {tooltip && tooltip.content && (
          <div
            className='absolute'
            style={{
              left: tooltip.x + 10 + 'px',
              top: tooltip.y + 10 + 'px',
              background: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              padding: '5px',
              borderRadius: '3px',
              pointerEvents: 'none',
            }}
          >
            {tooltip.content}
          </div>
        )}
      </div>

      {/* Legend below the chart */}
      <div className='mt-4 flex justify-center gap-20'>
        {labels.map((label, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <div
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: colors[index],
                marginRight: '10px',
              }}
            ></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PieChart
