import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'APT Meme Coin - The Future of Fun Crypto',
  description: 'Join the APT Meme Coin revolution! A fun, community-driven cryptocurrency built for the next generation of investors and meme lovers.',
  keywords: 'APT Meme Coin, Crypto, Meme Coin, Blockchain, Web3, Cryptocurrency',
  author: 'APT Meme Coin Team',
  icons: { icon: '/apt-coin.ico', shortcut: '/apt-coin.ico', apple: '/apt-coin.ico' },
  openGraph: {
    title: 'APT Meme Coin - The Future of Fun Crypto',
    description: 'Discover APT Meme Coin, a revolutionary community-driven cryptocurrency on the blockchain. Join the movement today!',
    url: 'https://apateu.art/',
    type: 'website',
    image: '/apt-coin.ico', // Update with actual image URL
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aptmemecoin', // Update with actual Twitter handle
    title: 'APT Meme Coin - The Future of Fun Crypto',
    description: 'A fun, community-driven cryptocurrency built for the next generation of investors and meme lovers.',
    image: '/apt-coin.ico', // Update with actual image URL
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='mainDiv'>
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
