import type { Metadata } from 'next';
import './globals.css';
import { clashDisplay } from '@/utils/font.config';
import Image from 'next/image';
import { Logo } from '@Assets/images/image.barrel';
import { Instagram, Youtube, Tiktok, X } from '@Assets/svg/svg.barrel';
import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export const metadata: Metadata = {
  title: '4PULENZ',
  description: '4pulenz',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${clashDisplay.className}`}>
        <div className='sticky w-full top-0 flex justify-between items-center px-10 py-2 z-20'>
          <Link href={'/'}>
            <Image alt='Logo' src={Logo} width={60} height={60} />
          </Link>
          <div className='flex items-center gap-5'>
            <Link className='z-10' href={'/gallery'}>
              Services
            </Link>
            <Link className='z-10' href={'/gallery'}>
              Gallery
            </Link>
            <Link className='z-10' href={'/contact'}>
              Contact
            </Link>
            <Popover>
              <PopoverTrigger className='py-2 px-3 animate-lavender-dream rounded'>Contact</PopoverTrigger>
              <PopoverContent className='bg-[#1a1a1a] border-0 w-[200px] text-white'>
                <div className='flex flex-col gap-5'>
                  <a href='mailto:4pulenz@gmail.com'>4pulenz@gmail.com</a>
                  <a href='tel:9142303744'> 914 - 230 - 3744</a>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        {children}

        <footer className='flex flex-wrap items-center justify-center py-5 gap-4'>
          <h1>Stay Connected</h1>
          <div className='flex items-center gap-5'>
            <Link href={'https://www.youtube.com/@4lexjandro'} target='_blank'>
              <Image alt='Youtube' src={Youtube} width={20} height={20} />
            </Link>
            <Link href={'https://x.com/4lexjandro_/'} target='_blank'>
              <Image alt='X' src={X} width={20} height={20} />
            </Link>
            <Link href={'https://www.instagram.com/4lexjandro_/'} target='_blank'>
              <Image alt='Instagram' src={Instagram} width={20} height={20} />
            </Link>
            <Link href={'https://www.tiktok.com/@4pulenz'} target='_blank'>
              <Image alt='Tiktok' src={Tiktok} width={20} height={20} />
            </Link>
          </div>
        </footer>           
      </body>
    </html>
  );
}
