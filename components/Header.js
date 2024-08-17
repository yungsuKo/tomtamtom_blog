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

export default function Header() {
  const [scrollDirection, setscrollDirection] = useState('');
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      console.log(scrollY);
      if (direction !== scrollDirection) {
        setscrollDirection(direction);
      }
    };
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return (
    <div className="top-0 sticky border-gray-400 bg-black">
      <div className="flex px-12 py-4  mx-auto ">
        <Link href={'/'}>
          <div className="flex items-center">로고</div>
        </Link>
        <div className="flex-1 flex justify-end gap-8">
          <div>aaa</div>
          <div>bbb</div>
          <div>ccc</div>
        </div>
      </div>
    </div>
  );
}
