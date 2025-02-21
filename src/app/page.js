import Image from 'next/image'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <section className='mt-[150px] font-normal text-white text-center' style={{ fontFamily: 'Aldrich, serif' }}>
        <div className='text-5xl mb-4'>
          <p>
            Where Music Meets{' '}
            <span className='text-[#E16877]' style={{ fontFamily: "'Alfa Slab One', cursive" }}>
              Crypto
            </span>
          </p>
          <p> Dance to the Beat of </p>
          <p className='text-[#E16877]' style={{ fontFamily: "'Alfa Slab One', cursive" }}>
            APT. Coins
          </p>
        </div>
        <div className='leading-[20px]'>
          <p>The next generation of meme coins!!</p>
        </div>
        <div className='buyAndJoin flex justify-center items-center mt-10 gap-5'>
          <a 
            href="https://app.meteora.ag/dlmm/GxTcvEkNHwMg5Wa3KdFr7hoheeA77mFWxEtQ2BHEgpdd" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className='flex justify-center items-center gap-5 py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 font-bold rounded-lg cursor-pointer select-none transform hover:scale-105 transition-transform duration-200 active:translate-y-2 active:[box-shadow:0_0px_0_0_#00FFAE,0_0px_0_0_#1b70f841] active:border-b-[0px] [box-shadow:0_5px_0_0_#00FFAE,0_10px_0_0_#1b70f841] border-b-[0.5px] border-black -rotate-6'>
              <span className='flex flex-col justify-center items-center h-full font-bold text-lg text-black'>Buy Now!!</span>
              <span role='img' aria-label='rocket'>
                🚀
              </span>
            </button>
          </a>
        </div>
        <div className='absolute right-[-2%] top-[5%] z-[-1]'>
          <Image src='/images/png/both 1.png' width={225} height={210} alt='png 1' className='rotate-12' />
        </div>
        <div className='absolute left-[-2%] top-[10%] z-[-1]'>
          <Image src='/images/png/both 2.png' width={225} height={210} alt='png 1' className='rotate-12' />
        </div>
        <div className='absolute right-[18%] top-[50%] z-[-1]'>
          <Image src='/images/png/both 3.png' width={200} height={175} alt='png 2' className='rotate-12' />
        </div>
      </section>

      <section className='text-center mt-24'>
        <p style={{ color: 'rgb(225, 104, 119)', fontFamily: 'Aldrich, serif', fontSize: '20px', paddingBottom: '15px' }}>Our Story</p>
        <div className='text-white text-[40px] font-bold' style={{ fontFamily: 'Alfa Slab One, cursive' }}>
          <h4>About APT. Coins</h4>
        </div>
        <div className='pt-[20px] mt-[20px] text-[24px] font-normal text-white' style={{ fontFamily: 'Aldrich, serif' }}>
          <p>Grooving out of the world of beats and blockchain, APT. Coin</p>
          <p>was born to bring music, memes, and magic together! 🎵✨</p>
          <br />
          <p>We’re not just riding the crypto wave — we’re dancing on it! </p>
          <p>Backed by an unstoppable community of music lovers, crypto</p>
          <p>enthusiasts, and dreamers, APT. Coin is here to make the</p>
          <p>web3 world a whole lot more fun. Join the party, vibe with us,</p>
          <p>and let’s hit the right notes together!</p>
        </div>
        <div className='flex justify-center items-center my-[50px]'>
          <Image width={0} height={0} src='/images/png/abouot_image.png' alt='about' style={{ width: 'auto', height: 'auto' }} sizes='100vw' />
        </div>
      </section>
    </>
  )
}
