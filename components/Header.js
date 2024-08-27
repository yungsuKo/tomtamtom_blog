import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DarkMode from './DarkMode';
import { Button } from './ui/button';

function ProgressBar({ scrollP }) {
  return (
    <div className="h-2 w-full bg-gray-200">
      <div className={`bg-blue-700 h-full`} style={{ width: scrollP }}></div>
    </div>
  );
}

export default function Header() {
  const [isScroll, setisScrollDirection] = useState(false);
  const [scrollP, setScrollP] = useState('0');

  useEffect(() => {
    const windowH =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const updateScrollDirection = () => {
      const direction = scrollY > 0 ? true : false;
      if (direction !== isScroll) {
        setisScrollDirection(direction);
      }
      setScrollP(`${(window.scrollY / windowH) * 100}%`);
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollP]);

  return (
    <div
      className={`top-0 sticky bg-white dark:bg-black transition-all ${
        isScroll ? 'border-b-2 border-gray-400 duration-1000' : ''
      } z-50`}
    >
      <div className="flex px-4 py-4 mx-auto md:px-12">
        <Link href={'/'}>
          <div className="flex flex-col items-center relative">
            <p className="font-extrabold">TOMTAMTOM</p>
            <p className="font-thin text-xs">Growth Factory</p>
          </div>
        </Link>
        <div className="flex-1 flex justify-end gap-2 md:gap-4">
          <div className="flex items-center">
            <Button asChild className="dark:bg-slate-700">
              <Link href={'/'}>Blogs</Link>
            </Button>
          </div>
          <div className="flex items-center">
            <Button className="dark:bg-slate-700">
              <Link href={'/about'}>About</Link>
            </Button>
          </div>
          <div className="flex items-center">
            <Button className="dark:bg-slate-700">
              <Link href={'/functions'}>Functions</Link>
            </Button>
          </div>
        </div>
        <div className="ml-4 flex items-center">
          <DarkMode className="" />
        </div>
      </div>
      <ProgressBar scrollP={scrollP} />
    </div>
  );
}
