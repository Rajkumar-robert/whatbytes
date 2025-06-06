import { useState } from "react";
import PriceSlider from "./PriceSlider";

export default function  Sidebar({ categories, onFilterChange }) {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleCategoryChange = (category) => {
    onFilterChange({ category });
  };

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
    onFilterChange({ priceRange: newRange });
  };

  return (
    <div className="w-full lg:w-64 px-4 py-4 space-y-6 bg-white ">
      <div className="bg-[#0758A8] p-3 rounded-xl text-white">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Category</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center">
                <input
                  type="radio"
                  id={`cat-${category}`}
                  name="category"
                  value={category}
                  onChange={() => handleCategoryChange(category)}
                  className="mr-2"
                />
                <label htmlFor={`cat-${category}`}>{category}</label>
              </div>
            ))}
          </div>
        </div>
        
        <PriceSlider 
          onPriceChange={handlePriceChange}
          initialRange={priceRange}
        />
      </div>
    </div>
  );
}