'use client';

import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import { Trash2 } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => dispatch(removeFromCart(id));
  const handleQuantityChange = (id, value) =>
    dispatch(updateQuantity({ id, quantity: parseInt(value) }));

  if (!items.length) {
    return (
      <>
      <Navbar />
      <div className="p-8 text-gray-500 flex justify-center items-center h-48">
        Your cart is empty.
      </div>
      </>
    );
    
  }

  return (
    <div>
    <Navbar />
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-md shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-6 text-black">Your Cart</h2>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b pb-4"
          >
            {/* Product Image */}
            <div className="w-24 h-24 relative flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-md border"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-black">{item.title}</h3>
              <p className="text-gray-600 mb-1">${item.price} each</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Qty:</span>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  className="w-16 border rounded px-2 py-1 text-sm text-black"
                  min="1"
                />
              </div>
            </div>

            {/* Delete Icon */}
            <button
              onClick={() => handleRemove(item.id)}
              className="text-red-600 hover:text-red-800"
              title="Remove"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Cart Total */}
      <div className="mt-6 text-right text-lg font-semibold text-black">
        Total: $
        {items
          .reduce((sum, item) => sum + item.price * item.quantity, 0)
          .toFixed(2)}
      </div>
    </div>
    </div>
  );
}
