// src/components/features/ProductList.js
import React from 'react';

function ProductList({ products, onAddToCart }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="border border-slate-100 p-4 rounded-lg shadow-sm">
          <div className="h-64 bg-slate-200 mb-4 rounded"></div>
          <h2 className="text-xl font-bold text-slate-900">{product.name}</h2>
          <p className="text-slate-500 mb-4">${product.price}</p>
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full bg-slate-900 text-white py-2 font-bold hover:bg-black transition"
          >
            Add to Bag
          </button>
        </div>
      ))}
    </div>
  );
}
export default ProductList;