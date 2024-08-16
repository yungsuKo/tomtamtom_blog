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

export default function Header() {
  return (
    <div className="top-0 sticky border-b-2 border-gray-400 bg-black">
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
