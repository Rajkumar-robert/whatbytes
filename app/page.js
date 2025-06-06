"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import { products, categories } from "./utils/data";
import { useSearchParams } from "next/navigation";


export default function Home() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [0, 1000],
  });

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const filteredProducts = products.filter((product) => {
    if (
      searchQuery &&
      !product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    if (filters.category !== "All" && product.category !== filters.category) {
      return false;
    }

    if (
      product.price < filters.priceRange[0] ||
      product.price > filters.priceRange[1]
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto flex md:flex-row  flex-col gap-6 p-4">
        <div className="w-full md:w-64 md:sticky top-20 self-start h-fit">
          <Sidebar
            categories={categories}
            onFilterChange={handleFilterChange}
          />
        </div>

        <div className="flex-grow mt-4">
          {searchQuery && (
            <div className="mb-4 px-4">
              <p className="text-gray-600">
                Showing results for:{" "}
                <span className="font-semibold">"{searchQuery}"</span>
              </p>
            </div>
          )}

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-black">
                No products found
              </h3>
              <p className="text-black">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
