'use client';

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

const SearchBar = ({ initialValue = '' }) => {
    const router = useRouter();
    const searchRef = useRef(null);

    useEffect(() => {
        if (searchRef.current) {
            searchRef.current.value = initialValue;
        }
    }, [initialValue]);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchQuery = e.currentTarget.search.value.trim();
        if (searchQuery) {
            router.push(`/?search=${encodeURIComponent(searchQuery)}`);
        } else {
            router.push('/');
        }
    };

    return (
        <form onSubmit={handleSearch} className="relative w-1/2 ">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
                <Search size={20} />
            </div>
            <input
                ref={searchRef}
                name="search"
                type="text"
                placeholder="Search products..."
                className="pl-10 py-2 pr-3 w-full rounded-md text-black placeholder:text-gray-300 outline-none focus:ring-1 focus:ring-white transition-colors active:ring-white bg-[#347cc4]"
                defaultValue={initialValue}
            />
        </form>
    );
};

export default SearchBar;