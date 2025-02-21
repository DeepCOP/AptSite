import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className='w-[75%] bg-white/10 border border-white/26 backdrop-blur-[30px] rounded-[24px] mx-auto mt-8 z-50 p-8 flex flex-col justify-center'>
      <div className='flex justify-between items-center'>
        <Link href='/' className='text-[20px] font-normal text-white' style={{ fontFamily: "'Alfa Slab One', cursive" }}>
          APT. MEME COIN
        </Link>
        <div className='flex gap-[40px] font-normal'>
          <Link href='/about' className='text-white font-bold no-underline'>
            <p>ABOUT</p>
          </Link>
          <Link href='/tokenomics' className='text-white font-bold no-underline'>
            <p>TOKENOMICS</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
