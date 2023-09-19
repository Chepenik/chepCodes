"use client"

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import chepcodes from 'public/chepcode.png';

export default function Header() {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={chepcodes} alt="ChepCodes" className="rounded-full" width={150} height={37.5}/>
        
        <nav className="space-x-6 hidden md:block">
          <a href="https://strike.me/chepenik/" className="hover:text-green-500" target="_blank">v4v</a>
          <a href="https://chep.creator-spring.com/" className="hover:text-orange-500" target="_blank">Merch</a>
          <a href="/memes" className="hover:text-purple-500" target="_blank">Memes</a>
        </nav>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="block md:hidden">
            <HamburgerMenuIcon className="w-7 h-7" /> 
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="bg-blue-500 p-4 shadow-xl rounded-md">
              <DropdownMenu.Item className="text-white hover:bg-blue-600 rounded px-2 py-1">
                <a href="https://strike.me/chepenik/" target="_blank">v4v</a>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="text-white hover:bg-blue-600 rounded px-2 py-1">
                <a href="https://chep.creator-spring.com/" target="_blank">Merch</a>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="text-white hover:bg-blue-600 rounded px-2 py-1">
                <a href="/memes" target="_blank">Memes</a>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </header>
  );
}