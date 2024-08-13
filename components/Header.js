import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';

export default function Header() {
  return (
    <div className="top-0 sticky mt-4">
      <div className="flex border-gray-100 border-2 p-2 rounded-xl  max-w-3xl  mx-auto">
        <Menubar className="flex justify-between px-4 gap-4 border-none">
          <MenubarMenu>
            <MenubarTrigger className="hover:cursor-pointer bg-gray-800 rounded-l">
              File
            </MenubarTrigger>
            <MenubarContent className="bg-black">
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="hover:cursor-pointer bg-gray-800 rounded-l">
              File
            </MenubarTrigger>
            <MenubarContent className="bg-black">
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="hover:cursor-pointer bg-gray-800 rounded-l">
              File
            </MenubarTrigger>
            <MenubarContent className="bg-black">
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <div className="flex-1 bg-white"></div>
      </div>
    </div>
  );
}
