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
import React, { useCallback, useEffect, useRef, useState } from 'react';
import DarkMode from './DarkMode';

export default function Header() {
  const [isScroll, setisScrollDirection] = useState(false);
  useEffect(() => {
    const updateScrollDirection = () => {
      const direction = scrollY > 0 ? true : false;
      if (direction !== isScroll) {
        setisScrollDirection(direction);
      }
    };
    window.addEventListener('scroll', updateScrollDirection);
    console.log(isScroll);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [isScroll]);

  return (
    <div
      className={`top-0 sticky bg-white dark:bg-black transition-all ${
        isScroll ? 'border-b-4 border-gray-400 duration-1000' : ''
      }`}
    >
      <div className="flex px-12 py-4  mx-auto ">
        <Link href={'/'}>
          <div className="flex flex-col items-center relative">
            <p className="font-extrabold">TOMTAMTOM</p>
            <p className="font-thin text-xs">Growth Factory</p>
          </div>
        </Link>
        <div className="flex-1 flex justify-end gap-8">
          <div className="flex items-center">aaa</div>
          <div className="flex items-center">bbb</div>
          <div className="flex items-center">ccc</div>
        </div>
        <div className="ml-8 flex items-center">
          <DarkMode className="" />
        </div>
      </div>
    </div>
  );
}
