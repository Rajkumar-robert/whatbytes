import { useState } from "react";

export default function PriceSlider({ onPriceChange, initialRange = [0, 1000] }) {
  const [min, setMin] = useState(initialRange[0]);
  const [max, setMax] = useState(initialRange[1]);
  const minGap = 10;

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (value < max - minGap) {
      setMin(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > min + minGap) {
      setMax(value);
    }
  };

  const handleApplyClick = () => {
    if (typeof onPriceChange === 'function') {
      onPriceChange([min, max]);
    }
  };

  return (
    <div className="w-full">
      <h3 className="font-semibold mb-2">Price Range</h3>

      <div className="flex items-center justify-evenly mb-2"> 
        <div className="w-full max-w-xs">
          <div className="relative h-4">
            <div className="flex justify-center items-center relative h-1">
              <div className="absolute w-full h-1 bg-gray-300 rounded-full"></div>
              <div
                className="absolute h-1 bg-blue-300 rounded-full"
                style={{
                  left: `${(min / 1000) * 100}%`,
                  right: `${100 - (max / 1000) * 100}%`,
                }}
              ></div>
              <input
                type="range"
                min="0"
                max="1000"
                value={min}
                onChange={handleMinChange}
                className="absolute w-full pointer-events-none appearance-none bg-transparent
                  [&::-webkit-slider-thumb]:appearance-none 
                  [&::-webkit-slider-thumb]:w-4 
                  [&::-webkit-slider-thumb]:h-4 
                  [&::-webkit-slider-thumb]:rounded-full 
                  [&::-webkit-slider-thumb]:bg-white 
                  [&::-webkit-slider-thumb]:border 
                  [&::-webkit-slider-thumb]:border-gray-400 
                  [&::-webkit-slider-thumb]:pointer-events-auto"
              />
              <input
                type="range"
                min="0"
                max="1000"
                value={max}
                onChange={handleMaxChange}
                className="absolute w-full pointer-events-none appearance-none bg-transparent
                  [&::-webkit-slider-thumb]:appearance-none 
                  [&::-webkit-slider-thumb]:w-4 
                  [&::-webkit-slider-thumb]:h-4 
                  [&::-webkit-slider-thumb]:rounded-full 
                  [&::-webkit-slider-thumb]:bg-white 
                  [&::-webkit-slider-thumb]:border 
                  [&::-webkit-slider-thumb]:border-gray-400 
                  [&::-webkit-slider-thumb]:pointer-events-auto"
              />
            </div>
          </div>
          <div className="flex justify-between mb-2 text-sm">
            <span>${min}</span>
            <span>${max}</span>
          </div>
        </div>
      </div>
      <button 
        onClick={handleApplyClick}
        className="w-full py-1 bg-[#fff] text-black rounded hover:bg-[#f0f0f0] transition-colors"
      >
        Apply Price Range
      </button>
    </div>
  );
}