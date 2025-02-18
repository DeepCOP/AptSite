import React from 'react'

function AboutBox({ heading, content, rotation, customStyle }) {
  const contentWithBreaks = content.replace(/\n/g, '<br />')

  return (
    <div className={`w-md min-w-md max-w-lg p-6 bg-white/10 border border-white backdrop-blur-[30px] rounded-[24px] transform ${rotation} ${customStyle}`}>
      <p style={{ fontFamily: "'Alfa Slab One', cursive" }} className='mb-4 text-4xl text-[#E16877]'>
        {heading}
      </p>
      <p dangerouslySetInnerHTML={{ __html: contentWithBreaks }} />
    </div>
  )
}

export default AboutBox
