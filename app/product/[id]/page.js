"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import { products } from "../../utils/data";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Star } from "lucide-react";
import toast from "react-hot-toast";

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    toast.success(`${product.title} added to cart`);
  };

  return (
    <div className=" flex flex-col">
      <main className="flex-grow container bg-white">
        <Navbar />
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-[0px_10px_50px_rgba(0,0,0,0.1)]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="px-4 md:px-0 mb-20 md:mb-20 md:w-1/2 space-y-4 mt-18">
            <h1 className="text-3xl font-bold text-black">{product.title}</h1>
            <p className="text-2xl font-semibold text-black">
              ${product.price}
            </p>
            <p className="text-black">{product.description}</p>
            <p className="text-sm text-black">Category: {product.category}</p>
            {product.rating && (
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < product.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-1 text-lg text-black"
                >
                  -
                </button>
                <span className="px-3 py-1 text-black">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-3 py-1 text-lg text-black"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
