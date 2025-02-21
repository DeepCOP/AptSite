'use client'

import { useEffect, useRef, useState } from 'react'

const PieChart = () => {
  const canvasRef = useRef(null)
  const [tooltip, setTooltip] = useState(null)

  const data = [99, 1] // Only community-owned (100%)
  const colors = ['#FF6384', '#FFCC66'] // Green for community-owned
  const labels = ['Community Owned', 'Development']
  const MIN_LABEL_THRESHOLD = 2 // Hide labels for slices smaller than 2%

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const radius = Math.min(canvas.width, canvas.height) / 2
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // ✅ Find Largest Slice and Adjust Start Angle
    let largestIndex = data.indexOf(Math.max(...data)) // Get largest slice index
    let startAngle = -Math.PI / 2 + (data[largestIndex] / 100) * Math.PI // Adjust angle to center largest slice

    const drawPieChart = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      data.forEach((slice, index) => {
        const sliceAngle = (slice / 100) * (Math.PI * 2) // Convert percentage to angle
        const midAngle = startAngle + sliceAngle / 2 // Find the middle of the slice

        // ✅ Draw Pie Slice
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
        ctx.closePath()
        ctx.fillStyle = colors[index] || "gray"
        ctx.fill()

        // ✅ Only Show Labels for Slices ≥ 2%
        if (slice >= MIN_LABEL_THRESHOLD) {
          const labelX = centerX + Math.cos(midAngle) * (radius * 0.6)
          const labelY = centerY + Math.sin(midAngle) * (radius * 0.6)
          ctx.fillStyle = "white"
          ctx.font = '16px Aldrich, sans-serif'
          ctx.textAlign = "center"
          ctx.textBaseline = "middle"
          ctx.fillText(`${slice}%`, labelX, labelY)
        }

        startAngle += sliceAngle // Move to next slice
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
      </div>

      {/* Legend below the chart */}
      <div className='mt-4 flex justify-center gap-10'>
        {labels.map((label, index) => (
          <div key={index} className='flex items-center mb-2'>
            <div
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: colors[index],
                marginRight: '10px',
              }}
            ></div>
            <span style={{ fontFamily: 'Aldrich, sans-serif' }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PieChart
