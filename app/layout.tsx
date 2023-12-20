import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import couch from '@/assets/couch.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Virtual Room Forge',
  description: 'AI Room Generate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + "bg-[#17181c] flex flex-col min-h-screen"}>
        <header className='h-full'>
          <div className='container border-b p-5 mx-auto flex items-center justify-between'>
            <Link href={"/"} className='flex items-center gap-3'>
              <Image src={couch} alt="VRF" width={100} height={100} />
            </Link>
            {/* User Info */}
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
