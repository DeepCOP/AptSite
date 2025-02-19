import React from 'react'
import PieChart from '../components/PieChart'

function page() {
  return (
    <div>
      <section className='font-normal text-white text-center flex justify-center flex-col items-center'>
        <div className='text-5xl my-[150px]'>
          <p>
            <span className='text-[#E16877]' style={{ fontFamily: "'Alfa Slab One', cursive" }}>
              Tokenomics
            </span>
          </p>
        </div>
        <PieChart />
        <div className='pt-[20px] my-[150px] text-[24px] font-normal text-white w-[50%]' style={{ fontFamily: 'Aldrich, serif' }}>
          <p>
            APT Meme Coin is 99% community-owned, built on passion, rhythm, and unstoppable energy—just like the ROSÉ that inspired it. Just pure community power driving this movement. Only 1% is reserved for development.
            <br />
            <br />
            &quot;<span className='italic'>We ain’t stopping, we just go&quot;</span>— and that’s exactly what APT Coin stands for. Powered by music lovers, crypto believers, and dreamers, this coin is more than just a token—it’s a vibe, a movement,
            and a celebration of Web3 culture.
            <br />
            <br />
            Join the revolution, &quot;feel the bass, let it flow,&quot; and let’s dance into the future of decentralized fun! 🚀
          </p>
        </div>
      </section>
    </div>
  )
}

export default page
