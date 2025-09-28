import './globals.css';
import { Mail, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import { clashDisplay } from '@/utils/font.config';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Youtube, Tiktok, X } from '@Assets/svg/svg.barrel';

export const metadata: Metadata = {
  title: '4PULENZ',
  description: '4pulenz',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={clashDisplay.className}>
        <Navbar />
        {children}

        <footer className='flex flex-col items-center justify-center py-2 gap-4 text-white bg-black/80'>
          <h1 className='text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500 drop-shadow-[0_0_8px_rgba(255,0,128,0.7)]'>
            Stay Connected
          </h1>

          <div className='flex flex-wrap items-center justify-center gap-6'>
            {/* Social Icons */}
            <div className='flex items-center gap-4'>
              <Link href='https://www.youtube.com/@4pulenz' target='_blank'>
                <Image
                  alt='Youtube'
                  src={Youtube}
                  width={20}
                  height={20}
                  className='transition duration-200 hover:brightness-125 hover:scale-110 hover:drop-shadow-md [filter:invert(27%) sepia(85%) saturate(400%) hue-rotate(280deg) brightness(100%) contrast(105%)]'
                />
              </Link>
              <Link href='https://x.com/4lexjandro_/' target='_blank'>
                <Image
                  alt='X'
                  src={X}
                  width={20}
                  height={20}
                  className='transition duration-200 hover:brightness-125 hover:scale-110 hover:drop-shadow-md [filter:invert(27%) sepia(85%) saturate(400%) hue-rotate(280deg) brightness(100%) contrast(105%)]'
                />
              </Link>
              <Link href='https://www.instagram.com/4pulenz/' target='_blank'>
                <Image
                  alt='Instagram'
                  src={Instagram}
                  width={20}
                  height={20}
                  className='transition duration-200 hover:brightness-125 hover:scale-110 hover:drop-shadow-md [filter:invert(27%) sepia(85%) saturate(400%) hue-rotate(280deg) brightness(100%) contrast(105%)]'
                />
              </Link>
              <Link href='https://www.tiktok.com/@4pulenz' target='_blank'>
                <Image
                  alt='Tiktok'
                  src={Tiktok}
                  width={20}
                  height={20}
                  className='transition duration-200 hover:brightness-125 hover:scale-110 hover:drop-shadow-md [filter:invert(27%) sepia(85%) saturate(400%) hue-rotate(280deg) brightness(100%) contrast(105%)]'
                />
              </Link>

              {/* Contact Info */}
              <a href='mailto:info@4pulenz.com'>
                <Mail
                  size={20}
                  className='transition duration-200 hover:brightness-125 hover:scale-110 hover:drop-shadow-md [filter:invert(27%) sepia(85%) saturate(400%) hue-rotate(280deg) brightness(100%) contrast(105%)]'
                />
              </a>
              <a href='tel:9142303744'>
                <Phone
                  size={20}
                  className='transition duration-200 hover:brightness-125 hover:scale-110 hover:drop-shadow-md [filter:invert(27%) sepia(85%) saturate(400%) hue-rotate(280deg) brightness(100%) contrast(105%)]'
                />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}