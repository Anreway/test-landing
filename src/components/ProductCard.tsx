'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product, getProductLink } from '../firebase/linkService';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      
      const link = await getProductLink(product.id);
      
      window.location.href = link;
    } catch (error) {
      console.error('Ошибка при получении ссылки:', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 mb-4 flex flex-col md:flex-row items-center shadow-sm">
      <div className="w-full md:w-1/4 mb-4 md:mb-0 md:mr-8">
        <Image
          src={product.imageSrc}
          alt={product.title}
          width={200}
          height={120}
          className="object-contain"
        />
      </div>
      <div className="w-full md:w-3/4 flex flex-col">
        <h3 className="text-2xl font-bold mb-1 text-black">{product.title}</h3>
        <p className="text-gray-500 mb-4">{product.description}</p>
        <button
          onClick={handleClick}
          disabled={isLoading}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-4 px-6 rounded-md w-full md:max-w-xs self-center md:self-end transition-colors"
        >
          {isLoading ? 'Загрузка...' : product.buttonText}
        </button>
      </div>
    </div>
  );
} 