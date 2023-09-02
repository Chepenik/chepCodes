// Header.tsx

import Image from 'next/image';
import chepcodes from 'public/chepcode.png';

export default function Header() {

  return (
    <header className="bg-blue-500 p-4 text-white">
      
      <div className="container mx-auto flex justify-between items-center">

        <Image src={chepcodes} alt="ChepCodes" className='rounded-full' width={200} height={50}/>

        <nav className="space-x-6 hidden md:block">
          <a href="/merch" className="hover:text-gray-200">Merch</a>
          <a href="/courses" className="hover:text-gray-200">Courses</a>
          <a href="/resources" className="hover:text-gray-200">Resources</a>
        </nav>

        {/* Mobile menu */}
        <button className="block md:hidden">
          {/* Hamburger icon */}
        </button>

      </div>

    </header>
  )

}