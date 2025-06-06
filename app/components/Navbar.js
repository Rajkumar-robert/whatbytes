'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import SearchBar from './SearchBar';
import Image from 'next/image';

export default function Navbar() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  return (
    <div className="w-full sticky top-0 z-10 bg-[#0758A8] text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <Image
            src="/logo.png"
            height={50} width={50}
            alt='logo.png'/>
        </Link>
        <SearchBar initialValue={searchQuery} />
        <div className="space-x-4">
          <Link href="/cart" className='flex items-center p-2  rounded-xl hover:bg-[#084e93] transition-colors active:bg-[#084e93]'>
            <ShoppingCart />
            <span className="hidden sm:flex ml-2 ">Cart</span>
          </Link>
        </div>
       
      </div>
    </div>
  );
}