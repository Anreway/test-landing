import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-8 text-black">
            Выберите продукт,<br />
            который вам интересен:
          </h1>
        </div>
        
        <div className="space-y-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
