import Image from 'next/image'
import React from 'react'

function WhyOurCoin({ heading, content, rotation }) {
  return (
    <div className={`w-md min-w-md max-w-lg p-6 bg-white/10 border border-white backdrop-blur-[30px] rounded-[24px] transform ${rotation}`}>
      <p style={{ fontFamily: "'Alfa Slab One', cursive" }} className='mb-4 text-4xl text-[#E16877] flex flex-col items-center justify-center p-0'>
        {heading}
        <span>
          <Image className='rotate-3' src={'/images/png/swiggly_lines.png'} width={0} height={0} alt='about' style={{ width: 'auto', height: 'auto' }} sizes='100vw' />
        </span>
      </p>
      <p>{content}</p>
    </div>
  )
}

export default WhyOurCoin
