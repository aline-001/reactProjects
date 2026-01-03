// src/components/features/ProductDetailModal.js
import React from 'react';

function ProductDetailModal({ product, onClose, onAddToCart }) {
  if (!product) return null; 

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
      <div className="bg-white max-w-4xl w-full rounded-lg overflow-hidden flex flex-col md:flex-row relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-900 text-2xl font-bold z-10"
        >
          ✕
        </button>
        
        <div className="md:w-1/2 bg-slate-100">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="md:w-1/2 p-10 flex flex-col justify-center bg-white">
          <h2 className="text-yellow-600 tracking-widest text-sm uppercase mb-2">SheStyle Collection</h2>
          <h1 className="text-4xl font-serif text-slate-900 mb-4">{product.name}</h1>
          <p className="text-slate-600 mb-6 leading-relaxed italic">
            "A royal choice for the modern Élégance Lady."
          </p>
          <div className="text-2xl font-bold text-slate-900 mb-8">${product.price}</div>
          
          <button 
            onClick={() => { onAddToCart(product); onClose(); }}
            className="bg-black text-white py-4 font-bold tracking-[0.2em] hover:bg-yellow-600 transition"
          >
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailModal;