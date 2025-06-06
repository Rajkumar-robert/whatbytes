'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart`);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-[0px_5px_25px_rgba(0,0,0,0.1)] m-2">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square">
          <Image src={product.image} alt={product.title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-black font-semibold text-lg">{product.title}</h3>
          <p className="text-black font-bold my-2">${product.price}</p>
          {product.rating && (
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </Link>
      <div className="p-4 pt-0">
        <button
          onClick={handleAddToCart}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
