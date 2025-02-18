import Image from 'next/image'
import AboutBox from '../components/AboutBox'
import WhyOurCoin from '../components/WhyOurCoin'

export default function About() {
  return (
    <>
      <section className='mt-[150px] font-normal text-white text-center'>
        <div className='text-5xl mb-4'>
          <p>
            About
            <br />
            <span className='text-[#E16877]' style={{ fontFamily: "'Alfa Slab One', cursive" }}>
              APT Coins
            </span>
          </p>
        </div>
        <div className='text-white text-[24px] flex w-full justify-center items-center mt-[400px] relative'>
          <Image width={0} height={0} src='/images/png/both_guitar.png' alt='about' style={{ width: 'auto', height: 'auto' }} sizes='100vw' />
          <AboutBox
            heading={'Inspiration 🚀'}
            content={'APT Song is more than just a tune—it’s a vibe! 🎵\n\nTransforming its energy into a meme coin fueled by fun and innovation 🔥'}
            rotation={'-rotate-[8deg]'}
            customStyle={'absolute top-[-40%] left-[15%]'}
          />
          <AboutBox
            heading={'Vision 🌐'}
            content={'Build a community-driven ecosystem where music, and blockchain 🎨\n\nRedefine the boundaries of what a meme coin can achieve 🤝'}
            rotation={'rotate-[8deg]'}
            customStyle={'absolute top-[-50%] right-[15%]'}
          />
          <AboutBox
            heading={'Why APT Song? 🎶'}
            content={'APT Song resonates with the crypto community ⚡\nIt inspires creativity, connection, and a shared passion for vibes and gains. 💡'}
            rotation={'rotate-[8deg]'}
            customStyle={'absolute bottom-[-40%] left-[10%]'}
          />
        </div>

        <div className='text-5xl mb-8 mt-[400px]'>
          <p>Why our Meme coin 🤝</p>
        </div>
        <div className='text-white text-[24px] flex w-full justify-center items-center gap-6 mb-8'>
          <WhyOurCoin heading={'Fuel for Creativity'} content={'APT Song sparks innovation and unique ideas'} rotation={'rotate-[4deg]'} />
          <WhyOurCoin heading={'Big Potential, Big Gains'} content={'Join us for growth and moonshot potential'} rotation={'-rotate-[4deg]'} />
        </div>
      </section>
    </>
  )
}
